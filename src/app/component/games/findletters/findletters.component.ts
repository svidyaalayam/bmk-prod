import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findletters',
  templateUrl: './findletters.component.html',
  styleUrls: ['./findletters.component.css']
})
export class FindlettersComponent implements OnInit {

  constructor() { 

    this.setLanguage(1);
    this.applySelectedLesson();
  }
  titleNames: string[] =[];
  quizWords: any[] = [];
  
  listOfTranslits: string[] = [];
  listOfWords: string[] = [];
  listOfSounds: string[] = [];
  nbrsUsed: number[]=[]; 
  maxNbrs: number[]=[]; 
  maxNbr = 6;
  ansPosn: number = -1;

  curNbr: number = -1;
  qstnNbrs:number[]=[]; 

  wrongAnswers: number = 0;
  rightAnswers: number = 0;

  gameNbr: number = 1;

  nbrsForGame2: number[] = [];
  game2Ansers: number = 0;
  gamefinish: boolean = false;
  iLanguageOption:number = 1;
  iTranslitOption:number = 1;

  audioOn: boolean = false;

  setLanguage(iOptn : number ){
    this.iLanguageOption = iOptn;    

    if(iOptn==1)
    {
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

      this.listOfWords = ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 
      'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'అం', 'అః',
      'క', 'ఖ', 'గ', 'ఘ', 'ఙ', 
      'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 
      'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 
      'త', 'థ', 'ద', 'ధ', 'న', 
      'ప', 'ఫ', 'బ', 'భ', 'మ', 
      'య', 'ర', 'ల', 'వ', 'శ', 'ష', 'స', 'హ', 'ళ', 'క్ష', 'ఱ'];
      this.listOfTranslits = ['a', 'ā', 'i', 'ī', 'u', 'ū', 'r̥', 'r̥̄', 
      'e', 'ē', 'ai', 'o', 'ō', 'au', 'aṁ', 'aḥ',
      'ka', 'kha', 'ga', 'gha', 'ṅa', 
      'ca', 'cha', 'ja', 'jha', 'ña', 
      'ṭa', 'ṭha', 'ḍa', 'ḍha', 'ṇa', 
      'ta', 'tha', 'da', 'dha', 'na', 
      'pa', 'pha', 'ba', 'bha', 'ma', 
      'ya', 'ra', 'la', 'va', 'śa', 'ṣa', 'sa', 'ha', 'ḷa', 'kṣa', 'ṟa'];
      this.listOfSounds = ['a1', 'a2', 'i1', 'i2', 'u1', 'u2', 'ru1', 'ru2', 
      'e1', 'e2', 'ai1', 'o1', 'o2', 'au1', 'am1', 'ah1',
      'h01ka', 'h02kha', 'h03ga', 'h04gha','h05ina',
      'h06ca', 'h07cha', 'h08ja', 'h09jha', 'h10ini',
      'h11Ta', 'h12Tha', 'h13Da', 'h14Dha', 'h15ana',
      'h16ta', 'h17tha', 'h18da', 'h19dha', 'h20na',
      'h21pa', 'h22pha', 'h23ba', 'h24bha', 'h25ma',
      'h26ya', 'h27ra', 'h28la', 'h28va', 'h29sa', 'h30sha', 'h31sa', 'h32ha', 'h33la', 'h34ksha', 'h35bra'];

      this.maxNbrs = [6,11,16,21,26,31,36,41,45,49,52]; 

    }
    

