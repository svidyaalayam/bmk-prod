import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import {TandcService} from 'src/app/shared/tandc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : string = '';
  password : string = '';
  sAuthResponse : string = '';
 
  bShowActivateButton : boolean = false;
  loggedUser : any;

  sTermsAndConditions : any[] = [];
  bAcceptTermsAndConds : boolean = false;
  bViewTermsAndConds : boolean = false;

  constructor(private auth : AuthService,  private sd : StudentsDataService) {    
    this.sTermsAndConditions = new TandcService().sTermsAndConditions;
  }


  login() {
    this.sAuthResponse = '';
    this.bShowActivateButton = false;

    if(!this.bAcceptTermsAndConds){
      this.sAuthResponse = 'Please accept to our teams and conditions.';      
      return;
    }


    if(this.email === ''){
      this.sAuthResponse = 'Please enter email. ';      
      return;
    }

    if(this.password === ''){
      this.sAuthResponse = 'Please enter password.';
      return;
    }

    if(!this.auth.validateEmail(this.email)){
      this.sAuthResponse = 'The email address is badly formatted';
      return;
    }

    if(this.password.length<6){
      this.sAuthResponse = 'Password need to have minimum six characters';
      return;
    }    

    this.auth.login(this.email, this.password).then(response => {
      this.sAuthResponse = response.msg;
      if(response.error === 'verify') this.bShowActivateButton = true;
      this.loggedUser = response.user; 
      this.sd.getItems().subscribe(data => {
      
    });
    });       
  }

  activateAccount() {
    const response = this.auth.sendEmailForVarification(this.loggedUser);
      this.sAuthResponse = response.msg;
      this.bShowActivateButton = false;       
  }

}
