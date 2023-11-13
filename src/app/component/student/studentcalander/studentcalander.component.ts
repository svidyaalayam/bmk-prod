import { Component, EventEmitter, Input, Output } from '@angular/core';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';
import { Classschedule  } from 'src/app/model/classschedule';
import { ClassschedulesService } from 'src/app/shared/classschedules.service';

@Component({
  selector: 'app-studentcalander',
  templateUrl: './studentcalander.component.html',
  styleUrls: ['./studentcalander.component.css']
})
export class StudentcalanderComponent {
  @Input() bmkuser: any;
  constructor(private sd : StudentsDataService, private commFuncs: CommonfunctionsService, private csched : ClassschedulesService) {
      
  }
  ngOnInit(): void{
    this.getOrUpdateUserDetals();
  }

  userClassText: string = '';
  usersClassData: Classdata []= [];
  userClassesRelData: Classuserdata[] = [];
  selectedClassIndex: number = -1;

  showSchedules: boolean = false;
  selectedDate: string = '';
  selectedClassSchedules: Classschedule [] = [];

  onClassDataSelected(iRow: number): void {
    this.selectedClassIndex = iRow;  
    if(this.usersClassData.length > 0)
    {
      this.getSchedules(); 
    }
    
  }

  getOrUpdateUserDetals(){
    let teacherEmail : string = ''+this.bmkuser.loginid;

    this.sd.getAllClassesForUser(teacherEmail).subscribe(userClasses => {
      this.usersClassData = [];
      this.userClassesRelData = userClasses;
      userClasses.forEach(userClass => {
        if(userClass.enddate == ''){
          this.sd.GetClassWithID(userClass.classid).then(res => {
              this.usersClassData.push(res)});
              this.onClassDataSelected(0);    
        }              
      }) 
      this.userClassText = (userClasses.length == 0) ? "You are not assigned to any class." : "You are assigned to following classes";
      if(userClasses.length>0){
        this.selectedClassIndex = 0;
        this.getSchedules(); 
      }
      
    });   
  }

  getSchedules(): void{    
    this.csched.getAllSchedulesForClass(this.userClassesRelData[this.selectedClassIndex].classid).subscribe(schedules => {      
      
      this.selectedClassSchedules = schedules.sort((a,b) => a.scheduledate.localeCompare(b.scheduledate));            
    });   
  }

  formatDateInternational(inDate: string):string{
    return this.commFuncs.formatDateInternational(inDate);
  }
  
}
