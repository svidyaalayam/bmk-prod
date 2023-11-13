import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-worksheets',
  templateUrl: './worksheets.component.html',
  styleUrls: ['./worksheets.component.css']
})
export class WorksheetsComponent implements OnInit {

  worksheetlinks: any;
  pdfFileLink: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.worksheetlinks = 
    [{
      titleName: 'అచ్చులు',
      pdfLinks:[{title:'అ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1HEtcaBy4z-Aw9-TLaiEj1IEtDhUgoX0J/preview")},
      {title:'ఆ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/17XgJZwz-q45gCbOWXfORcexp4Ht_zxYx/preview")},
      {title:'ఇ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/13xaC7GhEdxs0jdHbLI0Obuh14GaL_SET/preview")},
      {title:'ఈ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Rno7t-BsV8JyNHwfBwtdo0MmeuSmHgOr/preview")},
      {title:'ఉ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1oJY0AMdpkb_VUb1JjbSONesf7pWW8yL0/preview")},
      {title:'ఊ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/12jLUXPYyTP0dZRoL4eXJsacd3SZ3H3hI/preview")},
      {title:'ఋ ౠ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1dw6gIgl9n9q3wzr90Bv5ejiE7DRtbtai/preview")},
      {title:'ఎ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1asxaUijXaMDvUPIxnmE4RltjgMbhYCmF/preview")},
      {title:'ఏ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/10nxmsetVqlW7Z5bk09kmcMWm_ODqdhF4/preview")},
      {title:'ఐ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1eDBmozsf6sq1y_No5w3Rt0U_NMemzZNT/preview")},
      {title:'ఒ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/18YQlxjo34n9eGXoJSVK-0C9oWrEY_b8I/preview")},
      {title:'ఓ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/16rBf8YSgPdqGSV-HOjwNXJ3h2srUJ2pn/preview")},
      {title:'ఔ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1FBjL9IA2sD8RkKDoSr453XueAYe6b8Du/preview")},
      {title:'అం అః', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1ajgm2vm_plissnuK8s3fGlUNchxi-DAP/preview")}]
    },
    {
      titleName: 'హల్లులు',
      pdfLinks:[{title:'క', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/13ibhAm5LQpHshcFb0lsdEeMl27OZjqM5/preview")},
      {title:'ఖ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1innmtF4t5uzI0fRLQS-TfSHv8_a6Q8gN/preview")},
      {title:'గ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1sdegc0IjOzdxm648V4PDjwC95izkuRg5/preview")},
      {title:'ఘ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Gk2Ooa2xlFT0uwW1-R7USYcD1ALrDzZb/preview")},
      {title:'ఙ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("")},
      {title:'చ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1NMxkSDYrpaMbCqf7pwUfCgi3VEFy88sf/preview")},
      {title:'ౘ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("")},
      {title:'ఛ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1NlBSYoh0rIDjmh-kOQ8zkL091ow8oGhW/preview")},
      {title:'జ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1gjUD4YyRx9ke2ag-9E1I1kCeYiuDTt-E/preview")},
      {title:'ౙ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("")},
      {title:'ఝ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1LK87-LECVtXMFAG9u96ONvAwB1H47CVD/preview")},
      {title:'ఞ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("")},
      {title:'ట', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1uHi9xMulHZYySNSBYx9bjr6YTy9tNzad/preview")},
      {title:'ఠ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1832y03zfJO_ApRfuiP40I6wfiV6ot3U7/preview")},
      {title:'డ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Or6ZePlXh_bvfLXZRqpjPzcXB0E2KX8o/preview")},
      {title:'ఢ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1kjcY8l8YqYRxTE29tuZJtn_iccoZL8L9/preview")},
      {title:'ణ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1MXVulqFwU24JGLTgLJnJtB9_gQfyXM6g/preview")},
      {title:'త', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/132OHWv1jGWckrYohjTLUOGiOcPCiLNVB/preview")},
      {title:'థ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Ym-fMyFLAEKDvt-winYYK_P_Mmgi4EIW/preview")},
      {title:'ద', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1sIEC9uNhk1J0oCJ1mUXA1lCNk7WhUOaK/preview")},
      {title:'ధ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1v6E3khaGbAc6jD_TtWUkn8F0n6TkQ1pB/preview")},
      {title:'న', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1jhGPNRiKJqE9tOuenUqQH4Ss2fgbGWRO/preview")},
      {title:'ప', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1mLlXO_-szvEvtLQBj6fdHzrflFGgSPno/preview")},
      {title:'ఫ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Ri0YAbpEacij6gD5S6com8Ci9HGrNJy6/preview")},
      {title:'బ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1QlIodB65J3bhcoE26rT_5gAq9LlJET2r/preview")},
      {title:'భ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1UJJ6D7WOtb56dmPhOVYNy4zae-J6-HaN/preview")},
      {title:'మ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1lJTr4UGN2mPydZ9-WhO9gC0G07hYx7r0/preview")},
      {title:'య', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1_Ha3AGTNuxWFb5juooUwPpSq49mhgsQv/preview")},
      {title:'ర', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/19LHkuP5WrgFdwa0iNS1hIO8ppD9PNEiF/preview")},
      {title:'ల', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1hF1MFJcyVK31Eity5p_Pe7TplN1tIe3m/preview")},
      {title:'వ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1irGTzHvS_A9I7YKC48gRwubvdDIKnH6O/preview")},
      {title:'శ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1bYSGMnLUmVHL91TyRPPcDT0mvFGC_fo7/preview")},
      {title:'ష', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1GhDP6VALBFLFICKi5HYtaScMTw0XqYzo/preview")},
      {title:'స', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/19xTdFQfk5yV9em5dPn6P-dUdCKMjLYlA/preview")},
      {title:'హ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1FOtP7u0clqa5Ps6dCYTgc4vLtyCVv51p/preview")},
      {title:'ళ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1q9bHck5ewaGkoqAxDpRtMnwPE7-Fc_fp/preview")},
      {title:'క్ష', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1QsyTH0bzRUEumaEDN_jx3NhG7bQLrX3Y/preview")},
      {title:'ఱ', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1PLwe8NygVon21oqNSNgnrvKgKDbO5hqJ/preview")}]
    },
    {
      titleName: 'అచ్చులు-హల్లులు',
      pdfLinks:[{title:'WS-1', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1Ui_G_ceU0TunMHEVRP0hUib713ALFEgc/preview")},
      {title:'WS-2', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1H1XAMLORT_aOTI94GQuwcbkvkDQ_DDbF/preview")},
      {title:'WS-3', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1HEqFrd_ih6QjFjG5wlQV51FMZ5DuWL3f/preview")},
      {title:'WS-4', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1PY0dHV_NGotUyI4k1TlYkP7m4xwz1XEe/preview")},
      {title:'WS-5', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1I_DU3IHYONMfXLkrAg2ZeKLnR7eVjheH/preview")},
      {title:'WS-6', vlink:this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1dfJHuyPANpNCJC5UtPYEdTD8ya-rSFJX/preview")}]
    }
  ];
  
    this.pdfFileLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1HEtcaBy4z-Aw9-TLaiEj1IEtDhUgoX0J/preview")
  }

  setLink(pLink1: SafeResourceUrl){
    this.pdfFileLink = pLink1;
  }

    

  ngOnInit(): void {

  }

}

