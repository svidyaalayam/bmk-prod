import { Component, OnInit } from '@angular/core';
import {SanVerbsService } from 'src/app/shared/san-verbs.service';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css']
})
export class VerbsComponent implements OnInit {

  private sanVerbs: SanVerbsService
  constructor() { 
    this.sanVerbs = new SanVerbsService();
    
    
  }
  ngOnInit(): void {
    this.getAllVerbs();
    this.getAverb();
  }

  dataToDispy: any;
  verbsList: any;
  selectedVerb: string = '';

  selectedTense: number = -1;
  selectedI: number = -1;
  selectedJ: number = -1;

  sentenceCreatedEnglsh: string = '';
  sentenceCreatedSanskrit: string = '';
  wrongAnswersSan: string []= [];
  wrongAnswersEng: string []= [];
  selectedOption: string = '';
  AnswerComment: string = '';
  bWrongAnswer: boolean = true;

  nScoreCount: number = 0;
  nQuestionsCount: number = 0;
  nAttempts: number = 0;

  qOptions: any [] = [{val:0, des:'English to Sanskrit'},{val:1, des: 'Sanskrit to English'}];
  gameSeleted: number = 0;

  public sContext: any = ["3rd Pers", "2nd Pers", "1st Pers"];

  personTable: any = [
    {eng:['He', 'They (both male)', 'They (many male)'], data:['सः', 'तौ', 'ते']},
    {eng:['She', 'They (both female)', 'They (many female)'], data:['सा', 'ते', 'ताः']},
    {eng:['It', 'They (both neutral)', 'They (many neutral)'], data:['तत्‌', 'ते', 'तानि']},
    {eng:['You', 'You (both)', 'You (plural)'], data:['त्वम्‌‌', 'युवाम्‌', 'यूयम्‌']},
    {eng:['I', 'We (both)', 'We (plural)'], data:['अहम्‌‌','आवाम्‌‌','वयम्‌']}
  ]


  getAllVerbs(){
    this.verbsList = this.sanVerbs.getAllVerbs();
    this.selectedVerb = this.verbsList[0];
    console.log(this.verbsList);
  }

  getVerbMeaning(): string{
    return this.sanVerbs.getMeaningForVerb(this.selectedVerb);
  }
  

  getAverb(){

    this.dataToDispy = this.sanVerbs.getDataForVerb(this.selectedVerb);     
    
    this.nScoreCount = 0;
    this.nQuestionsCount = 0;
    this.nAttempts = 0;

    this.createAQuestion();

  }

  onVerbCaseSelected(tense:number, i:number, j:number) {
    this.selectedTense = tense;
    this.selectedI = i;
    this.selectedJ = j;
  }

  onPersonSelected(i:number, j:number){

  }

