import { Component } from '@angular/core';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';
import { Classschedule  } from 'src/app/model/classschedule';
import { ClassschedulesService } from 'src/app/shared/classschedules.service';
import { StudentsDataService } from 'src/app/shared/students-data.service';
import { CoursesService } from 'src/app/shared/courses.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent {
  
  bmkClasses: any []= [];
  bmkCourses: any []= [];
  bmkTeachers: any [] = [];
  classTeachers: any [] = [];
  selectedCourseId: number = 0;

  bmkStudents: any [] = [];
  classStudents: any [] = [];

  

  constructor(private auth : AuthService, private sd : StudentsDataService, private csched : ClassschedulesService, private commFuncs: CommonfunctionsService) {  
    this.getCourses();
  }
  
  selectedId: any = 0;
  showClasses: boolean = false;
  selectedClass: Classdata = this.initiatiateClass();

  showTeachersToAdd: boolean = false;
  selectedTeacherID: string = '';

  showStudentsToAdd: boolean = false;
  selectedStudentID: string = '';

  showRemoveStudentButton: boolean = false;

  showSchedules: boolean = false;
  selectedDate: string = '';
  selectedClassSchedules: Classschedule [] = [];
  applyScheduleForClasses: string [] = [];
  copySchedules: boolean = false;
  copyingId: any = 0;

  initiatiateClass(): Classdata{
    this.selectedId = 0;
    return {
      classid : '',
      name : '',
      courseid : this.selectedCourseId,
      description : '',
      timings : '',
      zoom : '',
      notes : '',
      active : true,
      createdOn : '',
      createdBy : ''
    };
  }

  IsEditable: boolean = false;

  onCourceSelectionChange(): void {
    this.showClasses = false; 
    this.initiatiateClass();
    if(this.selectedCourseId > 0 )
    {
      this.getClasses();
      this.showClasses = true; 
    }    
  }

  getTeachers(): void{
    
    this.sd.getAllTeachersForClass(this.selectedClass.classid).subscribe(teachers => {
      let thisClassTeachers: any[]= [];
      teachers.forEach(teacher => {
        this.sd.GetStudent(teacher.loginid).then(res => {
          thisClassTeachers.push({'docID': teacher.dataId, 'teacher' : res});
        }        
        );
      });
      this.classTeachers = thisClassTeachers;
            
    });

    this.bmkTeachers = [];
    this.sd.getAllUsersOfType(1).subscribe(teachers => {
      this.bmkTeachers = teachers;
      if(this.bmkTeachers.length>0){
        this.bmkTeachers.unshift({name: 'Select a teacher', surname: '', loginid:''})
      }
    });    
  }

  getStudents(): void{

    
    this.sd.getAllUsersForClass(this.selectedClass.classid).subscribe(students => {
      let thisClassStudents: any[]= [];
      students.forEach(student => {
        this.sd.GetStudent(student.loginid).then(res => {
          thisClassStudents.push({'docID': student.dataId, 'student' : res});
        }        
        );
      });
      this.classStudents = thisClassStudents;
            
    });


    this.bmkStudents = [];
    this.sd.getAllAcceptedActiveUsersOfType(0).subscribe(students => {
      this.bmkStudents = students;
      if(this.bmkStudents.length>0){
        this.bmkStudents.unshift({name: 'Select a student', surname: '', loginid:''})
      }
    });    
  }

  getTeacherText():string{
    
    let stringTeachers = '';
      if(this.classTeachers.length == 0) stringTeachers = 'This class has no teachers';
      if(this.classTeachers.length == 1) stringTeachers = `This class teacher : ${this.classTeachers[0].teacher.name} ${this.classTeachers[0].teacher.surname}`;
      if(this.classTeachers.length > 1){
        stringTeachers = `This class teachers : ${this.classTeachers[0].teacher.name} ${this.classTeachers[0].teacher.surname}`;
        for (let i = 1; i < this.classTeachers.length-1; i++) {
          stringTeachers += `, ${this.classTeachers[i].teacher.name} ${this.classTeachers[i].teacher.surname},`;
        }
        stringTeachers += ` and ${this.classTeachers[this.classTeachers.length-1].teacher.name} ${this.classTeachers[this.classTeachers.length-1].teacher.surname}.`;
      } 
      return stringTeachers;      
  }

  IsTeacherAdded():boolean{
    let bResult = false
    this.classTeachers.forEach(teacher => {
      if(teacher.teacher.loginid == this.selectedTeacherID) bResult = true;
    });
    return bResult;
  }

  IsStudentAdded():boolean{
    let bResult = false
    this.classStudents.forEach(student => {
      if(student.student.loginid == this.selectedStudentID) bResult = true;
    });
    return bResult;
  }

  getClasses():void{
    this.bmkClasses = [];
    this.sd.getAllClasses().subscribe(classes => {  
      this.bmkClasses =   classes.filter(clas => clas.courseid == this.selectedCourseId);

      if(this.bmkClasses.length>0){
        this.bmkClasses.unshift({name: 'Select a class', description: '', timings:''})

      }
    });
    
  }

  getCourses():void{

    this.bmkCourses = [{id: 0, title:'Select a course'}];
    new CoursesService().sClassesStudents.forEach(course => {
        this.bmkCourses.push({
          id: course.id,
          title: course.id + ' - ' + course.title         
        })
       })
  }

  onDataSelected(){

    if(this.selectedId>=0){
      this.selectedClass = {
        classid : this.bmkClasses[this.selectedId].classid,
        name : this.bmkClasses[this.selectedId].name,
        courseid : this.bmkClasses[this.selectedId].courseid,
        description : this.bmkClasses[this.selectedId].description,
        timings : this.bmkClasses[this.selectedId].timings,
        zoom : this.bmkClasses[this.selectedId].zoom,
        notes : this.bmkClasses[this.selectedId].notes,
        active : this.bmkClasses[this.selectedId].active,
        createdOn : '',
        createdBy : ''
      };

      this.getTeachers();  
      this.getStudents(); 
      this.getSchedules();   
      
      this.IsEditable = false;
    }    
  }

  onTeacherSelectionChangeToAddUser(): void {
   

  }

  onStudentSelectionChangeToAddUser(): void {
   

  }

  onAddTeacher(): void {

    if(this.selectedClass && this.selectedTeacherID !== '')
    {
      const newClassUser : Classuserdata = {
        dataId : '',
        classid : this.selectedClass.classid,
        loginid : this.selectedTeacherID,
        startdate : new CommonfunctionsService().getCurrentDate(),
        enddate : ''
      }
      this.sd.createClassUsers(newClassUser, true).then(() => {
        this.getTeachers();
       }) 
    }
  }

  onRemoveTeacher(): void {
    if(this.selectedClass && this.selectedTeacherID !== '')
    {
      this.classTeachers.forEach(classTeacher => {
        if(classTeacher.teacher.loginid == this.selectedTeacherID){
          this.sd.removeClassUsers(classTeacher.docID, true).then(() => {
            this.getTeachers();
          });
        }
      })
    }
  }

  onAddStudent(): void {

    if(this.selectedClass && this.selectedStudentID !== '')
    {
      const newClassUser : Classuserdata = {
        dataId : '',
        classid : this.selectedClass.classid,
        loginid : this.selectedStudentID,
        startdate : new CommonfunctionsService().getCurrentDate(),
        enddate : ''
      }
      this.sd.createClassUsers(newClassUser, false).then(() => {
        this.getStudents();
       }) 
    }
  }

  onRemoveStudent(): void {
    if(this.selectedClass && this.selectedStudentID !== '')
    {
      this.classStudents.forEach(classStudent => {
        if(classStudent.student.loginid == this.selectedStudentID){
          this.sd.removeClassUsers(classStudent.docID, false).then(() => {
            this.getStudents();
            this.showRemoveStudentButton = false;
          });
        }
      })
    }
  }


  onAddSchedule(): void {
    if(this.selectedDate !== ''){

      const aSchedule : Classschedule = {
        dataId : '',
        classid : this.selectedClass.classid,
        scheduledate : this.selectedDate,
      }
      this.csched.createClassSchedule(aSchedule).then(() => {
        this.getSchedules();
       }) 
    }
  }

  onCopySchedule(): void {
    this.csched.getAllSchedulesForClass(this.selectedClass.classid).subscribe(schedules => {  
      
      schedules.forEach(schedule => {

        const aSchedule : Classschedule = {
          dataId : '',
          classid : this.bmkClasses[this.copyingId].classid,
          scheduledate : schedule.scheduledate,
        }
        this.csched.createClassSchedule(aSchedule).then(() => {
          this.copyingId = 0;
         })            
      }); 
        
      });   


  }

  getSchedules(): void{    
    this.csched.getAllSchedulesForClass(this.selectedClass.classid).subscribe(schedules => {      
      
      this.selectedClassSchedules = schedules.sort((a,b) => a.scheduledate.localeCompare(b.scheduledate));            
    });   
  }

  formatDateInternational(inDate: string):string{
    return this.commFuncs.formatDateInternational(inDate);
  }

  



  onAddNew(){
    this.selectedClass = this.initiatiateClass();
    this.IsEditable = true; 
  }

  onDuplicate(){
    this.selectedClass = {
      classid : '',
      name : 'Copy of ' + this.bmkClasses[this.selectedId].name,
      courseid : this.bmkClasses[this.selectedId].courseid,
      description : this.bmkClasses[this.selectedId].description,
      timings : this.bmkClasses[this.selectedId].timings,
      zoom : this.bmkClasses[this.selectedId].zoom,
      notes : this.bmkClasses[this.selectedId].notes,
      active : true,
      createdOn : '',
      createdBy : ''
    };
    this.IsEditable = true; 
    this.selectedId=0;
  }

  onUpdate(){
    this.selectedClass = {
      classid : this.bmkClasses[this.selectedId].classid,
      courseid : this.bmkClasses[this.selectedId].courseid,
      name : this.bmkClasses[this.selectedId].name,
      description : this.bmkClasses[this.selectedId].description,
      timings : this.bmkClasses[this.selectedId].timings,
      zoom : this.bmkClasses[this.selectedId].zoom,
      notes : this.bmkClasses[this.selectedId].notes,
      active : this.bmkClasses[this.selectedId].active,
      createdOn : '',
      createdBy : ''
    };
    this.IsEditable = true;
  }

  sortBy(property: string): void {
    this.bmkClasses.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  }


  cancelForm() {
    this.selectedId = 0;
    this.IsEditable = false;
  }

  onSubmit(): void {
    this.sd.createClass(this.selectedClass).then(() => {
      console.log('Data updated to database successfully!');
      this.selectedId = 0;
      this.IsEditable = false;
    })
  }


}
