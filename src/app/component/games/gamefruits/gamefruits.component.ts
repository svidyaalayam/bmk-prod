import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamefruits',
  templateUrl: './gamefruits.component.html',
  styleUrls: ['./gamefruits.component.css']
})
export class GamefruitsComponent implements OnInit {

  constructor() { 
    this.titleNames = ['అచ్చులు - అ, ఆ, ఇ, ఈ, ఉ, ఊ', 
    'అచ్చులు - ఋ, ౠ, ఎ, ఏ, ఐ',
    'All అచ్చులు', 
    'క వర్గము - క, ఖ, గ, ఘ, ఙ', 
    'చ వర్గము - చ, ఛ, జ, ఝ, ఞ', 
    'ట వర్గము - ట, ఠ, డ, ఢ, ణ', 
    'త వర్గము - త, థ, ద, ధ, న',
    'ప వర్గము - ప, ఫ, బ, భ, మ',
    'అంతస్తములు - య, ర, ల, వ',
    'ఊష్మములు - శ, స, ష, హ',
    'All హల్లులు'
  ];

  this.listImages = [
    '1eCEDJIxcIcSGVzpRNh-HC0NBf12pyobe',
  '1T4awQy9t8cZvLzLNp-RJnUO290RZ-qwP',
  '1t6V4o-1pLWzLqC0hv8HepRA0m0AOLEPm',
  '1ZhIItKVE8RFaWNTs6rgvdxRbN2baIaAF',
  '1kz8Yx--kA2L60w-Gk7ZfQxHzxyQPb7iz',
  '1uoyChqLh7Xyl2-x6I2D2-AOUw0u3Da2t',
  '1Xc-_1XrgxFfIN4htvbjktBZHpFUDyfTF',
  '1KfqTg_E_Lk7x9LeyfV9_Pxcy_x18O2hv',
  '13LgzrDDB0FCWMM7OW09zzn1ObCtRaA0g',
  '16bfCTk9u9wg36SSntKy2kf619247HhsI',
  '1wQGrGR89H1mAhRoKXxPqHhKt-O1YaEcU',
  '1ynWJ6z_V5uHIOAVUCzVYdBlkfFR9-kD0',
  '1AQ2OVtk2h0ysUMParW-CT4nKct_blB0v',
  '1ygLR7FFX6383ZkvFqpLxWCVdiPON3otk',
  '1oQWy9VjTnEzpFqryUdSeTvMJnEAGCfBR',
  '1CUlgJL6JnGHBi9UJQF2vM9YTNHvwd5Ra',
  '1CErbplK3HN0qkfIWflpi-YVlFM0N8svp',
  '1gBc2B0MuAA7l7BJcjsM3in3jmXBg_fyM',
  '1X8eE0PRQdRoE62_xumv--YDNr7KEZb2Q',
  '1ueOzsyljcvfVJ54c-1rf3kSWdtfoWnNk',
  '1Fb91pZt-vUGVlzpDmbOgVGzeqxowaYun',
  '1DI1GjrNzdv-1Z75IBlH421AWcofnS8X9',
  '1wZy_wVHMHEQbFo1kck0vI0Yn3CHj_keU',
  '1cNydjNFAISMCKECsb9NHlAiFPr6pBqoY',
  '1KusLEPdl__228HAi7ilby0EySGmw21zr'
  ];

  this.listEnglishNames = [
    'Banana',
'Pineapple',
'JackFruit',
'Pomegranate',
'Date',
'Berry',
'Custard apple',
'Watermelon',
'Sapodilla',
'Guavas',
'Fangs',
'Grapes',
'Mangoes',
'Sweet lime',
'Orange',
'Sweet orange',
'Rose apple',
'Goose berry',
'Lemon',
'Lime',
'Wood apple',
'Apple',
'Sugar cane',
'Coconut',
'Papaya'
  ];

  this.listOfWords = ['అరటిపండు',
  'అనాసపండు',
  'పనసపండు',
  'దానిమ్మపండు',
  'ఖర్జూరం',
  'నేరేడుపండు',
  'సీతాఫలం',
  'పుచ్చకాయ',
  'సపోట',
  'జామపళ్ళు',
  'రేగుపళ్ళు',
  'ద్రాక్షపండ్లు',
  'మామిడిపండ్లు',
  'బత్తాయ',
  'నారింజ',
  'కమలాఫలం',
  'జీడిమామిడి',
  'ఉసిరికాయ',
  'నిమ్మపండు',
  'నిమ్మకాయ',
  'వెలగపండు',
  'ఆపిల్‌ పండు',
  'చెరుకుగడ',
  'కొబ్బరికాయ',
  'బొప్పాయిపండు'];
  this.listOfSounds = ['1c-tvc47CeyFHhwaOHYHrC93eB2MOZyBl',
  '14ePqEPYRLyy4OyTKSj3FvbfpEmn5_3Ip',
  '1teMltznuZXacx160vG1C9eVPq9wrgN2Z',
  '1yIsmrswEFaesF31HkDVejJVyRgrpFVuI',
  '12basivzsG_3K9Z4Y5F-aULkqKpDMgvGb',
  '1AbYVD3Lm0R3T4cKvSUMfs1z2o4rZrXze',
  '14x0NfssppKe_yhFVUPTD5vqJkigjwnSM',
  '1XcnJpyckkK9b6RKG82ZPD0TqfR7c0HfX',
  '1gAzE7RNyfw2fiT3P2qI6sedOMLehSpMJ',
  '1X21LpC1GUwFpvs5mwHbgVgMnYvT8ymFp',
  '1LZtOUYJOIjn8NbvQy3pnx_mQKtdN2PBJ',
  '16Xyu1l4kKTG2pjgpgJs2hOr7nc7bECPc',
  '1I2oLY9n8KkZ5y3P5xOw35NmlHLVebC7J',
  '1OXW2Tu8KzISYGxkHQfQvEYcvgzA5D5T6',
  '1IhUIc3HY_4dH2GnksspLZXg7yhvjVGdR',
  '1pOe8Zj0AIrUo-Yfw_MyqfDbn_TVil-vc',
  '1bz2kab-YFxFegjN_kkVI4GY15_ukm2cU',
  '1leBN5EHAjJwmVZEZY9QP93k5VSMikI9_',
  '1k3iYDzp6ebTnH6cYN9EtNZ0pqxqwG9tl',
  '1PI7-2kJnzILSVGT7t3iihtSEAdkWN9rh',
  '1pNlit0PRbytJgPa_mv4BejRdljNGkEp9',
  '1Eoc7dItiThnTdCD5cPMGKttTTCFH_H_e',
  '1oNu-CqV_Q12uRwoehM09pKT99mNVyuVq',
  '1XNXZ1erY3rt5jRGXNdAAyLFftyBXEIXp',
  '1OAGRrUGgFso_fdtg6E5HPBt00DxV-HUv'];

    this.applySelectedLesson();
  }
  titleNames: string[];
  quizWords: any[] = [];
  
