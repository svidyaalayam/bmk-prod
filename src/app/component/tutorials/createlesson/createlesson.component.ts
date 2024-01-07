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

   // db.saveDatabaseData();
   //db.autoSaveDatabaseData();


   //db.saveDatabaseTeluguHeaderData();
   //db.saveDatabaseSanskritHeaderData();
   
     
     
  }

  ngOnInit(): void {
     this.db.getDatabaseHeaderData('Telugu').then(res => {
      console.log("Starting...");
      this.lessonHeaderData = res; 
      this.jsonHeaderString = JSON.stringify(this.lessonHeaderData, null, 2);
      console.log(this.lessonHeaderData);
    });
    
  }
  
  title = 'Lalithas 1st Project';

  filterOptions: any =[
    'Paragraph',
    'Image',
    'Slide Images', 
    'End of Section'];

    selectedColumnOption = 'Paragraph';

  numberOfColumns = 3;

  bTel = true;
  bTrans = true;
  bShowLessons = false;

  lessonHeaderData : any[] = [];
  selectedlessonHeader : any;

  selectedRowsId : string = '';



  RowsData : any[] = [];
  getSan(str:string): string{
    return this.sEngToTel.getStringInSanskrit(str);
  }

  getTel(str:string): string{
    var convertedText = this.sEngToTel.getStringInTelugu(str);
    return convertedText;
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
    
  }

  currentLessonCount: number = 0;
  jsonString: string = '';
  jsonHeaderString: string = '';

  incrementCounter2(i: number) {
    if(this.currentLessonCount != i || this.RowsData.length==0){
      this.currentLessonCount = i;
      this.selectedRowsId = this.lessonHeaderData[this.currentCount].lessons[i].id;
      this.db.getDatabaseData(this.selectedRowsId).then(res => {
        this.RowsData = res;
        this.jsonString = JSON.stringify(this.RowsData, null, 2);
      });
      
    }
    
  }

  update() {
    this.RowsData = JSON.parse(this.jsonString);
  }

  updateHeader() {
    this.lessonHeaderData = JSON.parse(this.jsonHeaderString);
  }

  saveHeader() {
    this.lessonHeaderData = JSON.parse(this.jsonHeaderString);
    this.db.saveDatabaseTeluguHeaderWithData(this.lessonHeaderData);
  }

  updateJson() {
    this.jsonString = JSON.stringify(this.RowsData, null, 2);
  }

  createNewData() {
    this.selectedRowsId = this.db.createNewDatabaseEntry(this.RowsData);
  }
  updateRowsInDatabase() {
    console.log('tryimg saving the rows data');
    if(this.selectedRowsId != ''){
      this.db.saveDatabaseWithData(this.RowsData, this.selectedRowsId);
      console.log('saving the rows data');
    } 
  }

  //Create an object
  getSelectedTypeObject(): any {

    switch (this.selectedColumnOption) {
      case 'Paragraph':
        return this.getParaObject();
        break;

      case 'Image':
        return this.getImageObject();
        break;

      case 'Slide Images':
        return this.getSlidingImagesObject();
        break;
        
      case 'End of Section':
        return this.getImageObject();
        break;

        default:
          return this.getParaObject();
      }



  }

  getParaObject(): any {
    return {
      width:100, 
      type:0,
      leftSpace:20,      
      textTop: "aksharamu-'a'",
      textTopEng: "Letter-a",
      textBody:  "baalamukuMdamu paaThaSAla" ,
      textBodyEng:  "Balamukundam School"}
  }

  //Create an object
  getImageObject(): any {
    return {
      width:30,
      imageHeight:250,
      type:1,
      textTop: "",
      textBtm: "gaNapati",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/1757753519/display_1500/stock-photo-lord-ganesha-with-colorful-background-wallpaper-god-ganesha-poster-design-for-wallpaper-1757753519.jpg"
  
    };
  }

  //Create a sliding imahges object
  getSlidingImagesObject(): any {
    
    return {
      textBtm: "",
      textTop: "mari konni padaalu",
      type: 10,
      width: 80,
      imageHeight:400,

      slist: [
          {
            imageUrl: "https://balamukundamwebapp.web.app/assets/images/Bpic-2.png",
            text: "bAlamukuMdamu",
            textEng: "School"
          },
          {
            imageUrl: "https://balamukundamwebapp.web.app/assets/images/BalamukundamKids.png",
            text: "pillalu",
            textEng: "Kids"
          }
        ],

      };
  }

  getSlidingSubItem(): any{
    return {
      imageUrl: "https://balamukundamwebapp.web.app/assets/images/BalamukundamKids.png",
      text: "pillalu",
      textEng: "Kids"
    }
  }

  //Insert data Rows
  createNewRowAbove(currentRow: number) {
    var newItems: any = {items: [this.getSelectedTypeObject()]};
    this.RowsData.splice(currentRow, 0, newItems);
  }

  deletRowAtPosition(currentRow: number) {
    this.RowsData.splice(currentRow, 1);
  }

  insertColumnBefore(currentRow: number, currentColumn: number){
    this.RowsData[currentRow].items.splice(currentColumn, 0, this.getSelectedTypeObject());
  }

  deletColumnAtPosition(currentRow: number, currentColumn: number) {
    this.RowsData[currentRow].items.splice(currentColumn, 1);
  }

  insertSlideBefore(slideElements: any, slideNbr: number){
    slideElements.splice(slideNbr, 0, this.getSlidingSubItem());
  }

  deleteThisSlide(slideElements: any, slideNbr: number){
    slideElements.splice(slideNbr, 1);
  }

  curLitem: number = 0;

}

//<p style="white-space: pre">This    is a paragraph.</p>

//<p>This is&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;some &emsp; text&nbsp;with&nbsp;extra spaces.</p>
//<p>slo. &emsp; Suklaambaradharam...<p>
//<p>&emsp;&emsp;&emsp;SasivarNaM caturbhujam...<p>

//<p>&ensp;&ensp;&ensp;SasivarNaM caturbhujam...<p>


//<p style="text-indent: 40px;">This is some text with an indented tab dshdsjh dsdsajh dsdsd dsdsd dssds dsdsd dsdsd dsdsd dsdasd dsdsd dasd dsads safd fdfds fdsfdf fdf fdsfd fdsf fdsf fdfd nfdfd fdsf fdsf fdf fdf fdfd fdsf fdfd fdsfd fdfd fdsfd fsdf d.</p>