  onSelectionChange(){

    this.nAttempts = this.nAttempts+1;

    this.AnswerComment = '';
    if(this.selectedOption==''){
      this.bWrongAnswer = true;
      this.AnswerComment = 'Please choose an answer';
    } 
    else if(this.selectedOption != this.getAnswer()) {
      let selctedAnswer : string = '';
      for(let k = 0; k < this.getQuestions().length; k++){
        if(this.selectedOption == this.getAnswers()[k]){
          selctedAnswer = this.getQuestions()[k]
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

  createAQuestion(){

    this.sentenceCreatedEnglsh = '';
    this.sentenceCreatedSanskrit = '';
    this.wrongAnswersSan = [];
    this.wrongAnswersEng = [];
    this.selectedOption = '';
    this.AnswerComment = '';
    this.bWrongAnswer = true;

    this.nQuestionsCount =  this.nQuestionsCount+1;
    this.nAttempts = 0;

    const randomTense: number = Math.floor(Math.random() * 3);
    const randomPerson: number = Math.floor(Math.random() * 5);
    const randomCase: number = Math.floor(Math.random() * 3);
    this.sentenceCreatedEnglsh = this.createEnglishSentence(randomTense, randomPerson, randomCase);
    this.sentenceCreatedSanskrit = this.createSanskritSentence(randomTense, randomPerson, randomCase);

    let randomTense1: number = Math.floor(Math.random() * 3);
    if(randomTense1 == randomTense) randomTense1 = randomTense1-1;
    if(randomTense1 < 0) randomTense1 = 2;
    this.wrongAnswersSan.push(this.createSanskritSentence(randomTense1, randomPerson, randomCase));
    this.wrongAnswersEng.push(this.createEnglishSentence(randomTense1, randomPerson, randomCase));

    let randomPerson1: number = Math.floor(Math.random() * 5);
    if(randomPerson1 == randomPerson) randomPerson1 = randomPerson1-1;
    if(randomPerson1 < 0) randomPerson1 = 4;
    this.wrongAnswersSan.push(this.createSanskritSentence(randomTense, randomPerson1, randomCase));
    this.wrongAnswersEng.push(this.createEnglishSentence(randomTense, randomPerson1, randomCase));

    let randomCase1: number = Math.floor(Math.random() * 3);
    if(randomCase1 == randomCase) randomCase1 = randomCase1-1;
    if(randomCase1 < 0) randomCase1 = 2;
    this.wrongAnswersSan.push(this.createSanskritSentence(randomTense, randomPerson, randomCase1));
    this.wrongAnswersEng.push(this.createEnglishSentence(randomTense, randomPerson, randomCase1));

    this.wrongAnswersSan.push(this.createSanskritSentence(randomTense, randomPerson1, randomCase1));
    this.wrongAnswersEng.push(this.createEnglishSentence(randomTense, randomPerson1, randomCase1));

    let answerPosn: number = Math.floor(Math.random() * 4);
    this.wrongAnswersSan.splice(answerPosn, 0, this.sentenceCreatedSanskrit);
    this.wrongAnswersEng.splice(answerPosn, 0, this.sentenceCreatedEnglsh);
    

  }

  getAnswer(): string{
    if(this.gameSeleted==0) return this.sentenceCreatedSanskrit;
    else return this.sentenceCreatedEnglsh;
  }

  getQuestion(): string{
    if(this.gameSeleted==0) return this.sentenceCreatedEnglsh;
    else return this.sentenceCreatedSanskrit;
  }

  getAnswers(): string []{

    if(this.gameSeleted==0) return this.wrongAnswersSan;
    else return this.wrongAnswersEng;
  }

  getQuestions(): string []{

    if(this.gameSeleted==0) return this.wrongAnswersEng;
    else return this.wrongAnswersSan;
  }

  createEnglishSentence(randomTense:number, randomPerson: number, randomCase: number): string{

    let sVerbEng : string = '';
    let sSubEng : string = '';

    if(randomTense==0){sVerbEng=this.dataToDispy.meaning;}
    else if(randomTense==1) {sVerbEng= 'will ' + this.dataToDispy.meaning;}
    else  {sVerbEng=this.dataToDispy.ePast};

    const personFilterSan: any = this.personTable[randomPerson];

    if(randomCase==0 && randomTense==0 && randomPerson <3) sVerbEng = sVerbEng+this.dataToDispy.suff;
      sSubEng = personFilterSan.eng[randomCase]; 

    return sSubEng + ' ' + sVerbEng;
  }

  createSanskritSentence(randomTense:number, randomPerson: number, randomCase: number): string{

    let sVerbSan : string = '';
    let sSubSan : string = '';

    let caseFilterSan: any;
    if(randomTense==0){caseFilterSan = this.dataToDispy.present}
    else if(randomTense==1) {caseFilterSan = this.dataToDispy.future}
    else  {caseFilterSan = this.dataToDispy.past};


    //selecte a person
    const personFilterSan: any = this.personTable[randomPerson];
    let caseAndPersonFilterSan: any;
    if(randomPerson<3)caseAndPersonFilterSan = caseFilterSan[0];
    else caseAndPersonFilterSan = caseFilterSan[randomPerson-2];


    //select a case singular/dual/plural
      sVerbSan = caseAndPersonFilterSan[randomCase]; 

      sSubSan = personFilterSan.data[randomCase]; 

    //select a object
    return sSubSan + ' ' + sVerbSan;

  }

}
