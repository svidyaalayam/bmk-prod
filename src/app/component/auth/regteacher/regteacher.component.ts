import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {StudentsDataService} from 'src/app/shared/students-data.service';

import {CoursesService} from 'src/app/shared/courses.service';
import {TandcService} from 'src/app/shared/tandc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regteacher',
  templateUrl: './regteacher.component.html',
  styleUrls: ['./regteacher.component.css']
})
export class RegteacherComponent {
  regStep : number = 1;
  sMoveResponse : string = '';

  email : string = '';
  password : string = '';
  registeringAs : number = 1;
  sAuthResponse : string = '';
  selectedFile: File | null = null;

  sName : string = '';
  sSurname : string = '';
  sParentsname : string = '';
  sGender : string = '';
  sDob : string = '';
  sContactnumber : string = '';

  sErrorEmail : string = '';
  sErrorPassword : string = '';
  sErrorRegAs : string = '';
  sErrorName : string = '';
  sErrorSurname : string = '';
  sErrorParentsname : string = '';
  sErrorGender : string = '';
  sErrorDob : string = '';
  sErrorContactnumber : string = '';

  sTermsAndConditions : any[] = [];
  bCloseTandC : boolean = true;
  bOkForReg : boolean = true;

  sClassesOffered : any[] = [];



  constructor(private auth : AuthService, private sd : StudentsDataService, private router: Router) {    
    this.sTermsAndConditions = new TandcService().sTermsAndConditionsTeachers;
    this.sClassesOffered = new CoursesService().sClassesTeachers;
  }

  ngOnInit(): void {

  }

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
}

  moveNext() {

    this.sMoveResponse = '';
    this.regStep = 1;

    let classEnrolled = true;
    this.sClassesOffered.forEach(sCo => {
      if(sCo.enrolled) {
        this.regStep = 2;        
      }
    })

    if(this.regStep == 1){
      this.sMoveResponse = 'Select a class of your choice for registration.';
    }

  }

  register() {
    
    this.sAuthResponse = '';

    let tcAccepted = true;
    this.sTermsAndConditions.forEach(tAc => {
      if(!tAc.accepted) {
        tcAccepted = false;
        
      }
    })

    this.sErrorEmail = '';
    this.sErrorPassword = '';
    this.sErrorRegAs = '';
    this.sErrorName = '';
    this.sErrorSurname = '';
    this.sErrorParentsname = '';
    this.sErrorGender = '';
    this.sErrorDob = '';
    this.sErrorContactnumber = '';
    this.bOkForReg = true;

    if(!tcAccepted) {
      this.sAuthResponse = 'Please read and accept all the terms and conditions';
      return;
    }

    if(this.email === ''){
      this.sErrorEmail = 'Please enter email. ';   
      this.sAuthResponse = 'Please complete all mandatory fields';   
      this.bOkForReg = false;
    }

    if(this.password === ''){
      this.sErrorPassword = 'Please enter password.';
      this.sAuthResponse = 'Please complete all mandatory fields';  
      this.bOkForReg = false;
    }

    if(!this.auth.validateEmail(this.email)){
      this.sErrorEmail = 'The email address is badly formatted';
      this.sAuthResponse = 'Please complete all mandatory fields';  
      this.bOkForReg = false;
    }

    if(this.password.length<6){
      this.sErrorPassword = 'Password need to have minimum six characters';
      this.sAuthResponse = 'Please complete all mandatory fields';  
      this.bOkForReg = false;
    }   
    
    if(this.sName === ''){
      this.sErrorName = 'Please enter Name.';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }

    if(this.sName.length<3){
      this.sErrorName = 'Name need to have minimum three characters';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }  

    if(!this.auth.validateName(this.sName)){
      this.sErrorName = 'The name is not valid';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }    

    if(this.sSurname === ''){
      this.sErrorSurname = 'Please enter Surname.';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }

    if(!this.auth.validateName(this.sSurname)){
      this.sErrorSurname = 'The surname is not valid';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }       

    if(this.sGender === ''){
      this.sErrorGender = 'Please select gender.';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }

    if(!this.auth.validatePhoneNumber(this.sContactnumber)){
      this.sErrorContactnumber = 'The phone number is not valid';
      this.sAuthResponse = 'Please complete all mandatory fields';
      this.bOkForReg = false;
    }

    if(this.bOkForReg){
      this.auth.register(this.email, this.password, this.registeringAs, 
        this.sName, this.sSurname, this.sParentsname, this.sGender, this.sDob, this.sContactnumber, []).then(response => {
        this.sAuthResponse = response.msg;
      });

    }
  }



}
