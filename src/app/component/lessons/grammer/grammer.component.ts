import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-grammer',
  templateUrl: './grammer.component.html',
  styleUrls: ['./grammer.component.css']
})
export class GrammerComponent implements OnInit {

  grammerlinks: any;
  pdfFileLink: SafeResourceUrl;
  currentCount: number;
  //https://drive.google.com/file/d/1_YVCa6_HPMS14RoO-CZKn1ypMnxAA_HR/view?usp=sharing

  constructor(private sanitizer: DomSanitizer) {
    this.currentCount = 0,
    this.grammerlinks = 
    [{
      titleName: 'వచనములు',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1cqw4wOudeoR4cxFsB-LvQL0UV3-palLO/preview")
    },
    {
      titleName: 'లింగములు',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_vOLUFrn_UzPzRlY7uT3LA0Zn7HYMapT/preview")
    },
    {
      titleName: 'వ్యతిరేకపదములు',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_YVCa6_HPMS14RoO-CZKn1ypMnxAA_HR/preview")
    },
    {
      titleName: 'భాషాభాగములు',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/17Tl6pBfIku0RNfRHhcq9gJn-mtfB6psq/preview")
    },
    {
      titleName: 'విభక్తులు',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1hP1TyajNrN2MUU-YKClxrlBrkseJwcsV/preview")
     },
    // {
    //   titleName: 'సంధులు',
    //   pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1zXW4scaSk9YzutIKBeiy6KIbSTNZJ6Jo/preview")
    // },
    // {
    //   titleName: 'సమాసములు',
    //   pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/11qAF-TW3Jgxo-l1eveaZWGgVc5IZ7Fhd/preview")
    // },
    // {
    //   titleName: 'ఛందస్సు',
    //   pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/11qAF-TW3Jgxo-l1eveaZWGgVc5IZ7Fhd/preview")
    // }
  ];

    this.pdfFileLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1971wj0nhGNYvsypnNWYmPxY-fjtfgy02/preview")


   }

  incrementCounter(i: number) {
    this.currentCount = i;
  }

  ngOnInit(): void {
  }

}
