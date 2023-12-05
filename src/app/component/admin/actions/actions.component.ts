import { Component } from '@angular/core';
import { StudentsDataService } from 'src/app/shared/students-data.service';
import { CoursesService } from 'src/app/shared/courses.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';
import { Userdata } from 'src/app/model/userdata';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {

  listAllClassBdayStudents: any = [];
  
  constructor(private sd : StudentsDataService, private commFuncs: CommonfunctionsService) {  
    
  }
  ngOnInit(): void{
  }

  usersClassData: Classdata []= [];
  userClassesRelData: Classuserdata[] = [];
  bmkClasses: any []= [];
  bmkUsers: any [] = [];


  getAllUsersRegisteredClass():void{

    this.sd.getItems().subscribe(bmkUs => {
        this.bmkUsers = bmkUs;
        console.log(this.bmkUsers);
    });
  }


  getAllUsersNotInAnyClass():void{
      this.bmkUsers.forEach(bmkU => {
        this.sd.updateUserwithClasses(bmkU.loginid);
      })
  }

  updateAuser():void{
    this.sd.updateUserwithClasses("saripallisahasra06@gmail.com");
}

  getClasses():void{
/*    let thisdata: any [] = [];
    this.sd.getAllClasses().subscribe(classes => {  

      classes.forEach(aClass => {

      })
      this.bmkClasses =   classes.filter(clas => clas.courseid == this.selectedCourseId);

      if(this.bmkClasses.length>0){
        this.bmkClasses.unshift({name: 'Select a class', description: '', timings:''})

      }
    });
   */ 
  }


  getStudents(): void{
/*    this.sd.getAllUsersForClass(this.userClassesRelData[this.selectedClassIndex].classid).subscribe(teachers => {
      let thisClassTeachers: any[]= [];
      teachers.forEach(teacher => {
        this.sd.GetStudent(teacher.loginid).then(res => {
          thisClassTeachers.push({'docID': teacher.dataId, 'student' : res});
        }        
        );
      });
      this.selectedClassStudentsData = thisClassTeachers;   
    });
    */
  }

  



}
