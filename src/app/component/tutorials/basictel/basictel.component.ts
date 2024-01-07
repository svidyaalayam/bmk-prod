import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { EngToTelService } from '../../../shared/eng-to-tel.service';
import { DbServiceService } from '../../../shared/db-service.service';

@Component({
  selector: 'app-basictel',
  templateUrl: './basictel.component.html',
  styleUrls: ['./basictel.component.css']
})
export class BasictelComponent implements OnInit {


  constructor(private sEngToTel: EngToTelService, private db: DbServiceService) { 

   // db.saveDatabaseData();
   //db.autoSaveDatabaseData();


   //db.saveDatabaseTeluguHeaderData();
   //db.saveDatabaseSanskritHeaderData();
   
     
     
  }

  ngOnInit(): void {
     this.db.getDatabaseHeaderData('Telugu').then(res => {this.lessonHeaderData = res; console.log(this.lessonHeaderData);});
    
  }
  
  title = 'Lalithas 1st Project';


  numberOfColumns = 3;

  bTel = true;
  bTrans = true;
  bShowLessons = false;
  bShowSubLessons = false;

  lessonHeaderData : any[] = [];
  selectedlessonHeader : any;


  RowsData : any[] = [];
  getSan(str:string): string{
    return this.sEngToTel.getStringInSanskrit(str)
  }

  getTel(str:string): string{
    return this.sEngToTel.getStringInTelugu(str)
  }
  
  getTelForPara(str:string): string[]{
    const strLines = str.split('\n');

    var telLines: string[] = [];
    strLines.forEach(element => {
      telLines.push(this.getTel(element));
    });
    return telLines;
  }


  getTran(str:string): string{
    return this.sEngToTel.getStringInTranscript(str)
  }

  getTranForPara(str:string): string[]{
    const strLines = str.split('\n');

    var telLines: string[] = [];
    strLines.forEach(element => {
      telLines.push(this.getTran(element));
    });
    return telLines;
  }

  currentCount: number = 0;

  incrementCounter(i: number) {
    if(this.currentCount != i){
      this.currentCount = i;
      this.currentLessonCount = -1;
      this.curLitem = 0;
    }
    this.bShowLessons = false;
    this.bShowSubLessons = true;
    
  }

  currentLessonCount: number = 0;

  incrementCounter2(i: number) {
    if(this.currentLessonCount != i || this.RowsData.length==0){
      this.currentLessonCount = i;
      this.db.getDatabaseData(this.lessonHeaderData[this.currentCount].lessons[i].id).then(res => {this.RowsData = res});
    }
    this.bShowSubLessons = false;
    
  }

  curLitem: number = 0;

}

