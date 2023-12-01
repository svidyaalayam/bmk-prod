import { Component, OnInit } from '@angular/core';
import { EngToTelService } from '../../../shared/eng-to-tel.service';

@Component({
  selector: 'app-telwords',
  templateUrl: './telwords.component.html',
  styleUrls: ['./telwords.component.css']
})
export class TelwordsComponent implements OnInit {

  constructor(private sEngToTel: EngToTelService) { 
    this.titleNames = ['అచ్చులు', 'హల్లులు', '2 అక్షరముల పదములు', '3 అక్షరముల పదములు','గుణింతాలతో పదములు','ఒత్తులతో పదములు'];
    this.applySelectedLesson();
  }
  titleNames: string[]; 
  quizWords: any[] = [];
  

  applySelectedLesson(){
    let obj1: any = document.getElementById('editMode');
    let objVal: number = 0;
    if(obj1) objVal = obj1.value;
    this.quizWords = [];

    let obj2: any = document.getElementById('editqstns');
    let nbrsToSelect: number = 3;
    if(obj2) nbrsToSelect = obj2.value;

    


    

    let listOfWords: string[] = []; 

    if(objVal==0){
      listOfWords = ['అ', 'ఆ', 'ఇ', 'ఈ', 'ఉ', 'ఊ', 'ఋ', 'ౠ', 'ఎ', 'ఏ', 'ఐ', 'ఒ', 'ఓ', 'ఔ', 'అం', 'అః'];
    }

    else if(objVal==1){
      listOfWords = ['క', 'ఖ', 'గ', 'ఘ', 'ఙ', 'చ', 'ఛ', 'జ', 'ఝ', 'ఞ', 'ట', 'ఠ', 'డ', 'ఢ', 'ణ', 'త', 'థ', 'ద', 'ధ', 'న', 'ప', 'ఫ', 'బ', 'భ', 'మ', 'య', 'ర', 'ల', 'వ', 'శ', 'ష', 'స', 'హ', 'ళ', 'క్ష', 'ఱ'];
    }

    else if(objVal==2){
      listOfWords = ['అర', 'అల', 'ఆట', 'ఆడ', 'ఆవ', 'ఇక', 'ఇల', 'ఈగ', 'ఉమ', 'ఉష', 
      'ఊక', 'ఊచ', 'ఊట', 'ఊడ', 'ఎడ', 'ఎద', 'ఏక', 'ఏల', 'ఒక', 'ఒర', 'ఓడ', 'కక్ష',
      'కల','కథ','కళ','ఖర','గద','గయ','జడ','జత','జయ','జర','టప','తల',
      'దడ','ధర','నగ','నర','నవ','పగ','పద','పర','పస','ఫల','బల','భవ',
      'మగ','మర','యమ','రమ','రక్ష','లక్ష','లత','లయ','లవ','వల','వర','వడ','హర','క్షయ','క్షర'];
    }

    else if(objVal==3){
      listOfWords = ['అక్షయ','అరక','అలక','అభవ','ఆనప','ఆయన',
      'ఆవడ','ఆవల','ఇసక','ఈయన','ఉరక',
      'ఉలవ','ఊయల','ఎడమ','ఎలక',
      'కడప','కణత','కమల','కలత','కలప','కలవ',
      'గడప','చదర','జలగ','జలజ','తడక',
      'తడప','తడవ','దక్షత','ధవళ','నగజ','నయన','పడక','పడవ',
      'పనస','పరక','పలక','భజన','మరక','మరల','మడత','మలక',
      'రక్షణ','లక్షణ','వనజ','వరద','సరళ','సహన'];
    }

    else if(objVal==4){
      listOfWords = ['బాల', 'ముకుందము', 'తెలుగు', 'పాఠశాల', 'వాచకము', 'మొదటి', 'రెండవ', 'శిఖరము',
       'మరియు', 'విషయ', 'సూచిక', 'వారము', 'అంకెలు', 'కథలు', 'పాటలు', 'పదములు', 'వదనము', 'శాంతయే',
        'గజానన', 'అనేక', 'ఏకదంత', 'వరదే', 'రూపిణీ', 'కేసర', 'దేవీ', 'ఫలము', 'అరటి', 'పండు', 'కమలా',
         'మామిడి', 'జామ', 'సీతా', 'ఆది', 'వారము', 'సోమ', 'మంగళ', 'బుధ', 'గురు', 'లఘు', 'శని', 'మొలిచింది',
          'పెరిగింది', 'తొడిగింది', 'వేసింది', 'దాగింది', 'గుబురు', 'మారాకు', 'అందరికి', 'పంచేము', 'అబ్బాయి',
           ' అమ్మాయి', 'పండిదిగో', 'ఒకటి', 'రెండు', 'మూడు', 'నాలుగు', 'ఐదు', 'ఆరు', 'ఏడు', 'ఎనిమిది',
            'పది', 'పదకొండు', 'పదమూడు', 'పదిహేను', 'పదహారు', 'పదిహేడు', 'ఇరవై', 'చేత', 'పూదండ',
             'బంగరు', 'మొలతాడు', 'తాయతలు', 'కొలుతు', 'పోలిక', 'చూడ', 'రుచుల', 'జాడ', 'పురుషులు',
              'వేరయా', 'వినుర', 'నారదాది', 'సంయుత', 'మందహాస', 'సుందర', 'మాధవా', 'వందనము', 'కేశవ',
               'వాసుదేవ', 'సంతోషము', 'అందుకో', 'అందలేదు', 'ఎగిరినా', 'చివరకి', 'విసుగు', 'పులిసి', 'పోతాయి',
                'దారిన', 'అందని', 'చేతకాని', 'మంచివి', 'కాకి', 'ఒకరోజు', 'దాహము', 'తిరిగి', 'కోసము', 'దానికి', 'కూజా',
                 'కిందకి', 'దొరికెను', 'ఉపాయము', 'రాయి', 'మొదలు', 'చివర', 'తెలివి', 'నిదానము', 'జంతువు',
                  'నలుపు', 'తెలుపు', 'పసుపు', 'ఎరుపు', 'రంగు', 'బంగారము', 'ఇనుము', 'కాగితము', 'ఎందుకు',
                   'నీతి', 'చందమామ', 'రావే', 'కోటి', 'తేవే', 'పూలు', 'పాలు', 'పెరుగు', 'పంచదార', 'చెవి', 'నోరు',
                    'నాలుక', 'నుదురు', 'భుజము', 'చేయి', 'వేలు', 'కాలు', 'గుండె', 'కడుపు', 'పాదము', 'నేను', 'నీవు',
                     'మనము', 'వారు', 'మీరు', 'రుచి', 'నలభై', 'తొంభై', 'అరవై', 'వంద', 'నూరు', 'సఖుడౌ', 'నిజముగ',
                      'ఉపకారి', 'అపకారి', 'చేయువాడు', 'మంజుల', 'పలికించి', 'మానస', 'తాబేలు', 'కుందేలు', 'తరువాత',
                       'అనుకుంటూ', 'ఉంటుంది', 'పరుగులు', 'ఊరిలో', 'కొడుకు', 'కూతురు', 'భయము', 'మాట', 'అడవి', 'జయము'];
    }

    else if(objVal==5){
      listOfWords = ['శేషాద్రి', 'గరుడాద్రి', 'వృషభాద్రి', 'వృషాద్రి', 'అంజనాద్రి', 'వెంకటాద్రి',
       'కృష్ణుడు', 'ఆంగ్లము', 'విశ్వము', 'ప్రార్థన', 'వర్ణము', 'అచ్చులు', 'హల్లులు', 'పండ్లు', 
       'పద్యము', 'శుక్లాం', 'విష్ణుం', 'చతుర్భుజం', 'ప్రసన్న', 'ధ్యాయేత్‌', 'సర్వ', 'విఘ్నోప', 'పద్మార్కం', 
       'భక్తానాం', 'ఉపాస్మహే', 'సరస్వతీ', 'నమస్తుభ్యం', 'విద్యారంభం', 'పద్మ', 'పత్ర', 'వర్ణినీ', 'సీతమ్మ', 'రామయ్య', 
       'చెట్టు', 'సిరిమల్లె', 'కొమ్మలు', 'కొయ్యండి', 'గుచ్చండి', 'ఇవ్వండి', 'తీయమ్మ', 'తీస్తాను', 'చక్కని', 'రామచంద్ర', 
       'కట్టెలు', 'పక్షి', 'వస్తువు', 'గొడ్డలి', 'వస్తాడు', 'నాన్న', 'అమ్మ', 'అయ్య', 'అక్క', 'అన్న', 'అత్త', 'మామ్మ', 
       'బామ్మ', 'మామయ్య', 'అబద్ధము', 'తండ్రి', 'తల్లి', 'నమ్మరు', 'ఎక్కువ', 'తక్కువ', 'సిగ్గు', 'గమ్యము', 'గర్వము', 
       'నిద్ర', 'స్థానము', 'స్నానము', 'మళ్ళీ', 'ప్రారంభము', 'సత్యము', 'ధర్మము', 'సత్ఫలము', 'సూక్తులు', 'ప్రేమ', 
       'భక్తి', 'విద్య', 'ముప్పై', 'తొమ్మిది', 'చూస్తాను', 'నడుస్తావు', 'కనుబొమ్మ', 'ముక్కు', 'కన్ను', 'చర్మము', 'పల్లకి', 
       'మట్టి', 'వచ్చేయి', 'నీళ్ళు', 'ద్రాక్ష', 'ఒక్కొక్క', 'అసాధ్యము', 'లభిస్తుంది', 'పుణ్యము', 'మునీంద్రుడు', 'కీర్తి', 
       'జగద్గురు', 'శుక్రవారం', 'బొప్పాయి', 'ప్రథమము', 'ఈశ్వరుడు', 'పార్వతి', 'స్వామి', 'మూర్తి', 'అహల్య', 'చంద్రుడు', 'సూర్యుడు'];
    }

    if(listOfWords.length > 0){
      let rndNbers: number[] = this.getRandomNumbers(listOfWords.length-1, nbrsToSelect);
      for(let j = 0; j < nbrsToSelect; j++){

        let thisWord: any = {t1:listOfWords[rndNbers[j]], t2:'', t3:-1};
        this.quizWords.push(thisWord);
      }
    } 
  }

  setText(idNbr: number){
    var txt;
    var person = prompt("Please enter:", this.quizWords[idNbr].t2);
    if (person != null &&  person != undefined && person != '') {
      this.quizWords[idNbr].t2 = person.toString();
    }     
  }

  getUserText(idNbr: number): string{
    let retStr: string = '';
    if((this.quizWords[idNbr].t2).trim()==='')
    {
      retStr = "?"
      this.quizWords[idNbr].t3=-1;
    }
    else{
      retStr = this.sEngToTel.strConvertToTeluguAll(this.quizWords[idNbr].t2).trim();
      (retStr===this.quizWords[idNbr].t1)? this.quizWords[idNbr].t3 = 1: this.quizWords[idNbr].t3 = 0;      
    }

    return retStr;

  }

  getRandomNumbers(maxNbr: number, reqdNbrs:number): number[]{

    let returnNbers: number[] = [];
    for (let index = 0; index < reqdNbrs; index++) {
      let rndNbr:number = Math.round(Math.random() * (maxNbr-index+1));
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

