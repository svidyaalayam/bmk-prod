import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { Userdata } from '../model/userdata';
import { Enrollment } from '../model/enrollment';
import {StudentsDataService} from 'src/app/shared/students-data.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public fireauth: AngularFireAuth, // Inject Firestore service
    public router: Router,
    private sd : StudentsDataService

  ) {   }

    ngOnInit(): void{
      this.getCurrentUser();
    }


  currentUser : any = null;
  currentUserData : any = null ;


  getCurrentUser(){
    this.fireauth.authState.subscribe(user => {
      this.currentUser = user;
      if(user !== null){
        if(''+user?.email !== 'null')
        {
          let myEmail = ""+user?.email;
          this.sd.GetStudent(myEmail).then((student: Userdata) => {
            this.currentUserData = student;
          });
        }        
      }
    })
  }  

    // login method
    login(email : string, password : string): Promise<any> {
      return this.fireauth.signInWithEmailAndPassword(email, password).then( res => {  
        this.currentUser =res.user;
        if(res.user?.emailVerified){          
          localStorage.setItem('token', 'true');
          this.router.navigate(['/myworkspace']);
          return {            
            error: 'null',
            msg: 'Login Successful'
          };          
        }
        else{
          this.logout();
          return {            
            error: 'verify',
            msg: 'Login Successful, but need to verify mail and confirm the account',
            user: res.user
          };
        }
      })
      .catch(err => {
        return {            
          error: 'login',
          msg: 'Login Unsuccessful. ' + err.message
        };
      })
    }
  
    // register method
    register(email : string, password : string, registeringAs : number,
      sName : string, sSurname : string, sParentsname : string, 
      sGender : string, sDob : string, sContactnumber : string, nClasssEnrolled : number[]) {

      if(!this.sd.getFireStoreAvailability) {
        console.log('Data cant be added to database please try again');
      }


      return this.fireauth.createUserWithEmailAndPassword(email, password).then( res => { 
        this.currentUser =res.user;
        const emailSent = this.sendEmailForVarification(res.user);
            const bmkuser: Userdata = {
              loginid: res.user?.email?.toString(),
              name: sName,
              surname: sSurname,
              gender: sGender,
              dob: sDob,
              parentsname: sParentsname,
              contactnumber: sContactnumber,
              whatsappnumber: '',
              city: '',
              teachername: 'New Registration, not in any class',
              photourl: '',
              usertype: registeringAs,
              additionalinfo: '',
              dataverifieddate: '',
              dataverifiedby: '',
              admincomments: '',
              accepted: false,
              accountsuspended: false
            };

            this.sd.create(bmkuser).then(() => {
              //Now add the courses enrolled
              nClasssEnrolled.forEach(iEnrolled => {
                const bmkEnrol: Enrollment ={
                  enrolid : '',
                  courseid: iEnrolled,
                  sudentid : bmkuser.loginid,
                  enroldate : new Date(),
                  status : 'Enrolled',
                  statusdate : new Date(),
                  studentcomments : '',
                  admincomments : '',
                }
                this.sd.createEnrolment(bmkEnrol);
                
              });
              
            //  console.log('Data added to database successfully!');
            })                   


        
        this.router.navigate(['/verify']);
        return {            
          error: 'null',
          msg: 'Registration Successful'
        };  
      })
      .catch(err => {
        return {            
          error: 'email',
          msg: 'Registration Unsuccessful. ' + err.message
        };
      })
    }
  
    //sign out
    logout() {
      this.fireauth.signOut().then( () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }, err => {
        alert(err.message);
      })
    }

    // forgot password
    forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        alert('Link has sent on your registered email: ' + email + '\n Not received anything yet? \n Sometimes emails can end up in a spam or junk folder so please check these..');
        this.router.navigate(['/verify']);
      }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
      })
    }

    // sent email for varification
    sendEmailForVarification(user : any){
      try{
        user.sendEmailVerification();
        return {            
          error: 'null',
          msg: 'Link has sent on your registered email: ' + user.email + '\n Not received anything yet? \n Sometimes emails can end up in a spam or junk folder so please check these..'
        };
      } 
      catch(error){
        return {  
          error: 'email',
          msg: 'Something went wrong. Not able to send mail to your email: ' + user.email + '\n' + error
        };
      } 
    }

    validateEmail(email: string): boolean {
      // Regular expression for validating an Email
      const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    validatePhoneNumber(pNumber: string): boolean {
      if(pNumber.length<8) return false;
      // Regular expression for validating an Email
      const phoneRegex: RegExp = /^[0-9+() ]+$/;
      return phoneRegex.test(pNumber);
    }

    validateName(sName: string): boolean {
      // Regular expression for validating an Email
      const nameRegex: RegExp = /^[a-zA-Z ]*$/;
      return nameRegex.test(sName);
    }

    userLogged(): boolean {
      this.getCurrentUser();
      return this.currentUser !== null;      
    }

    userNotLogged(): boolean {
      this.getCurrentUser();
      return this.currentUser === null;      
    }

    getUserType(): number {
      this.getCurrentUser();
      return this.currentUserData?.usertype;
    }

    getUserAccepted(): boolean {
      return this.currentUserData?.accepted;
    }

    getUserAccountSuspended(): boolean {
      return this.currentUserData?.accountsuspended;
    }

}
