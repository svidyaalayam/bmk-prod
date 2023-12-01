import { Component, OnInit } from '@angular/core';
import {SanEpicCivilService } from 'src/app/shared/san-epic-civil.service';
import { CommonfunctionsService } from 'src/app/shared/commonfunctions.service';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.css']
})
export class EpicsComponent  implements OnInit {

  private sanEpicCivil: SanEpicCivilService
  constructor(private commFuncs: CommonfunctionsService) { 
    this.sanEpicCivil = new SanEpicCivilService();
    
    
  }
  ngOnInit(): void {
    this.getAlesson();
  }

  dataToDispy: any;
  

  selectedTense: number = -1;
  selectedI: number = -1;
  selectedJ: number = -1;

  epicAnswer: string = '';
  epicQuesion: string = '';
  fiveQuestions: string []= [];
  fiveAnswers: string []= [];
  selectedOption: string = '';
  AnswerComment: string = '';
  bWrongAnswer: boolean = true;

  nScoreCount: number = 0;
  nQuestionsCount: number = 0;
  nAttempts: number = 0;

  lessonsList: any [] = [{val:0, des:'Select a Lesson'},
  {val:1, des:'Basic Metaphysical Teachings'},
  {val:2, des: 'The Cosmos'},
  {val:3, des: 'Important  Texts'},
  {val:4, des: 'Divine Beings'},
  {val:5, des: 'Human Life and its Purpose'},
  {val:6, des: 'Select from all five chapters'}];
  selectedLesson: number = 0;

  qOptions: any [] = [{val:0, des:'Try with Key Terms'},{val:1, des: 'Try with Meanings'}];
  gameSeleted: number = 0;

  getVerbMeaning(): string{
    return '';
  }
  

  getAlesson(){

    if(this.selectedLesson>0)
    {
      this.dataToDispy = this.sanEpicCivil.getDataForLesson(this.selectedLesson);     
      
      this.nScoreCount = 0;
      this.nQuestionsCount = 0;
      

      this.createAQuestion();


    }   

  }

  createAQuestion(){
    if(this.selectedLesson>0)
    {
      this.nAttempts = 0;
      this.selectedOption = '';
      this.nQuestionsCount = this.nQuestionsCount + 1;

      let qnumbers = this.commFuncs.getRandomNumbers(this.dataToDispy.length, 5);
      let correctPosn: number = Math.floor(Math.random() * 4);

      let qp:number = 0;
      let ap:number = 1;
      if(this.gameSeleted==1){
        qp=1;
        ap=0;
      }


       this.epicAnswer = this.dataToDispy[qnumbers[correctPosn]][ap];
        this.epicQuesion = this.dataToDispy[qnumbers[correctPosn]][qp];

        for(let k = 0; k < 5; k++){
            this.fiveAnswers[k] = this.dataToDispy[qnumbers[k]][ap];
            this.fiveQuestions[k] = this.dataToDispy[qnumbers[k]][qp];
        }
      } 

  }



  onSelectionChange(){

    this.nAttempts = this.nAttempts+1;

    this.AnswerComment = '';
    if(this.selectedOption==''){
      this.bWrongAnswer = true;
      this.AnswerComment = 'Please choose an answer';
    } 
    else if(this.selectedOption != this.epicAnswer) {
      let selctedAnswer : string = '';
      for(let k = 0; k < this.fiveQuestions.length; k++){
        if(this.selectedOption == this.fiveAnswers[k]){
          selctedAnswer = this.fiveQuestions[k]
        }
      }
      this.AnswerComment = 'Wrong : ' + this.selectedOption + ' means "' + selctedAnswer + '"';
      this.bWrongAnswer = true;
    }
    else{
      this.bWrongAnswer = false;
      if(this.nAttempts == 1) this.nScoreCount = this.nScoreCount+1;
      this.AnswerComment = 'Well Done!!! Right Answer.';
    }
    
    this.AnswerComment = this.AnswerComment + "( attempts=" + this.nAttempts +")";



  }



}
