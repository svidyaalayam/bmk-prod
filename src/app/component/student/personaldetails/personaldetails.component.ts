import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Userdata } from '../../../model/userdata';
import {StudentsDataService} from 'src/app/shared/students-data.service';


@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent {
  @Input() bmkuser: any;
  @Output() dataEvent = new EventEmitter<boolean>();

  constructor(private sd : StudentsDataService) {      
  }
  ngOnInit(): void{
    this.getClasses();    

  }

  bmkClasses: any []= [];
  selectedId: any ;

  getClasses():void{
    this.bmkClasses = [];
    this.sd.getAllClasses().subscribe(classes => {  
      this.bmkClasses =   classes.filter(clas => clas.courseid == 1);

      if(this.bmkClasses.length>0){
        this.bmkClasses.unshift({name: 'Select a class', description: '', timings:''})
        for (let i = 0; i < this.bmkClasses.length; i++) {
          if(this.bmkClasses[i].name == this.bmkuser.teachername) this.selectedId = i;
        }     
       }
    });    
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      if(file.size > 102400){
        alert('File size is above 100KB. Please select a smaller file.');
        return;
      }
      this.sd.uploadPhoto(file, 'user-photos/'+this.bmkuser.loginid)
        .then(downloadURL => {
          this.bmkuser.photourl = downloadURL;
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    }
  }

  onTeacherDataSelected(){
    if(this.selectedId>=0){
      this.bmkuser.teachername = this.bmkClasses[this.selectedId].name;
    }    
  }


  onSubmit(): void {
    this.sd.create(this.bmkuser).then(() => {
      this.dataEvent.emit(false);
    })
  }

  cancelForm(): void {
      this.dataEvent.emit(false);
  }

}
