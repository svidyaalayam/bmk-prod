import { Component, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import { Userdata } from './model/userdata';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { EngToTelService } from 'src/app/shared/eng-to-tel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmkapp';
  isLanguageTelugu = true;
  profilePictureUrl = './assets/images/BalamukundamKids.png';

  isAdmin$: boolean = false;
  isTeacher$: boolean = false;
  isStudent$: boolean = false;
  isLoggedIn$: boolean = false;
  sLoggedUser: string = "Hi Guest, Please login"
  userStartPage: string = 'myworkspace';


  @ViewChild('mobileBar')mobileBar!: ElementRef;

  currentUser: any;

  constructor(private sd : StudentsDataService, private fa: AngularFireAuth, private sEngToTel: EngToTelService, private commFuncs: CommonfunctionsService){
  }

  ngOnInit(): void{
    this.fa.authState.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn$ = (user !== null);
      if(this.isLoggedIn$){
        if(''+user?.email !== 'null')
        {
          this.sd.GetStudent(''+user?.email).then((student: Userdata) => {
            if(student.name !== ''){
              this.sLoggedUser = "Hi " + student.name;
            }
            else{
              this.sLoggedUser = "Hi " + user?.email;
            }
            if(student.photourl !== ''){
              this.profilePictureUrl = student.photourl;
            }  
            
            this.isAdmin$ = (student.usertype == 2 && student.accepted && !student.accountsuspended);
            this.isTeacher$ = (student.usertype == 1 && student.accepted && !student.accountsuspended);
            this.isStudent$ = (student.usertype == 0 && student.accepted && !student.accountsuspended);
            if(this.isStudent$){
               this.sLoggedUser = this.sLoggedUser + ' (Student)';
            }
            else if(this.isTeacher$) {
              this.sLoggedUser = this.sLoggedUser + ' (Teacher)';
            }
            else if(this.isAdmin$){
               this.sLoggedUser = this.sLoggedUser + ' (Admin)';         
            }
          });
        }
        
      }
      else{
        this.sLoggedUser = "Hi Guest, Please login";
        this.profilePictureUrl = './assets/images/BalamukundamKids.png';
      }  
    })

    
  }

  testUser(){

  }

  myFunctionMobile(){
    if(this.mobileBar.nativeElement.className.indexOf("w3-show")== -1){
      this.mobileBar.nativeElement.className += " w3-show";
    }
    else{
      this.mobileBar.nativeElement.className = this.mobileBar.nativeElement.className.replace(" w3-show", "");
    };    

  }




}
