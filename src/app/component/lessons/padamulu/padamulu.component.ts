import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EngToTelService } from '../../../shared/eng-to-tel.service';

@Component({
  selector: 'app-padamulu',
  templateUrl: './padamulu.component.html',
  styleUrls: ['./padamulu.component.css']
})
export class PadamuluComponent implements OnInit {


  constructor(private sEngToTel: EngToTelService, private httpClient:HttpClient) { }

  ngOnInit(): void {
    //let http!:HttpClient;
   // http.get(this.url).toPromise().then(data =>{console.log(data)});

   this.GetListFromServer();

      this.OpenFromServer();
    
    }

  url: string = 'https://drive.google.com/uc?export=download&id=1ybiYhm6sjThQbogD5w2vLL9GvY-Fg8k7';

  public sGadiNudi: any;

  public sListGadiNudi: any;


  public sCommandLetters: Array<any> = [];
  public iLekhiniOption:number = 1;
  public strCur= '';

  public sHelpTaken: number = 0;

  public sPadamCards: Array<any> = [];

  GetListFromServer(){ 

    //let url = "https://bsite.net/nrk72aspnet/api/blc/GDList";
   let url = "https://bsite.net/nrk72aspnet/api/LessonsData/GDList";
   // let url = "http://localhost:54064/api/LessonsData/GDList";
    //let url = "https://localhost:44305/api/blc/GDList";
    const this_ = this;
  
    this.httpClient.get(url).subscribe((data: any)=>{    
      let stringJson: string = data;
     // console.log(stringJson);
      this_.sListGadiNudi = data;   

    });
    this.OpenFromServer();
  }

  OpenFromServer(){ 

    let obj1: any = document.getElementById('editMode');

    let objVal: number = 1;
    if(obj1) objVal = obj1.value;



   // let url = "https://bsite.net/nrk72aspnet/api/blc/GDDet/?Id="+objVal;
    let url = "https://bsite.net/nrk72aspnet/api/LessonsData/GDDet/?Id="+objVal;
   // let url = "http://localhost:54064/api/LessonsData/GDDet/?Id="+objVal;
    
    //let url = "https://localhost:44305/api/blc/GDDet/?Id="+objVal;
    const this_ = this;
  
    this.httpClient.get(url).subscribe((data: any)=>{    
      let stringJson: string = data;
     // console.log(stringJson);
      this_.sGadiNudi = data;   

    });
  }

  teest12(i:number,j:number){
    var txt;
    var person = prompt("Please enter:", this.sGadiNudi.tD[i][j].t3);
    if (person != null &&  person != undefined && person != '') {

      let str1:string = this.sEngToTel.strConvertToTeluguAll(person);
      this.sGadiNudi.tD[i][j].t3 = str1;
      let obj1: any = document.getElementById('textBox_'+i+'_'+j);
      obj1.className = "blueText";
    }     
  }

  checkAnswers(){
    
    let iwrong:number = 0;
    let icurNbrs:number = 0;

    for (let i = 0; i <= this.sGadiNudi.tD.length-1; i++) {
      for (let j = 0; j <= this.sGadiNudi.tD[i].length-1; j++) {
        if(this.sGadiNudi.tD[i][j].t2)
        {
          let obj1: any = document.getElementById('textBox_'+i+'_'+j);

          if(this.sGadiNudi.tD[i][j].t2==this.sGadiNudi.tD[i][j].t3)
          {
            obj1.className = "blueText";
            icurNbrs++;
          }
          else{
            obj1.className = "redText";
            iwrong++;

          }
        }        
      }
    }  

    
    
    if(iwrong==0) 
    {
      alert('Well Done!!!  HelpTaken = '+ this.sHelpTaken + ' times. Score='+ (icurNbrs-this.sHelpTaken) + '/' + (icurNbrs+iwrong));
    }
    else{
      alert('There are ' + iwrong + " wrong answers, please correct");
    }

  }

  getClue(){
    let iNoAns:number = 0;

    for (let i = 0; i <= this.sGadiNudi.tD.length-1; i++) {
      for (let j = 0; j <= this.sGadiNudi.tD[i].length-1; j++) {

        if(this.sGadiNudi.tD[i][j].t3==='')
        {
          iNoAns++;
        }
      }
    }
    if(iNoAns>0)
    {
      let iRndNbr:number = Math.floor((Math.random() * iNoAns));
    
      iNoAns = 0;
      for (let i = 0; i <= this.sGadiNudi.tD.length-1; i++) {
        for (let j = 0; j <= this.sGadiNudi.tD[i].length-1; j++) {
          if(this.sGadiNudi.tD[i][j].t3==='')
          {
            if(iNoAns==iRndNbr)
            {
              this.sGadiNudi.tD[i][j].t3=this.sGadiNudi.tD[i][j].t2;
              this.sHelpTaken++;
              return;
            }
            iNoAns++;
          }        
        }
      }
    }
    else{
      this.checkAnswers();
    }  
  }


  showAnswers(obj1: any){

    const elements1 = Array.from(document.getElementsByName("txtBox"));
    for (let i = 0; elements1[i]; i++) {
      let node = elements1[i]; 

      if(obj1.target.checked){  
        node.className += " w3-show";
      } 
      else{
        node.className = node.className.replace(" w3-show", "");
      } 
    }    
  }



}

