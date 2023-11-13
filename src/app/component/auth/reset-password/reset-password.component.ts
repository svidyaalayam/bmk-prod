import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  email : string = '';

  constructor(private auth : AuthService) {    
  }

  ngOnInit(): void {
  }

  forgotPassword() {
    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    this.auth.forgotPassword(this.email);     
  }

}
