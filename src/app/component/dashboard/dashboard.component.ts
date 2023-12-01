import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { StudentsDataService } from 'src/app/shared/students-data.service';
import { CoursesService } from 'src/app/shared/courses.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  listAllClassBdayStudents: any = [];
  
  constructor(private sd : StudentsDataService, private commFuncs: CommonfunctionsService) {  
    
  }
  ngOnInit(): void{
    this.getAllBirthDayUsers();
  }

  usersClassData: Classdata []= [];
  userClassesRelData: Classuserdata[] = [];
  bmkClasses: any []= [];
  bDays: any [] = [];

  getAllBirthDayUsers():void{

    const today = new Date();
    const currentWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (today.getDay()>0 ? today.getDay() : 7));
    const currentWeekEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (13 - today.getDay()));
    const bSameYear = (currentWeekStart.getFullYear() == currentWeekEnd.getFullYear());
    this.sd.getItems().subscribe(bmkUs => {
      let bDayUsers : any [] = [];
      bmkUs.forEach(bmkU => {
        const bmkDate = new Date(bmkU.dob)
        const bmkBirthDat = new Date(today.getFullYear(), bmkDate.getMonth(), bmkDate.getDate());
        if(bmkBirthDat >= currentWeekStart && bmkBirthDat <= currentWeekEnd){
          this.sd.getAllClassesForUser(bmkU.loginid).subscribe(bmkClass=> {
            {
              let bdata = {
                'name':bmkU.name +' '+ bmkU.surname,
                'class':'',
                'dob': this.commFuncs.formatDateWithoutYear(bmkBirthDat.toDateString()),
                'photourl': bmkU.photourl
              }
              let sClassText: string = '';
              bmkClass.forEach(bmlClas => {
                this.sd.GetClassWithID(bmlClas.classid).then(res => {
                  console.log(res.name);
                  sClassText = (sClassText=='') ? res.name : sClassText + '; ' + res.name
                  bdata.class = sClassText;
                })  
                
                bDayUsers.push(bdata);
                
              })
 
            }
          });           
          
        } 
      })


      this.bDays = bDayUsers;
    
    });
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
