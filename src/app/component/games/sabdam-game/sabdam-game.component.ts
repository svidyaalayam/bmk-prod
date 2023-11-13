import { Component, OnInit } from '@angular/core';
import { SanSabdamsService } from 'src/app/shared/san-sabdams.service';

@Component({
  selector: 'app-sabdam-game',
  templateUrl: './sabdam-game.component.html',
  styleUrls: ['./sabdam-game.component.css']
})
export class SabdamGameComponent implements OnInit {

  constructor(private sSabdamComponent: SanSabdamsService) { }

  public iOptionNumber: any;
  public sabdamDataSan: any;
  public sabdamDataEng: any;
  public bTransRequired: boolean = false;
  public vibhaktiHeadsSan: any;
  public vibhaktiHeadsEng: any;
  public sContext: any = ["Nominative is Subject", "Vocative: addressing/invoking somebody", "Accusative is Direct Object", "Instrumental: with/through whom?", "Dative: Indirect Object", "Ablative: from where", "Genitive: belonging to…",  "Locative: located/placed where?"];
  public nbrsForDisplay:number[]=[];

  public sWordEnds: any = [];

  wrongAnswers: number = 0;
  rightAnswers: number = 0;

  curNbr: number = -1;
  gamefinish: boolean = false;

  ngOnInit(): void {
    this.iOptionNumber = 1;

    this.sWordEnds = this.sSabdamComponent.getEndTypes(0);    
    this.sSabdamComponent.setSabdam(0,'a');
    this.setMainOption(1);
  
  }

