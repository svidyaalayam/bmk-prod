import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { EngToTelService } from '../../../shared/eng-to-tel.service';
import { DbServiceService } from '../../../shared/db-service.service';

@Component({
  selector: 'app-createlesson',
  templateUrl: './createlesson.component.html',
  styleUrls: ['./createlesson.component.css']
})
export class CreatelessonComponent implements OnInit {


  constructor(private sEngToTel: EngToTelService, private db: DbServiceService) { 

    db.saveDatabaseData();
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

  lessonHeaderData : any[] = [];
  selectedlessonHeader : any;


  RowsData : any[] = [];
  getSan(str:string): string{
    return this.sEngToTel.getStringInSanskrit(str)
  }

  getTel(str:string): string{
    return this.sEngToTel.getStringInTelugu(str)

  }

  getTran(str:string): string{
    return this.sEngToTel.getStringInTranscript(str)
  }

  currentCount: number = 0;

  incrementCounter(i: number) {
    if(this.currentCount != i){
      this.currentCount = i;
      this.currentLessonCount = -1;
      this.curLitem = 0;
    }
    this.bShowLessons = false;
    
  }

  currentLessonCount: number = 0;
  jsonString: string = '';

  incrementCounter2(i: number) {
    if(this.currentLessonCount != i || this.RowsData.length==0){
      this.currentLessonCount = i;
      this.db.getDatabaseData(this.lessonHeaderData[this.currentCount].lessons[i].id).then(res => {
        this.RowsData = res;
        this.jsonString = JSON.stringify(this.RowsData, null, 2);
      });
      
    }
    
  }

  update() {
    this.RowsData = JSON.parse(this.jsonString);

  }

  curLitem: number = 0;

}

