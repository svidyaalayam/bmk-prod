import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {

  booklinks: any;
  pdfFileLink: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(" ");
  currentCount: number = 0;

  lessonsList: any [] = [{val:0, des:'Books'},
  {val:1, des:'Previous Exam Question Papers'},
  {val:2, des: 'Previous Exam Answer Papers'},
  {val:3, des: 'Sandhis+Samasas'},
  {val:4, des: 'Other Resources'}];
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
          titleName: 'Rama Stories',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1US8M6X3EZLrNbqhQI5qMnKvsxOouj38F/preview")
        },
        {
          titleName: 'Krishna Stories',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1ltqo29tm5qjoMF7JfyP9YAyGewrGzAaJ/preview")
        },
        {
          titleName: 'Mahabharata & Hitopadesha',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/17xSSabWz-2xErJM0-bBYp6GcRPEyG7iF/preview")
        },
        {
          titleName: 'Epic Civilization',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1h01NSOyR0_qHl3K6auglrrj3iIHlP97U/preview")
        },
        {
          titleName: 'Bhagavadgita',
          pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/137GKVPgotwSPwil0nGWNOTvzzezcdvjE/preview")
        }
      ];

    }

    else if(this.selectedLesson == 1){
      this.booklinks = [{
        titleName: '2023 Question Paper-1 (0499/11)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_Xlkb_cF_3g6KOkcNDBibdQ649m0SVQo/preview")
      },
      {
        titleName: '2023 Question Paper-1 (0499/12)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1sXdb3WrlmG7pNiI609aGTk2hXWZMcxhx/preview")
      },
      this.booklinks = {
        titleName: '2023 Question Paper-2 (0499/21)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/13pL8KpG8IYk1JkcNzdM4xCaMxLH38xMX/preview")
      },
      {
        titleName: '2023 Question Paper-2 (0499/22)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1mFlNqHzgR9Lxrc74_qjk8mApWZoStoab/preview")
      },{
        titleName: '2022 Question Paper-1 (0499/11)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1eRCmsZ1msVYvIgKir2UM0LGGwJitAmI0/preview")
      },
      {
        titleName: '2022 Question Paper-1 (0499/12)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1zJ8wXLCbiUuaN8kCiyVE1UoCwSZLTduR/preview")
      },
      this.booklinks = {
        titleName: '2022 Question Paper-2 (0499/21)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_GVet8h_9iJpuQ86IT_s7-hUFTtHeJcM/preview")
      },
      {
        titleName: '2022 Question Paper-2 (0499/22)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1GiOi-Pn4z6mjndosxyV11vkS-ueHSILn/preview")
      },
      {
        titleName: '2021 Question Paper-1 (0499/01)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1feIZysyBjylrtEG5dp5ObMKtnlSnlRbN/preview")
      },
      this.booklinks = {
        titleName: '2021 Question Paper-2 (0499/02)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1H3cesNm7dCQVvPJgoJXwebAgVdySs1GY/preview")
      },
      {
        titleName: '2020 Question Paper-1 (0499/01)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Knl8kuqz8hQ60qZRn88ZCSIDTlf6ltHh/preview")
      },
      this.booklinks = {
        titleName: '2020 Question Paper-2 (0499/02)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1IAtpBRsxa3V8qH1O7bJU0aFPCuvepl6d/preview")
      },
      {
        titleName: '2019 Question Paper-1 (0499/01)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_1KTRtNTyDOEeb65rj9p_a6kYMNTvn1U/preview")
      },
      this.booklinks = {
        titleName: '2019 Question Paper-2 (0499/02)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_m5JaxQ7EopJKgtglfAUxoWoRcCxvoiZ/preview")
      }
    ];
    }

    else if(this.selectedLesson == 2){
      this.booklinks = [{
        titleName: '2023 Answer Paper-1 (0499/11)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1bTHJkpMuk6lgwIgO8uylPizH4dGMK1JR/preview")
      },
      {
        titleName: '2023 Answer Paper-1 (0499/12)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1IuKUec31qAa0IZGc3lWUb63VVqFnlYCF/preview")
      },
      this.booklinks = {
        titleName: '2023 Answer Paper-2 (0499/21)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1eArB84I7hSy0NKXzJsPJdb7gFD4nZ68v/preview")
      },
      {
        titleName: '2023 Answer Paper-2 (0499/22)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1WgXyhCqlL1Kf6SabZxdYMfDEhDVQ0npq/preview")
      },{
        titleName: '2022 Answer Answer Paper-1 (0499/11)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1zOgrml2xXQBLusoQBnd_2G9wXaLqJcex/preview")
      },
      {
        titleName: '2022 Answer Paper-1 (0499/12)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Y_CT2FOUkSAOp7xtOaQhl0JL9lsuoS1n/preview")
      },
      this.booklinks = {
        titleName: '2022 Answer Paper-2 (0499/21)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Fob2Xj__RCO023cEaOhCCpTFzQ8srbFL/preview")
      },
      {
        titleName: '2022 Answer Paper-2 (0499/22)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1GX4VDm2lioiseHM5mXAft1g7Uzo8xGni/preview")
      },
      {
        titleName: '2021 Answer Paper-1 (0499/01)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1n3BlAJQmx5p-HqEjeMThB1PvgPC4nQKO/preview")
      },
      this.booklinks = {
        titleName: '2021 Answer Paper-2 (0499/02)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1FNFXCXQVbcSfYycaO4TfgpBiMV5R3q2j/preview")
      },
      {
        titleName: '2020 Answer Paper-1 (0499/01)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/13wJIY-ZbKDW1m3stueHE_frOzvCAG9Qg/preview")
      },
      this.booklinks = {
        titleName: '2020 Answer Paper-2 (0499/02)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1cwMHt6a9mOCVCQwf-zs-HWfxoPBYtHpw/preview")
      },
      {
        titleName: '2019 Answer Paper-1 (0499/01)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1MLJhFgUvVsFhfafVbPo2aG6ChMXfkXaT/preview")
      },
      this.booklinks = {
        titleName: '2019 Answer Paper-2 (0499/02)',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1ePj8Iqk_J7yu6BLlU_f-sb9LLvQWcUzW/preview")
      }
    ];
    }

    else if(this.selectedLesson == 3){

      this.booklinks = 
      [{
        titleName: 'Samasas-1',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/174EdiKRTS8zQQGrRUzT0et6v1D8stte8/preview")
      },
      {
        titleName: 'Samasas-2',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/13FPw71j4ClkH5UkyzGAZQoOsjvMUAsKG/preview")
      },
      {
        titleName: 'Samasas-3',
        pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Xx7VvgSie493ZHP-wMQJrsLMEOQLKySu/preview")
      }
    ];

  }

  

  else if(this.selectedLesson == 4){

    this.booklinks = 
    [{
      titleName: 'Workbook Part-1',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/12D14Nzju2UcchMzW3iHIPov3b280VWy9/preview")
    },
    {
      titleName: 'Workbook Part-2',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1M55Dq7HX4lBNUKGLxGFWqfySaV0LfIOl/preview")
    },
    {
      titleName: 'Learn Sanskrit 30 days',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1ZZmcfO999yf5bbflvBWxZSBVsgzRu0e4/preview")
    },
    {
      titleName: 'Nama Rupani (Nouns)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1IGR3ooyNUrCl7ykNEyGczFpJU5-zmd_v/preview")
    },
    {
      titleName: 'Kriya Rupani (Verbs)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1wzIormweVtG7RzCIACOf0YoAgeiN29Dl/preview")
    },
  ];

}

    
  }

}
