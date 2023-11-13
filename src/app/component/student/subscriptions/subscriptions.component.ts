import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Enrollment  } from 'src/app/model/enrollment';
import {StudentsDataService} from 'src/app/shared/students-data.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';
import {CoursesService} from 'src/app/shared/courses.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent {
  @Input() bmkuser: any;
  @Output() dataEvent = new EventEmitter<boolean>();

  constructor(private sd : StudentsDataService, private commFuncs: CommonfunctionsService) {
      
  }

  ngOnInit(): void{
    this.getCourses();    

  }
  sClassesEnrolled : Enrollment[] = [];
  selectedClassIndex: number = -1;
  sClassesOffered : any[] = [];
  bShowOtherClasses: boolean = false;

  onClassDataSelected(iRow: number): void {
    this.selectedClassIndex = iRow;      
  }

  getDateTimeForTimeStamp(firestoreTimestamp: any ): string{
    return this.commFuncs.getDateFirestoreStamp(firestoreTimestamp);
  }

  getCourseDetailsForId(courseId: number): string {
    return this.sClassesOffered.find(item => item.id === courseId).title;
  }

  getCourses():void{
    this.sClassesOffered = new CoursesService().sClassesStudents;
    let studentEmail : string = ''+this.bmkuser.loginid;

    this.sd.getAllEnrollmentsForUser(studentEmail).subscribe(suscrpts => {
      this.sClassesEnrolled = suscrpts;  
    });
  }

}
