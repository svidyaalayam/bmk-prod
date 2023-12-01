import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  mediaevents: any;



  constructor(private sanitizer: DomSanitizer) { 
    
    this.mediaevents = 
    [
      {
        currentCount: 0,
        eventName: 'Annual Celebrations 2023',
        videoLinks:[{title:'వార్షికోత్సవములు', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VKyy8rpOIu0")}]
      },
      {
        currentCount: 0,
        eventName: 'Annual Celebrations 2022',
        videoLinks:[{title:'వార్షికోత్సవములు', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VXxo6PK60rE")}]
      },
      {
        currentCount: 0,
        eventName: 'Annual Celebrations 2021',
        videoLinks:[{title:'వార్షికోత్సవములు', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/i6TFgSaOl6Y")}]
      },
      {
        currentCount: 0,
        eventName: 'Sankranthi 2019',
        videoLinks:[{title:'పద్యములు', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/boI5r-35YCw")},
        {title:'తేనెల తేటల - పాట', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/Cnwmqj5yMxk")},
        {title:'పది చిలకలు - పాట', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/AwvQDWauNjE") }]},
      {
        currentCount: 0,
        eventName: 'Annualday 2018',
        videoLinks:[{title:'అమ్మలగన్న - పద్యము', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gsCbOsTX5UU")},
        {title:'ఉపకారికి - పద్యము', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/RzZC7qCayEg")},
        {title:'అల్పుడెపుడు - పద్యము', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/OQHS4GqshTY") }]
      },
      {
          currentCount: 0,
          eventName: 'Annualday 2017',
          videoLinks:[{title:'ప్రార్థన', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/VFEVSt8uGy8")},
          {title:'అన్నపూర్ణ భవాని పద్యము', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/FdwGM-jEKqA")},
          {title:'చేతవెన్న ముద్ద & చందమామరావె', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/bqKpiYIvelk")},
          {title:'అమ్మలగన్న - పద్యము', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/MUnV5cEUCfM")},
          {title:'పలికెడిది, శ్రీకైవల్య, శారద నీరదేందు', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/gn2VGlWWbsE")},
          {title:'అమ్మలగన్న - పద్యము', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/kVcF4qfbhKw")},
          {title:'గొబ్బిల్లు పాట', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/LgspPQNidDA")},
          {title:'పొడుపు కథలు Part-1', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/xyTDzlhvscE")},
          {title:'పొడుపు కథలు Part-2', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yjlu5bJXqWo")},
          {title:'నాన్నా పులి నాటకము Part-1', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/QqpQJifvQFA")}, 
          {title:'నాన్నా పులి నాటకము Part-2', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/E1IHDI_kvNY")},
          {title:'భరత నాట్యము-1', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/B6SmlKJ9YTQ")},
          {title:'భరత నాట్యము-2', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/ujKVoELOAM8")}, 
          {title:'భరత నాట్యము-3', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/cSFNO28hYgQ")},
          {title:'ధృవుడు కథ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/YlDyBwjGF_E")},
          {title:'పరమానంద శిష్యులు నాటకము Part-1', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/4fsbe5AVL_o")},
          {title:'పరమానంద శిష్యులు నాటకము Part-2', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/y6jo1h1dhrM")},          
          {title:'ఏల వచ్చెనమ్మ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/4-akpzORUYk")}]
      }
    ]
  }

  incrementCounter(i: number, j: number) {
    this.mediaevents[j].currentCount = i;
  }

  ngOnInit(): void {
  }

}
