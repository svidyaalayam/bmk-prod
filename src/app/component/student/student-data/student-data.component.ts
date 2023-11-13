import { Component } from '@angular/core';
import { Userdata } from '../../../model/userdata';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import { AuthService } from 'src/app/shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})

export class StudentDataComponent {

  welcomeData: any = {
    loginid: '',
    name: '',
    surname: '',
    sMessages: [],
  }

  loggeduser : any = null;
  bmkuser: any = {
    loginid: '',
    name: '',
    surname: '',
    gender: '',
    dob: '',
    parentsname: '',
    contactnumber: '',
    whatsappnumber: '',
    city: '',
    teachername: '',
    photourl: '',
    usertype: 0,
    additionalinfo: '',
    dataverifieddate: '',
    dataverifiedby: '',
    admincomments: '',
    accepted: false,
    accountsuspended: false
  };
  IsEditable: boolean = false;
  personalData: any = {
    bmkuser: this.bmkuser,
    IsEditable: this.IsEditable
  }

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  messageToUser: string = '';
  messagesToUser: string[] = [];

  
  bShowActivateButton: boolean = false;
  nShowTheTab: number = 0;

  bValidStudent: boolean = false;
  bValidTeacher: boolean = false;
  bValidAdmin: boolean = false;



  selectedId: any = 3;

    constructor(private auth : AuthService, private sd : StudentsDataService, private fa: AngularFireAuth, private commFuncs: CommonfunctionsService, private router: Router) {
      
    }

    ngOnInit(): void{
      this.getOrUpdateUserDetals();  
    }

    getDateTimeForTimeStamp(firestoreTimestamp: any ): string{
      return this.commFuncs.getDateFirestoreStamp(firestoreTimestamp);
    }


    getOrUpdateUserDetals(){
      this.fa.authState.subscribe(user => {
        const myEmail : any = user?.email;
        this.loggeduser = user;
        this.sd.GetStudent(myEmail).then((student: Userdata) => {
          this.bmkuser = student;
          if(student.name !== '') this.welcomeData.sMessages
          
            this.messageToUser = "Welcome: " + student.name + " " + student.surname;
          
            this.messageToUser = "Welcome: " + user?.email;
            
            this.bValidStudent = (student.usertype == 0);
            this.bValidTeacher = (student.usertype == 1);
            this.bValidAdmin = (student.usertype == 2);

          this.welcomeData.loginid = this.bmkuser.loginid;
          this.welcomeData.name = this.bmkuser.name;
          this.welcomeData.surname = this.bmkuser.surname;

          if (!user?.emailVerified){   
            this.welcomeData.sMessages = [];         
            this.welcomeData.sMessages.push({warn: true, msg: "You have not confirmed email link yet."});
            this.welcomeData.sMessages.push({warn: false, msg: "A Link has been sent on your registered email: " + user?.email});
            this.welcomeData.sMessages.push({warn: false, msg: 'Not received anything yet?'});
            this.welcomeData.sMessages.push({warn: false, msg:'Sometimes emails can end up in a spam or junk folder. So please check these and confirm your details.'});
           
            this.bShowActivateButton = true;
            this.bValidStudent = false;
            this.bValidTeacher = false;
            this.bValidAdmin = false;
          }
          else if (!student.accepted){  
            console.log("Student not accepted");
            this.welcomeData.sMessages = [];         
            this.welcomeData.sMessages.push({warn: false, msg: "Thanks for registering with Balamukundam."});
            this.welcomeData.sMessages.push({warn: true, msg: 'Our Admin team are verifying your details.'});
            this.welcomeData.sMessages.push({warn: false, msg: 'Once the verification process completes you will get access to your lessons.'});
            
            this.bValidStudent = false;
            this.bValidTeacher = false;
            this.bValidAdmin = false;
          }
          else if (student.accountsuspended){   
            this.welcomeData.sMessages = [];         
            this.welcomeData.sMessages.push({warn: true, msg: "We are sorry that your account status is not active."});
            this.welcomeData.sMessages.push({warn: false, msg: 'Please contact your class teachers.'});
            this.welcomeData.sMessages.push({warn: false, msg: 'If students are absent for 3 consicutive classes the account automatically gets inactive.'});
            
            this.bValidStudent = false;
            this.bValidTeacher = false;
            this.bValidAdmin = false;
          }
          if(student.usertype == 0){
            if(student.teachername == 'New Registration, not in any class' || student.teachername == 'Select a class')
            this.welcomeData.sMessages.push({warn: true, msg: "Select name of your class teacher, so that admin can assign you to class quickly."});
            
            if(student.photourl == '')
            this.welcomeData.sMessages.push({warn: false, msg: 'Please update all Your Personal Details and also please add a profile image.'});
          }

          
        });
      })

    }

    activateAccount() {
      const response = this.auth.sendEmailForVarification(this.loggeduser);
      this.welcomeData.sMessages = [];  
      this.welcomeData.sMessages.push(response.msg); 
      this.bShowActivateButton = false;    
    }
  

    receiveDataFromChild(data: boolean) {
    this.nShowTheTab = 0;
  }
}