    if(iOptn==2)
    {
      this.titleNames = ['अच्चुलु - अ, आ, इ, ई, उ, ऊ',
      'अच्चुलु - ऋ, ॠ, ए, ऐ',
      'All अच्चुलु',
      'क वर्गमु - क, ख, ग, घ, ङ',
      'च वर्गमु - च, छ, ज, झ, ञ',
      'ट वर्गमु - ट, ठ, ड, ढ, ण',
      'त वर्गमु - त, थ, द, ध, न',
      'प वर्गमु - प, फ, ब, भ, म',
      'अंतस्तमुलु - य, र, ल, व',
      'ऊष्ममुलु - श, स, ष, ह',
      'All हल्लुलु'
      ];

      this.listOfWords = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ',
      'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः',
      'क', 'ख', 'ग', 'घ', 'ङ',
      'च', 'छ', 'ज', 'झ', 'ञ',
      'ट', 'ठ', 'ड', 'ढ', 'ण',
      'त', 'थ', 'द', 'ध', 'न',
      'प', 'फ', 'ब', 'भ', 'म',
      'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह', 'क्ष'];
      this.listOfTranslits = ['a', 'ā', 'i', 'ī', 'u', 'ū', 'ṛ', 'ṝ',
      'e', 'ai', 'o', 'au', 'aṃ', 'aḥ',
      'ka', 'kha', 'ga', 'gha', 'ṅa',
      'ca', 'cha', 'ja', 'jha', 'ña',
      'ṭa', 'ṭha', 'ḍa', 'ḍha', 'ṇa',
      'ta', 'tha', 'da', 'dha', 'na',
      'pa', 'pha', 'ba', 'bha', 'ma',
      'ya', 'ra', 'la', 'va', 'śa', 'ṣa', 'sa', 'ha', 'kṣa'];
      this.listOfSounds = ['a1', 'a2', 'i1', 'i2', 'u1', 'u2', 'ru1', 'ru2', 
      'e2', 'ai1', 'o2', 'au1', 'am1', 'ah1',
      'h01ka', 'h02kha', 'h03ga', 'h04gha','h05ina',
      'h06ca', 'h07cha', 'h08ja', 'h09jha', 'h10ini',
      'h11Ta', 'h12Tha', 'h13Da', 'h14Dha', 'h15ana',
      'h16ta', 'h17tha', 'h18da', 'h19dha', 'h20na',
      'h21pa', 'h22pha', 'h23ba', 'h24bha', 'h25ma',
      'h26ya', 'h27ra', 'h28la', 'h28va', 'h29sa', 'h30sha', 'h31sa', 'h32ha', 'h34ksha'];

      this.maxNbrs = [6,10,14,19,24,29,34,39,43,47,48]; 

    }   



  }



  applyUserOptions(){
    let obj1: any = document.getElementById('editTranslitOption');
    if(obj1) {
      if(obj1.value == 'Transliterature - Native') this.iTranslitOption = 1;
      else this.iTranslitOption = 2;
    }
    

  }
  applySelectedLesson(){
    let obj1: any = document.getElementById('editMode');
    let objVal: number = 0;
    if(obj1) objVal = obj1.value;
    this.quizWords = [];

    this.nbrsUsed=[]; 

    this.maxNbr = this.maxNbrs[objVal];
    this.curNbr = -1; 
    this.ansPosn = -1;

    this.wrongAnswers = 0;
    this.rightAnswers = 0;

    this.gamefinish = false;


    if (this.gameNbr==2)
    {
      this.startTimer();
      this.timeLeft = 0;
      this.game2Ansers = 0;
      this.nbrsForGame2 = this.getRandomNumbers(this.maxNbr-1, this.maxNbr);
    }
    
  }
  setGame(nbr: number){
    if(this.gameNbr != nbr)
    {
      this.gameNbr = nbr;
      this.applySelectedLesson();
    }
  }

  startGameButton(){
    
    this.pauseTimer();
    this.startTimer();
    this.timeLeft = 0;
    this.startGame();

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
    if(this.audioOn) this.soundFont();
    this.gamefinish = false;  
    

  }
  finishGame(){
    this.nbrsUsed=[]; 
    this.wrongAnswers = 0;
    this.rightAnswers = 0;
    this.curNbr = -1;

    this.pauseTimer();
    this.timeLeft = 0;

  }
  soundFont(){

    let audio = new Audio();
    audio.src="../assets/sounds/"+this.listOfSounds[this.curNbr]+".wav";
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
        audio[k] = new Audio("../assets/sounds/"+strAry[k]+".wav");
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
          this.pauseTimer();
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
        if(this.audioOn)
        {
          this.soundGood();
          this.sleep(2000);
        }
        
        if(this.nbrsUsed.length < this.maxNbr)
        {
          this.startGame();
        }
        else{
          this.gamefinish = true;  
          this.pauseTimer();        
          
        }
        
        this.rightAnswers++;
      }
      else{
        let rndNbr1:number = Math.round(Math.random() * 4);
        let badSounds: string[] = ['bad1','bad2','bad3','bad4','bad5','bad6'];
        this.soundSendFont([badSounds[rndNbr1], this.listOfSounds[this.curNbr]]);
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

  ngOnInit(): void {

  }

}

