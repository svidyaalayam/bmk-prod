import { Component, EventEmitter, Input, Output } from '@angular/core';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';
import { Classschedule  } from 'src/app/model/classschedule';
import { ClassschedulesService } from 'src/app/shared/classschedules.service';

@Component({
  selector: 'app-teachercalander',
  templateUrl: './teachercalander.component.html',
  styleUrls: ['./teachercalander.component.css']
})
export class TeachercalanderComponent {

  @Input() bmkuser: any;
  @Output() dataEvent = new EventEmitter<boolean>();
  constructor(private sd : StudentsDataService, private commFuncs: CommonfunctionsService, private csched : ClassschedulesService) {
      
  }
  ngOnInit(): void{
    this.getOrUpdateUserDetals();
    this.onFilterSelectionChange();
  }

  userClassText: string = '';
  usersClassData: Classdata []= [];
  userClassesRelData: Classuserdata[] = [];
  selectedClassIndex: number = -1;

  showSchedules: boolean = false;
  selectedDate: string = '';
  selectedClassSchedules: Classschedule [] = [];
  selectedClassSchedulesToShow: any [] = [];
  selectedClassSchedulesToTable: any [] = [];
  previousClassNumber: number = -1;
  nextClassNumber: number = -1;

  selectedSchedule: any;

  bShowSelectedSchedules: boolean = false;

  selectedStudentIndex: number = -1;

  selectedClassStudentsData: any [] = [];
  attendanceCreated : boolean = false;


  filterOptions: any =[
    'Select a Class Session',
    'Previous & Next Classes',
    'All Previous Classes',
    'All Future Classes', 
    'All Classes'];

    selectedFilterOption = 'Select a Class Session';

    onFilterSelectionChange(){
      
      this.selectedClassSchedulesToTable = [];

      switch  (this.selectedFilterOption){
        case 'Previous & Next Classes':
          if(this.previousClassNumber>0) this.selectedClassSchedulesToTable.push(this.selectedClassSchedulesToShow[this.previousClassNumber]);
          if(this.nextClassNumber<this.selectedClassSchedulesToShow.length) this.selectedClassSchedulesToTable.push(this.selectedClassSchedulesToShow[this.nextClassNumber]);
       
          break;
  
        case 'All Previous Classes':
          for (let i = 0; i <= this.previousClassNumber; i++) {
            this.selectedClassSchedulesToTable.push(this.selectedClassSchedulesToShow[i])
          }

          break;
  
        case 'All Future Classes':
          for (let i = this.nextClassNumber; i < this.selectedClassSchedulesToShow.length; i++) {
            this.selectedClassSchedulesToTable.push(this.selectedClassSchedulesToShow[i])
          }

          break;
          
        case 'All Classes':
          for (let i = 0; i < this.selectedClassSchedulesToShow.length; i++) {
            this.selectedClassSchedulesToTable.push(this.selectedClassSchedulesToShow[i])
          }
          break;         
      }
  
    }




  onClassDataSelected(iRow: number): void {

    this.selectedDate = '';
    this.selectedSchedule = null;
    this.bShowSelectedSchedules = false;

    this.selectedClassIndex = iRow;  
    if(this.usersClassData.length > 0)
    {
      this.getSchedules(); 
      this.getStudents();
    }
    
  }

  getOrUpdateUserDetals(){
    let teacherEmail : string = ''+this.bmkuser.loginid;

    this.sd.getAllClassesForTeacher(teacherEmail).subscribe(userClasses => {
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
        this.getStudents();
      }
      
    });   
  }

  getSchedules(): void{    
    this.csched.getAllSchedulesForClass(this.userClassesRelData[this.selectedClassIndex].classid).subscribe(schedules => {      
      
      this.selectedClassSchedules = schedules.sort((a,b) => a.scheduledate.localeCompare(b.scheduledate));            
      
      const currentDate = this.commFuncs.getYearMonthDayForDate(new Date());
      

      this.selectedClassSchedulesToShow = [];

      for (let i = 0; i < this.selectedClassSchedules.length; i++) {
        if (this.selectedClassSchedules[i].scheduledate.localeCompare(currentDate) < 0) {
          this.previousClassNumber = i;
          this.nextClassNumber = i + 1;
        }
        if(this.previousClassNumber == -1)
        {
          this.previousClassNumber = -1;
          this.nextClassNumber = 0;
        }
        if(this.nextClassNumber == this.selectedClassSchedules.length)
        {
          this.previousClassNumber = this.selectedClassSchedules.length-1;
          this.nextClassNumber = this.selectedClassSchedules.length;
        }

        this.selectedClassSchedulesToShow.push(
          {
            'SlNo' : i+1,
            'schedule' : this.selectedClassSchedules[i]
          }
        )
      }
    
    });   
  }

  OnSelectSchedule(cs: Classschedule): void{
    this.selectedFilterOption = 'Select a Class Session';

    this.selectedDate = cs.scheduledate;
    this.selectedSchedule = cs;
    this.attendanceCreated = false;
    this.bShowSelectedSchedules = true;
  }

  formatDateInternational(inDate: string):string{
    return this.commFuncs.formatDateInternational(inDate);
  }

  takeAttendance(): void {
    this.selectedClassStudentsData.forEach(studentschedule => {
      this.csched.getClassScheduleStudent(this.selectedSchedule.dataId, studentschedule.student.loginid).then((scheduleStudent) => {
        studentschedule.schedule = scheduleStudent;        
      })
    })
    this.attendanceCreated = true;

  }

  getAtendance(): string {
    let nPresent: number = 0;
    let nAuthAbsent: number = 0;
    let nUnAuthAbesnt: number = 0;
    let nNotMarked: number = 0;
    this.selectedClassStudentsData.forEach(studentschedule => {
      if(studentschedule.schedule.present == 'Present') nPresent++;
      if(studentschedule.schedule.present == 'Authorised Absent') nAuthAbsent++;
      if(studentschedule.schedule.present == 'Unauthorised Absent') nUnAuthAbesnt++;
      if(studentschedule.schedule.present == 'Not marked') nNotMarked++;
    })

    return 'Present=' + nPresent + '; Authorised absent=' + nAuthAbsent + 
                    '; Unauthorised absent=' + nUnAuthAbesnt + 
                    '; Not Marked=' + nNotMarked +
                     '; Total students=' + this.selectedClassStudentsData.length;
  }

  getStudents(): void{

    this.sd.getAllUsersForClass(this.userClassesRelData[this.selectedClassIndex].classid).subscribe(students => {
      let thisClassStudents: any[]= [];
      students.forEach(student => {
        this.sd.GetStudent(student.loginid).then(res => {
          thisClassStudents.push({'open': false, 'docID': student.dataId, 'student' : res, 'schedule': null});
        }        
        );
      });
      this.selectedClassStudentsData = thisClassStudents;      
    });    
  }

  canTakeAttendance(): boolean {

    let currentDatePlus7Days = new Date();
    currentDatePlus7Days.setDate(currentDatePlus7Days.getDate() + 7);

    let allowedDate = this.commFuncs.getYearMonthDayForDate(currentDatePlus7Days);
    return (this.selectedSchedule.scheduledate.localeCompare(allowedDate) < 0) && this.attendanceCreated == false;

  }

  updateData(): void {   
    if(this.selectedSchedule){
      this.csched.createClassSchedule(this.selectedSchedule).then(() => {
        this.dataEvent.emit(false);
      })
    }    
  }

  cancelData(): void {
      this.dataEvent.emit(false);
  }
  
}
