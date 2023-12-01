import { Component } from '@angular/core';
import { Userdata } from 'src/app/model/userdata';
import { Classdata } from 'src/app/model/classdata';
import { Classuserdata } from 'src/app/model/classuserdata';
import { Userfortable } from 'src/app/model/userfortable';
import { StudentsDataService } from 'src/app/shared/students-data.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import { AuthService } from 'src/app/shared/auth.service';
import {CoursesService} from 'src/app/shared/courses.service';
import { Enrollment  } from 'src/app/model/enrollment';

@Component({
  selector: 'app-checkusers',
  templateUrl: './checkusers.component.html',
  styleUrls: ['./checkusers.component.css']
})
export class CheckusersComponent {
  users: Userfortable[] = [];
  filteredusers: Userfortable[] = [];
  showFilters: boolean = false;
  showTable: boolean = false;
  searchResult: string = '';

  
  selectedUser: Userdata | null = null;
  selectedUsersClassData: Classdata []= [];
  selecteUserClassesRelData: Classuserdata[] = [];
  userClassText: string = '';
  selectedClassIndex: number = -1;
  showTeachersForUserToAdd: boolean = false;
  selectedClassidToAdd: string = '';
  showConfirmButton: boolean = false;

  sClassesEnrolled : Enrollment[] = [];
  sClassesOffered : any[] = [];

  bmkClasses: Classdata []= [];
  selectedClassid: string = '';

  IsInactivateRequired: boolean = false;
  strInactiveCmdTitle: string = '';
  openActivate: boolean = false;

  IsEditable: boolean = false;

  filterTextLogin: string = '';
  filterTextName: string = '';
  filterTextSurname: string = '';
  filterTextGender: string = '';

  searchWithEmail: string = '';

  
  filterOptions: any =[
    'Search by Email',
    'All Users',
    'All Students', 
    'All Teachers', 
    'All Admins', 
    'All waiting account verification', 
    'All accounts suspended', 
    'All not in any class',
    'Search by class'];

    selectedFilterOption = 'Search by Email';

  constructor(private auth : AuthService, private sd : StudentsDataService, private commFuncs: CommonfunctionsService) {  
    
  }

  ngOnInit(): void {   
    this.sd.getAllClasses().subscribe(classes => {this.bmkClasses = classes
    
    });
  }

  onFilterSelectionChange(){

    switch  (this.selectedFilterOption){
      case 'Search by Email':
        this.showTable = false;
        this.searchWithEmail = '';
        break;

      case 'All Users':
        this.sd.getAllUsers().subscribe(users => {this.users = users; this.filteredusers = users});
        this.showTable = true;
        break;

      case 'All Students':
        this.sd.getAllUsersOfType(0).subscribe(users => {this.users = users; this.filteredusers = users});        
        this.showTable = true;
        break;
        
      case 'All Teachers':
        this.sd.getAllUsersOfType(1).subscribe(users => {this.users = users; this.filteredusers = users});        
        this.showTable = true;
        break;

      case 'All Admins':
        this.sd.getAllUsersOfType(2).subscribe(users => {this.users = users; this.filteredusers = users});        
        this.showTable = true;
        break;

      case 'All waiting account verification':
        this.sd.getAllNewRegs().subscribe(users => {this.users = users; this.filteredusers = users});        
        this.showTable = true;
        break;

      case 'All accounts suspended':
        this.sd.getAllSuspended().subscribe(users => {this.users = users; this.filteredusers = users});        
        this.showTable = true;
        break;

      case 'Search by class':
          
            
        this.showTable = true;
        break;        
    }

  }

  getDateTimeForTimeStamp(firestoreTimestamp: any ): string{
    return this.commFuncs.getDateFirestoreStamp(firestoreTimestamp);
  }

  getCourseDetailsForId(courseId: number): string {
    return this.sClassesOffered.find(item => item.id === courseId).title;
  }

  

  getCourses(studentEmail : string):void{
    this.sClassesOffered = new CoursesService().sClassesStudents;
    this.sd.getAllEnrollmentsForUser(studentEmail).subscribe(suscrpts => {
      this.sClassesEnrolled = suscrpts;  
    });
  }