  listEnglishNames: string[];
  listImages: string[];
  listOfWords: string[];
  listOfSounds: string[];
  nbrsUsed: number[]=[]; 
  maxNbrs: number[]=[6,11,16,21,26,31,36,41,45,49,52]; 
  maxNbr = 25;
  ansPosn: number = -1;

  curNbr: number = -1;
  qstnNbrs:number[]=[]; 

  wrongAnswers: number = 0;
  rightAnswers: number = 0;

  gameNbr: number = 1;

  nbrsForGame2: number[] = [];
  game2Ansers: number = 0;
  gamefinish: boolean = false;

  
  applySelectedLesson(){
    let obj1: any = document.getElementById('editMode');
    let objVal: number = 0;
    if(obj1) objVal = obj1.value;
    this.quizWords = [];

    this.nbrsUsed=[]; 

    this.maxNbr = this.listOfSounds.length;
    this.curNbr = -1; 
    this.ansPosn = -1;

    this.wrongAnswers = 0;
    this.rightAnswers = 0;

    this.gamefinish = false;


    //alert(this.quizWords);

  }
  setGame(nbr: number){
    if(this.gameNbr != nbr)
    {
      this.gameNbr = nbr;
      this.applySelectedLesson();
    }
  }
  startGame(){
    let obj1: any = document.getElementById('start');
    this.qstnNbrs = [];


    let rndNbers: number[] = this.getRandomNumbers(this.maxNbr-1, 5);

    this.ansPosn = this.getOneRandomNumber(4); 

    for(let k = 0; k < this.ansPosn; k++){

      this.qstnNbrs.push(rndNbers[k+1]);

    }
    this.qstnNbrs.push(rndNbers[0]);

    for(let k = this.ansPosn+1; k < rndNbers.length; k++){

      this.qstnNbrs.push(rndNbers[k]);

    }

    this.soundFont();
    this.gamefinish = false;
    

  }
  finishGame(){
    this.nbrsUsed=[]; 
    this.wrongAnswers = 0;
    this.rightAnswers = 0;
    this.curNbr = -1;

  }

