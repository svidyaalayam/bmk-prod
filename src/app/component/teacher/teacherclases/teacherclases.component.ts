import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Enrollment  } from 'src/app/model/enrollment';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import {CoursesService} from 'src/app/shared/courses.service';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';

@Component({
  selector: 'app-teacherclases',
  templateUrl: './teacherclases.component.html',
  styleUrls: ['./teacherclases.component.css']
})
export class TeacherclasesComponent {

  @Input() bmkuser: any;
  @Output() dataEvent = new EventEmitter<boolean>();

  constructor(private sd : StudentsDataService, private commFuncs: CommonfunctionsService) {
      
  }
  ngOnInit(): void{
    this.getOrUpdateUserDetals();
  }

  userClassText: string = '';
  usersClassData: Classdata []= [];
  userClassesRelData: Classuserdata[] = [];
  selectedClassIndex: number = -1;

  selectedStudentIndex: number = -1;

  selectedClassTeachersData: any [] = [];
  selectedClassStudentsData: any [] = [];

  onClassDataSelected(iRow: number): void {
    console.log('Teachers32');
    this.selectedClassIndex = iRow;  
    if(this.usersClassData.length > 0)
    {
      this.getTeachers(); 
      this.getStudents();   
    }
    
  }

  onStudentDataSelected(iRow: number): void {
    this.selectedStudentIndex = iRow
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
              this.getTeachers();  
              this.getStudents();     
        }              
      }) 
      this.userClassText = (userClasses.length == 0) ? "You are not assigned to any class." : "You are assigned to following classes";
      
    });   
  }

  getTeachers(): void{
    this.sd.getAllTeachersForClass(this.userClassesRelData[this.selectedClassIndex].classid).subscribe(teachers => {
      let thisClassTeachers: any[]= [];
      teachers.forEach(teacher => {
        this.sd.GetStudent(teacher.loginid).then(res => {
          thisClassTeachers.push({'docID': teacher.dataId, 'teacher' : res});
        }        
        );
      });
      this.selectedClassTeachersData = thisClassTeachers;    
    });
    
  }

  getStudents(): void{
    console.log("adss");
    this.sd.getAllUsersForClass(this.userClassesRelData[this.selectedClassIndex].classid).subscribe(teachers => {
      let thisClassTeachers: any[]= [];
      teachers.forEach(teacher => {
        this.sd.GetStudent(teacher.loginid).then(res => {
          thisClassTeachers.push({'docID': teacher.dataId, 'student' : res});
        }        
        );
      });
      this.selectedClassStudentsData = thisClassTeachers;   
      console.log(this.selectedClassStudentsData) ;
    });
    
  }
  
}
