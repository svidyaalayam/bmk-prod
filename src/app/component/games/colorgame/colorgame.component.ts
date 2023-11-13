import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorgame',
  templateUrl: './colorgame.component.html',
  styleUrls: ['./colorgame.component.css']
})
export class ColorgameComponent implements OnInit {

  constructor() {

    this.listOfSounds = ['14IYXf1Pwk_DK0hIRs7tyafYsDWNif1o5',
    '1fgzjYWukx7zY9Rol--Azy4_jezsQ1GKe',
    '1OcpF_grAuopcFBBVW9fAOgaOB5P4ezI9',
    '1-5Pmih2TbK94ZVifosuCjpvG3j3O-wMo',
    '1aivd9EUqoe46UyL2m0NDTCOVJ7kQgbNH',
    '19ndvzp62-N-11xFntVthBOEr7GJI2a0c',
    '12CacnEs1uxGFmehkj2je8XOHPgENIJNF',
    '1so4vNa65npdG8clSG8P2F4IRA1FQbCMC',
    '1Z489xTToLktyXGqDZ81I1__ijeJB-qbF',
    '1Wy3oPAtWkyVCrz8SNPXeT2fwoezYniRu',
    '1HS4yGMWaUeUNHvZcYFYLyjEqaUnh3o4O',
    '14Y6Wl3TWXqdtG_4qyOCthcle94TEjHwl'];
   }

  ngOnInit(): void {

  }

  
  startGame(){
    let obj1: any = document.getElementById('start');

    this.nbrsForGame = this.getRandomNumbers(this.maxNbr);
    this.curNbr = 0;

    this.soundFont();
    this.gamefinish = false;    

  }
  finishGame(){

    this.wrongAnswers = 0;
    this.rightAnswers = 0;
    this.curNbr = -1;

  }

  listOfSounds: string[];

  maxNbr = 11;
  wrongAnswers: number = 0;
  rightAnswers: number = 0;

  curNbr: number = -1;
  nbrsForGame:number[]=[];
  gamefinish: boolean = false;



  soundFont(){
    let audio = new Audio();
    audio.src="https://drive.google.com/uc?export=download&id="+this.listOfSounds[this.nbrsForGame[this.curNbr]];
    audio.load();
    audio.play();
  }
  soundSendFont(strAry: string[]){

    var audio = new Array;
      for(let k = 0; k < strAry.length; k++){
        audio[k] = new Audio(strAry[k]);
        audio[k].load();
      }

    audio[0].play();
    for(let k = 0; k < strAry.length-1; k++){
      audio[k].onended = function(){
        setTimeout(audio[k+1].play(), 1000);
      };
    }   

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


  testAnswer(ansNbr: number){
    if(!this.gamefinish)
    {
      if(ansNbr == this.nbrsForGame[this.curNbr]){
        this.soundGood();
        this.sleep(2000);
        if(this.curNbr == this.maxNbr)
        {
          this.gamefinish = true;
        }
        this.curNbr++;
        if(!this.gamefinish)
        {
          this.soundFont();
        }
        
        
        this.rightAnswers++;
      }
      else{
        let rndNbr1:number = Math.round(Math.random() * 4);
        let badSounds: string[] = ['bad1','bad2','bad3','bad4','bad5','bad6'];
        this.soundSendFont(["../assets/sounds/"+badSounds[rndNbr1]+".wav", "https://drive.google.com/uc?export=download&id="+this.listOfSounds[this.nbrsForGame[this.curNbr]]]);
        this.sleep(2000);
        this.wrongAnswers ++;
      }

    }    

  }

  getOneRandomNumber(maxNbr: number): number{
    return Math.round(Math.random() * maxNbr);
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

}