  setMainOption(iOptn : number ){
    this.iOptionNumber = iOptn;    
    
    this.vibhaktiHeadsSan = ["प्रथमा विभक्तिः"];
    this.vibhaktiHeadsEng = ["Prathamā vibhaktiḥ"];
    if(this.sSabdamComponent.aSabdamsSan.length > 21) {
      this.vibhaktiHeadsSan.push("सम्बोधन प्रथमा विभक्तिः");
      this.vibhaktiHeadsEng.push("Sambodhana prathamā vibhaktiḥ");
    }
    this.vibhaktiHeadsSan.push("द्वितीया विभक्तिः");
    this.vibhaktiHeadsSan.push("तृतीया विभक्तिः");
    this.vibhaktiHeadsSan.push("चतुर्थी विभक्तिः");
    this.vibhaktiHeadsSan.push("पञ्चमी विभक्तिः");
    this.vibhaktiHeadsSan.push("षष्टी विभक्तिः");
    this.vibhaktiHeadsSan.push("सप्तमी विभक्तिः");

    this.vibhaktiHeadsEng.push("Dvitīyā vibhaktiḥ");
    this.vibhaktiHeadsEng.push("Tṛtīyā vibhaktiḥ");
    this.vibhaktiHeadsEng.push("Caturthī vibhaktiḥ");
    this.vibhaktiHeadsEng.push("Pañcamī vibhaktiḥ");
    this.vibhaktiHeadsEng.push("ṣaṣṭī vibhaktiḥ");
    this.vibhaktiHeadsEng.push("Saptamī vibhaktiḥ");


    if(iOptn==1)
    {
      this.sabdamDataSan = [[this.sSabdamComponent.aSabdamsSan[0], this.sSabdamComponent.aSabdamsSan[1], this.sSabdamComponent.aSabdamsSan[2]]];
      this.sabdamDataEng = [[this.sSabdamComponent.aSabdamsEng[0], this.sSabdamComponent.aSabdamsEng[1], this.sSabdamComponent.aSabdamsEng[2]]];
      
      let addnbr: number = 0;
      if(this.sSabdamComponent.aSabdamsSan.length > 21) {
        addnbr=3;
        this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[3], this.sSabdamComponent.aSabdamsSan[4], this.sSabdamComponent.aSabdamsSan[5]]);
        this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[3], this.sSabdamComponent.aSabdamsEng[4], this.sSabdamComponent.aSabdamsEng[5]]);
      
      }
      this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[addnbr+3], this.sSabdamComponent.aSabdamsSan[addnbr+4], this.sSabdamComponent.aSabdamsSan[addnbr+5]]);
      this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[addnbr+6], this.sSabdamComponent.aSabdamsSan[addnbr+7], this.sSabdamComponent.aSabdamsSan[addnbr+8]]);
      this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[addnbr+9], this.sSabdamComponent.aSabdamsSan[addnbr+10], this.sSabdamComponent.aSabdamsSan[addnbr+11]]);
      this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[addnbr+12], this.sSabdamComponent.aSabdamsSan[addnbr+13], this.sSabdamComponent.aSabdamsSan[addnbr+14]]);
      this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[addnbr+15], this.sSabdamComponent.aSabdamsSan[addnbr+16], this.sSabdamComponent.aSabdamsSan[addnbr+17]]);
      this.sabdamDataSan.push([this.sSabdamComponent.aSabdamsSan[addnbr+18], this.sSabdamComponent.aSabdamsSan[addnbr+19], this.sSabdamComponent.aSabdamsSan[addnbr+20]]);

      this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[addnbr+3], this.sSabdamComponent.aSabdamsEng[7], this.sSabdamComponent.aSabdamsEng[8]]);
      this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[addnbr+6], this.sSabdamComponent.aSabdamsEng[10], this.sSabdamComponent.aSabdamsEng[11]]);
      this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[addnbr+9], this.sSabdamComponent.aSabdamsEng[13], this.sSabdamComponent.aSabdamsEng[14]]);
      this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[addnbr+12], this.sSabdamComponent.aSabdamsEng[16], this.sSabdamComponent.aSabdamsEng[17]]);
      this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[addnbr+15], this.sSabdamComponent.aSabdamsEng[19], this.sSabdamComponent.aSabdamsEng[20]]);
      this.sabdamDataEng.push([this.sSabdamComponent.aSabdamsEng[addnbr+18], this.sSabdamComponent.aSabdamsEng[22], this.sSabdamComponent.aSabdamsEng[23]]);
    }  
    
    if(iOptn==2){
      
      this.sabdamDataSan = [["","",""]];
      this.sabdamDataEng = [["","",""]];

      if(this.sSabdamComponent.aSabdamsSan.length > 21) {
        this.sabdamDataSan.push(["","",""]);
        this.sabdamDataEng.push(["","",""]);
      }
      for (let index = 2; index < 8; index++) {
        this.sabdamDataSan.push(["","",""]);
        this.sabdamDataEng.push(["","",""]);        
      }

      this.createNbrsForDisplay();
      this.curNbr = 0;
    }   

  }

  testAnswer(ansNbr: number){
    if(!this.gamefinish)
    {

      if(this.sSabdamComponent.aSabdamsSan[ansNbr] == this.sSabdamComponent.aSabdamsSan[this.curNbr]){
        this.soundGood();
        this.sleep(2000);
        let curRow : number = Math.trunc(this.curNbr / 3);
        let curCol : number = this.curNbr % 3;
        this.sabdamDataSan[curRow][curCol] = this.sSabdamComponent.aSabdamsSan[ansNbr];
        this.sabdamDataEng[curRow][curCol] = this.sSabdamComponent.aSabdamsEng[ansNbr];
        this.curNbr++;
        if(this.curNbr == this.nbrsForDisplay.length)
        {
          this.pauseTimer();
          this.gamefinish = true;
        }       
      
        
        this.rightAnswers++;
      }
      else{
        let rndNbr1:number = Math.round(Math.random() * 4);
        this.sleep(2000);
        this.wrongAnswers ++;
      }

    }    

  }

  applyEnding(){
    let obj1: any = document.getElementById('editGend');
    let objVal1: number = 0;
    if(obj1) objVal1 = obj1.value;

    let obj2: any = document.getElementById('editEnd');
    let objVal2: string = "";
    if(obj2) objVal2 = obj2.value;


    this.sSabdamComponent.setSabdam(objVal1, objVal2);

    this.setMainOption(1);

  }

  applyGender(){

    let obj1: any = document.getElementById('editGend');
    let objVal: number = 0;
    if(obj1) objVal = obj1.value;

    this.sWordEnds = this.sSabdamComponent.getEndTypes(objVal);  
    if(this.sWordEnds.length>0) {
      this.sSabdamComponent.setSabdam(objVal, this.sWordEnds[0][0]);
      this.setMainOption(1);
    }
    
  }
  createNbrsForDisplay(){
    let maxNbr:number = 20;
    if(this.sSabdamComponent.aSabdamsSan.length > 21) maxNbr = 23;

    this.nbrsForDisplay = this.getRandomNumbers(maxNbr);                 

  }

  getSabdamTitleSan(): string {
    return this.sSabdamComponent.sabdamTitleSan;
  }
  getSabdamTitleEng(): string {
    return this.sSabdamComponent.sabdamTitleEng;
  }

  getSabdamTextEng(iNbr: number): string {
    return this.sSabdamComponent.aSabdamsEng[iNbr];
  }
  getSabdamTextSan(iNbr: number): string {
    return this.sSabdamComponent.aSabdamsSan[iNbr];
  }
  

  getRandomNumbers(maxNbr: number): number[]{
    let returnNbers: number[] = [];
    let selectedNbrs = new Array<boolean>(maxNbr+1); 
    for (let index = 0; index <= maxNbr; index++) {
      let rndNbr:number = Math.round(Math.random() * (maxNbr-index));

        let selNbr:number = -1;
        for(let l = 0; l <= rndNbr; l++){
          selNbr++;
          while(selectedNbrs[selNbr]){
            selNbr++;
          }                    
        }           

        selectedNbrs[selNbr] = true;
      returnNbers.push(selNbr);   
    }
    return returnNbers;
  }

  soundGood(){
    let rndNbr1:number = Math.round(Math.random() * 4);
    let goodSounds: string[] = ['good1','good2','good3','good4','good5'];

    let audio = new Audio();
    audio.src="../assets/sounds/"+goodSounds[rndNbr1]+".wav";
    audio.load();
    audio.play();
  }

  sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  timeLeft: number = 0;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      this.timeLeft++;
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