  onClassSelectionChange(): void {

  }

  onClassSelectionChangeToAddUser(): void {
    if(this.selectedClassidToAdd != '' )
    this.showConfirmButton = true; 

  }

  addOrrRemoveUserToClass(): void {
    if(this.selectedClassIndex<0){
      const newClassUser : Classuserdata = {
        dataId : '',
        classid : this.selectedClassidToAdd,
        loginid : this.selectedUser?.loginid as string,
        startdate : new CommonfunctionsService().getCurrentDate(),
        enddate : ''
      }
      this.sd.createClassUsers(newClassUser, false).then(() => {
        this.userClassText = "User is assigned to class."
       })

    }
    else{
      const newClassUser1: Classuserdata = this.selecteUserClassesRelData[this.selectedClassIndex];
      
      this.sd.removeClassUsers(newClassUser1.dataId, false).then(() => {
       })



    }
    this.selectedClassIndex = -1;
    this.showConfirmButton = false;
    this.showTeachersForUserToAdd = false;
  }
  removeUserFromClass(): void {
    this.showConfirmButton = true;
  }

  onClassDataSelected(iRow: number): void {
    this.selectedClassIndex = iRow;
    this.showTeachersForUserToAdd = false;
  }

  onCourseDataSelected(iRow: number): void {
   // this.selectedClassIndex = iRow;
   // this.showTeachersForUserToAdd = false;
  }


  getUserWithEmail(userEmail: string):void{
    this.searchResult = 'User not found with the email.'
    this.sd.GetStudent(userEmail.toLowerCase()).then(res => {this.selectedUser = res;
      this.IsEditable = false;
      this.strInactiveCmdTitle = (this.selectedUser?.accountsuspended)? 'Activate User' : 'Suspend User';
      if(this.selectedUser?.accepted) this.IsInactivateRequired = true;
      this.IsEditable = true;})
  }

  onFilters(): void {
    this.filterTextLogin = '';
    this.filterTextName = '';
    this.filterTextSurname = '';
    this.filterTextGender = '';
    this.filteredusers = this.users;
  }


  filterData(): void {
    this.filteredusers = this.users.filter(item => {   
      return item.loginid.toLowerCase().includes(this.filterTextLogin.toLowerCase())
      && item.name.toLowerCase().includes(this.filterTextName.toLowerCase())
      && item.surname.toLowerCase().includes(this.filterTextSurname.toLowerCase())
      && item.gender.toLowerCase().includes(this.filterTextGender.toLowerCase());       
    });
  }

  selectUser(user: Userfortable): void {

    this.sd.GetStudent(''+user.loginid ).then(res => {this.selectedUser = res;
      this.IsEditable = false;
      this.strInactiveCmdTitle = (this.selectedUser?.accountsuspended)? 'Activate User' : 'Suspend User';
      if(this.selectedUser?.accepted) this.IsInactivateRequired = true;
      })

   }

   showUserInformation(): void {
    let userLoginID: string = this.selectedUser?.loginid as string;
    this.getCourses(userLoginID);
    this.sd.getAllClassesForUser(userLoginID).subscribe(userClasses => {
      this.selectedUsersClassData = [];
      this.selecteUserClassesRelData = userClasses;
      userClasses.forEach(userClass => {
        this.sd.GetClassWithID(userClass.classid).then(res => {this.selectedUsersClassData.push(res)});
      }) 
      this.userClassText = (userClasses.length == 0) ? "This user is not assigned to any class." : "This user is assigned to following classes";
   });
   this.IsEditable = true;
  }

  cancelForm() {
    this.selectedUser = null;
    this.IsEditable = false;
    this.openActivate = false;
    this.userClassText = '';
  }

  onSubmit(): void {
    this.sd.create(this.selectedUser).then(() => {
      this.selectedUser = null;
      this.IsEditable = false;
      this.openActivate = false;
      this.userClassText = '';
    })
    // Handle form submission logic here
   // console.log('Submitted Student Data:', this.student);
    // You can send this data to an API or perform further actions as needed
  }
}