  soundFont(){
    let audio = new Audio();
    audio.src="https://drive.google.com/uc?export=download&id="+this.listOfSounds[this.curNbr];
    audio.load();
    audio.play();
  }
  soundKaadu(){

    let audio = new Audio();
    audio.src="../assets/sounds/kaadu.wav";
    audio.load();
    audio.play();
  }
  soundGood(){
    let rndNbr1:number = Math.round(Math.random() * 4);
    let goodSounds: string[] = ['good1','good2','good3','good4','good5'];

    let audio = new Audio();
    audio.src="../assets/sounds/"+goodSounds[rndNbr1]+".wav";
    audio.load();
    audio.play();
  }
  soundBad(){
    let rndNbr1:number = Math.round(Math.random() * 4);
    let badSounds: string[] = ['bad1','bad2','bad3','bad4','bad5','bad6'];

    let audio = new Audio();
    audio.src="../assets/sounds/"+badSounds[rndNbr1]+".wav";
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



  testAnswerGame2(ansNbr: number){

    if(!this.gamefinish)
    {
      if(this.game2Ansers == this.nbrsForGame2[ansNbr]){
        this.soundSendFont([this.listOfSounds[this.game2Ansers]]);
        this.sleep(2000);
        this.game2Ansers++;

        if(this.game2Ansers==this.maxNbr)
        {
          this.gamefinish = true;
        }
        
        this.rightAnswers++;
      }
      else{
        this.soundBad();
        this.sleep(2000);
        this.wrongAnswers ++;
      } 

    }
    
  }



  testAnswer(ansNbr: number){
    if(!this.gamefinish)
    {
      if(ansNbr == this.ansPosn){
        this.soundGood();
        this.sleep(2000);
        if(this.nbrsUsed.length < this.maxNbr)
        {
          this.startGame();
        }
        else{
          this.gamefinish = true;
        }
        
        this.rightAnswers++;
      }
      else{
        let rndNbr1:number = Math.round(Math.random() * 4);
        let badSounds: string[] = ['bad1','bad2','bad3','bad4','bad5','bad6'];
        this.soundSendFont([badSounds[rndNbr1], this.listOfSounds[this.curNbr]]);
        this.soundSendFont(["../assets/sounds/"+badSounds[rndNbr1]+".wav", "https://drive.google.com/uc?export=download&id="+this.listOfSounds[this.curNbr]]);
        
        this.sleep(2000);
        this.wrongAnswers ++;
      }

    }    

  }

  sleep(ms:number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  getOneRandomNumber(maxNbr: number): number{
    return Math.round(Math.random() * maxNbr);
  }

  getRandomNumbers(maxNbr: number, reqdNbrs:number): number[]{

    let returnNbers: number[] = [];
    for (let index = 0; index < reqdNbrs; index++) {
      let rndNbr:number = Math.round(Math.random() * (maxNbr-index));
      if  (index == 0){
        let bNbrUsed: boolean = true;
        while(bNbrUsed) {
          bNbrUsed = false;
          for(let k = 0; k < this.nbrsUsed.length; k++){
            if(this.nbrsUsed[k] === rndNbr){
              bNbrUsed = true;
              rndNbr++;
              if(rndNbr>maxNbr)rndNbr=0;
            }
          }
        }
        this.curNbr = rndNbr;
        this.nbrsUsed.push(rndNbr);
      }

      let bNbrSelcted: boolean = true;
      while(bNbrSelcted) {
        bNbrSelcted = false;
        for(let j = 0; j < index; j++){
          if(returnNbers[j] === rndNbr){
            bNbrSelcted = true;
            rndNbr++;
            if(rndNbr>maxNbr)rndNbr=0;
          }
        }
      }
      returnNbers.push(rndNbr);      
    }

    return returnNbers;

  }

  ngOnInit(): void {

  }

}
