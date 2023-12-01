import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ClassschedulesService } from 'src/app/shared/classschedules.service';

@Component({
  selector: 'app-studentattendance',
  templateUrl: './studentattendance.component.html',
  styleUrls: ['./studentattendance.component.css']
})
export class StudentattendanceComponent {
  @Input() dataFromParent: any;

  constructor(private csched : ClassschedulesService) {
  }

  attendanceValue : string = 'Not marked';
  attendanceOptions : string[] = ['Not marked', 'Present', 'Authorised Absent', 'Unauthorised Absent'];

  ngOnInit(): void{
  }

  updateData(){
    this.csched.updateClassScheduleStudent(this.dataFromParent.schedule);
    this.dataFromParent.open = false;
  }
}
