import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-ramayanam',
  templateUrl: './ramayanam.component.html',
  styleUrls: ['./ramayanam.component.css']
})
export class RamayanamComponent  implements OnInit {

  booklinks: any;
  pdfFileLink: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(" ");
  currentCount: number = 0;

  lessonsList: any [] = [{val:0, des:'Ramayanam'},
  {val:1, des:'Bharatam'},
  {val:2, des: 'Bhagavatam'},
  {val:3, des: 'Neethi kathalu'},
  {val:4, des: 'Festivals'},
  {val:5, des: 'Kavulu-Vaggeyakarulu'}];
  selectedLesson: number = 0;

  constructor(private sanitizer: DomSanitizer) {
    
    this.getAlesson();

   }



  incrementCounter(i: number) {
    this.currentCount = i;
  }

  ngOnInit(): void {
  }

  getAlesson(){

    this.currentCount = 0;

    if(this.selectedLesson == 0){
        this.booklinks = 
        [{
          titleName: 'వాల్మీకి కోకిల Valmiki Kokila ',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1RLHBbToCJXtfm56hv1gvQHcUw1pVdTLw/preview")
        },
        {
          titleName: 'సూర్యవంశ రాజులు Suya dynasty kings',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1wfXpeBy5OmqzMfZRNrf9yhXBH-RhfFQo/preview")
        },
      ];

    }

    else if(this.selectedLesson == 1){
      this.booklinks = [
        {
          titleName: 'భారతము-పంచమవేదము Fifth Veda',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1kWDCg4JFS3HFSAGWruWvqkYAd4fFKz0v/preview")
        },
    ];
    }

    else if(this.selectedLesson == 2){
      this.booklinks = [
    ];
    }

    else if(this.selectedLesson == 3){

      this.booklinks = 
      [
    ];
    } 

    else if(this.selectedLesson == 4){

      this.booklinks = 
      [
        {
          titleName: 'Dasara',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1SN4n1T2Fn63mHpJzxzpefV6j7qFVhTYQ/preview")
        },
        
    ];
    }



    else if(this.selectedLesson == 5){

      this.booklinks = 
      [
        {
          titleName: 'త్యాగరాజ చరితము Thyagaraja',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1qygX44Pb9tgsBLel2D20ACYXk3I0iTyV/preview")
        },
    ];

  }


    
  }

}
