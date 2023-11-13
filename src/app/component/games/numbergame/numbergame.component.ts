import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbergame',
  templateUrl: './numbergame.component.html',
  styleUrls: ['./numbergame.component.css']
})
export class NumbergameComponent implements OnInit {

  constructor() {
    this.listOfSounds = [];
    this.setLanguage(1);
    this.createNbrsForDisplay();

  //   this.listOfSounds = ['1yRho5wa0jyqTROrfOiRhB12yHDJbOijP',
  //   '1-GU_itXFR2ZIeyhInoK1TKs5pMexhh68',
  //   '1r_JkjrDxBNWTgd3yfVoP-wuVVIUdm-FO',
  //   '1RoukCYT2yz-t47SsbvKKx0nYQM6MsZBd',
  //   '11Wb3kmOjraLOusnI3tqTpPZOtJRCPQ8o',
  //   '1EUEUPfBK006MTOFQg6bCN3gf58xSH06z',
  //   '1dOzshWxp_z3tab1Ud5AflPy56Y0w474e',
  //   '11OHc3OlFLXKbAKHIulGN6HLVOpkhqvWp',
  //   '1H-hn3NlVlPGcGrP6WammQ1UseZpedsJc',
  //   '1BieoKqyH7QwU71JeD6neQ97iKOPgluy7',
  //   '1FVmQyLCRZHPwTT8NReHCN_s_5HD3vM2r',
  //   '1zf394BVan1O0c4qsQQT28tfT3BTBQEAE',
  //   '1FYDRnw9SsuNHufex63t9YmRnExjcGuUj',
  //   '1i_LABwlp7qqEXqNVDigJLJsQYZo0vJMC',
  //   '1L2Saycr-T-bGfnHwJjpeJlNyRIYhs4Ek',
  //   '1m67_yzJiSivhZkhbOV-4u2_yRaVRlhL2',
  //   '1z23i5q2zAaARkukmRmI-5yXlpusdQHFY',
  //   '1zAH6xeGwKRsISI6ouNU2TpNYHVO0K0qu',
  //   '1hwqPJpMM8l__WHP5sVltSIJN36wDFe2Y',
  //   '1r4flWkux7pVhT99lrD6zkVufDWy6BwxR',
  // 'a'];

   }

  ngOnInit(): void {
  }

  setLanguage(iOptn : number ){
    this.iLanguageOption = iOptn;
    this.setListOfSound();  
    
  }

  setListOfSound(){
    if(this.iLanguageOption==1){
      this.listOfSounds = ['1II-RZ39NnkC1nmsVIDVKb3j3BUrG-RRP',
    '1ToUqQ2JD7XztCwWZUItEdRxIIXz_FNIv',
    '1mQ4OfdeDDrz88DdzzEmf5ptDqBWeA8Km',
    '1gWYgH7GQxgGOhLp0kiiIHdh-2Gsmrcuj',
    '1HQXhm4Cuz6DWagJax-bf43MJHjXp8MWv',
    '1Yuhu61oEs2GVOaFTtvIwIoN94czGXxl6',
    '1Tnvy2y3PlvJ51e2HPdmhh4J_BxnT5qpS',
    '1aCNzS-ZtutwPO1ackf0Hc1wp0A499HEE',
    '1ViYJwdZWPKWCH_Wg2flTAg1OpAk5j7u_',
    '1vHJ7XN_DPxuuMNSuxd9Ekupyi8TZJ2tG',
    '1YH6eiCoTrsXHyG5Fa8rDG_2Pb_IrsJa6',
    '1BNL41I8y-LTul8QNtpVqVPrykSVswnkt',
    '15IUf5FIMUirbp4hCvYIYMAESFfOwupZZ',
    '1-RUC3t6RW82wPyhxRMjMqtUgwlfaKJOn',
    '1tQPIgEtCbfs2F4VzdMrBdlYSzbpvZLmo',
    '1p3b2taJ114n670256k3rtG_C7LKzORj1',
    '1vo6WLHWSEYsIU0_o9qOSBRmCR8XfolfG',
    '1ZM7GMv7cj9Bep_XKYF2fkktumkz6D_a1',
    '1muQMOUbES5sKU4fE4vNFGujJVR3a8lyT',
    '1_oXVBPWOOTTwJbggjBhlnTOPaTUSm5Is',
    '1M1tlXzpOfcvomN3ob0PlR5a9Q36q06gT',
    '1qXwi5_ocErSzFvLII9D1p3VlWOGncgHu',
    '1mWFvJ5x9mYdOR56ylL9FkAQWVqUlw8Fk',
    '1EE5DmbR1yeBrpBomYkSSyQCmvX4AF2HS',
    '1u53kRx2GCRJv5BwCr2mtU_I3BCW5wMdl',
    '1JQvMv6BHb1RWXoa1dT8_Xo9s1sgfLh3z',
    '1NuitW7LunjmBbVb2RxpDVQiDTfibDZ1a',
    '1SYNmkRDc5E2ve6fb2_C5qG5OUz3m8clb',
    '12p48yF7_VUTsEYFhhSA1j2f_YTZRtw6o',
    '1OvWMC32evNZIupPl51nciYiNvAX9KAor',
    '1KuZlj8dlMYf1upKZ2fL47syVtj_ttDQE',
    '1JoiXIq3njAKB7YQO1L5C5Q19cAVyiVSR',
    '1hdeN_zuskjrK5ycZeke7yctwkKHpo6Py',
    '1lIUBj709qLSkrGNhoJ3jscOpiRZmuFtR',
    '1cLBYKd3K7KeQQORgjaeRgBc-PTFegmD4',
    '1U-O6K3EStjL1xH12e6W-pI3ig3whUK4u',
    '1fIjn52Pq0ptspuEzq0NWr82WsYC9DxWe',
    '1T0ikb0L5dTrVGO81HnMxnrsgXfYZH0Az',
    '1NE4br1B31XUPHg6pny_DQLT9grQAJE78',
    '1WqJFj5T-W3XTGN55e8OUWEqBrxJIudlK',
    '1rbzKIG8Hf3JXeOPF50LB4CpTO_IjX0b2',
    '1DxPX3-1fV1fydJf47r73gFpIOE6crM4h',
    '1ZCFnEy4BIUg-gRA2UlNMCs9KFId4sI9P',
    '18kNV8PvY7UXTiFpI-UxANQ9cOxW68xPm',
    '1av-Iy1TJsqtiEFMGKKr-bUXVqq8g8agp',
    '1DNaSajIQqXkYyYv6G62aOU1o__4AdfOO',
    '1mvCAE-qdxUiwfkNBQz75ygNCrgCeXs7K',
    '1SWRmugGdyj2GrPzP4Wh1RaHHmBWvDSu_',
    '1ktUuXD5x1JMrYoxTsqynvOH-ZlmPV2L9',
    '1tXOQuP-1tmHnGvb5Bh1Hfq-mEuq6U8Vf',
    '1FOxM-tmEEG07qpHo1A5-imVmACKH-FBN',
    '13YWoMioGNBK0s9XXWhwI_xCnPSX7TmYW',
    '1_9SCG3rHNAV55gJJIJJaTgMob2rObucS',
    '1p820y4mmYZyUfX4CKOMhV2hZS_Agptya',
    '1D4Q5VZ84Bnaskw9BzQv4mjXHxOFODpoe',
    '1mtXeVz4iKIcnqVhEdgKuavv1ZEB7KZLz',
    '1_LXHSMI_Z9sJSd2DlwuEFTqeooIBjvP-',
    '1t9SWTrAj2nZ39wCa3ZsvQrxkTo7RnaGD',
    '182Znhr9EkMXBPkGs0Jzqm6BqTGA7khzx',
    '1itYhjW1QZXFLj9utx3S4Qi6G5jsGFZSZ',
    '1w_wB_VhJ_wEzqJlhbECKYr7WZvnwWzoE',
    '1vPNjgFxSGI48zhuWQf0jUJ8goJRqh-zf',
    '1KvHna4M0pwxHB7UmQ6B_jeFJSCiaz5ml',
    '138MWqGhDgLzuuBtoK4pljbxqkkcJoU-G',
    '1UkW2UiWwuK152c451z_nREIq-ZLkQFYn',
    '1aarRa4vXwqxLefPCkVP07gqu9AKyZoQp',
    '1Wfy7TbdcV8UIoVnZoEH023h4uofWd36J',
    '1jhCrA5KxUNpA3dtg3EPjxkoVZn0VRigZ',
    '14dcetSZjbO4rH3ozu8SuDH-8KIlN93F9',
    '1M0O7z-ivvTnU_a6wVbiF0Z3Wmv07CB4W',
    '18JZhN6A4lZeSCbbH4GFQCwkUEz1Jn7zf',
    '1rVcTBYv5_9hRs7JOQbj1f2eSaola6_50',
    '1L4MTLdUzjRXBE7VKyC99dsQaFUUe8ATv',
    '14nHHlbLQyEs3KsuNRtJsWVdcEXi4dljW',
    '1gOWotbL4DGYMivzDyDYZT-dKy2XkLiyR',
    '1_dTENnuFoU3uu_qJDs-SpSTNIh63Ch6J',
    '1T32MByHVu58NW9lYKgEfiQ-jRvalm1rb',
    '1_U5EuKKo1kmPmjO-eWhsAQeAXXUGN9o2',
    '138Sc0ZLZLLFrP36_My0bhl0XdlcqD3l9',
    '1B0txVWKeMI5RWKGp7w582wHEd9NNpV5j',
    '179J5uZw6pSaWAAYMmTGkIG8H5ETyZ2ZN',
    '1HHKBbYHTI7gZtdIAK5X5-DpkEphCrD4R',
    '1DaMnw1vtDleVET58Qti_bl5Wh9NLMnfe',
    '1VmJAP3fZcQiAVpYx5s_rkEhZijK72gVT',
    '1TGlV1miKD8XN_mwvvBM1MBDTNpFspLyM',
    '12p7I7oVbXA6VzK94bNR1w3P8FPXrrjY1',
    '1pxZejWNEV9EQcHF50uCp5rnQCempRbUG',
    '1jzjT9_X-lAr0p9d8M1qJXc1e32ygLAfr',
    '10hOzSFTEbcPfhFuGC9LzBvKXw7c575Or',
    '158RkB81Sk-0HhweZYjihSpKCs9qXVYpb',
    '1huScIcquIVxrgRoiH30Th286RiQegiYs',
    '1Ap8xRyTmcO94doowwdIV9yZzqTYSBR_R',
    '1SnLMUAJEX3lY8fFbOGtKkLqORm-Nco4e',
    '1RTkiii-LjTmssDtUG_ffh_o2qpmb36IL',
    '1sV93V7kur-TJc1fRrl-z7gzsdd0nyWno',
    '11x5tMEn72hTWHzck8e9VtEf9uhQqX5ui',
    '10UPMnS72ssCNu4lj9FWUrnsQdOxZwfWL',
    '12HqPfW6xr62K66O8UpUkZtPtJpjueYV3',
    '1N2kJ25cFKHpU3LCuHC5jiPLX_6tmRz6A',
    '1jgA7o3js4qewoMcsKfLJfFJSSWGhoI9D'];
    }

    if(this.iLanguageOption==2){
        this.listOfSounds = ['1NXUcdVpxwbD1QvthpG8DqcIAeTWVNzRt',
        '1rcg19kFr-bptFK7xKDtrUC1CzrlgnI09',
        '1GjL6-TN1Hw7rgP3ekRcbiqcAeY-3qxwn',
        '1ApoRlQvQnIkCT80hBulKFQo9UqcylBzB',
        '1AhJ6aPql5Ec-Wykw95AwjnoHvrHyYZ1D',
        '1zcl3hImFCz9o0UhT41fYNdNAIaQJdMmV',
        '18i2BAUR6Iw6nYMIl54RrMM7nBq5Z4Uuw',
        '13YTLvtgiA9tnTVk9N1MUEsKegrNmL30q',
        '18CIKLceVtqN2TKv6BFLLaaPupJBYCfU4',
        '1ckOVJfyPCIawufYQSIXw9jWXeb-dQYuz',
        '13iDJCzEWNJYrGyk7oEFl8D-Y2YA7AfTH',
        '1iYwUfSKJljQqkM05CRe9jM9Igm-ZnUfI',
        '1ca3Uqz2mlyGGUVu1HBEn2TuYj5yt8-2z',
        '1XGWkBmAn-AsByNpgI8FoIKqQxgTM5F8e',
        '1OJ_-htihZ5WrwQhveiQeXMW0G1Ik1d3M',
        '1DrF0LGF-DwiRZcvlPpG4VigS97k-CstU',
        '1uHI5Evdf9KAdMS7itrNg9b6UKmOF7KWY',
        '1yVFriAYs6u09woddODSHeH25DiPRxj-c',
        '1LiINlc6YechjOeMwlUZjpjxf8Szf-CPK',
        '1evT8aD-RRq5gu6j4C3XTto76mgytRPr7',
        '1ov7xJSbKStTcBNdoKfaEXqGB815WxiIk',
        '1C4QUZsrTaZoPKWxGx_64r2H9Oux4KFb2',
        '16hKDwRr6iUl6tw7MY3UjJv2cgI7QEk5R',
        '16HXH2yYrBJJg6mRFF7TbGy1O3GfaB0o8',
        '1u6a2mpyKhxoR2-hnn3vZs9uKjDjRQB2v',
        '1BK48fvJdST-eXEW34hMSG9RQUfp3BzRZ',
        '1Z603-KGbvmOLQblToIMZhUaO8xKUJqvI',
        '1GCuluJL46pLmbFibpPhTplwGD7OxrT9T',
        '1gR2lFSMoZAyTVhQVHWdTPsSBkTVQD9tB',
        '15k5ihsTkvTDoO33YrJiqEJKfSqbfmaMU',
        '104nsjbB8yDn30HHVt-wufrbhLNdXTEI-',
        '1aOkSA9GA0R4cFNhPnBrzooTzTTKjdbaT',
        '1u49qw__nVOqtmcf4VWaHq6HUlDq-PF4E',
        '1uR7HXFhbtHp5b6ogdzIm9Pr4HUoVMDv2',
        '1jY6tyI_S1NkINm67-mwcPQYCG0OJd91A',
        '1NLVDKRD-L635728Z9Z7-6qa--kno-Kx0',
        '1IE7S_nK0DInlSxXNkVoh-0es4NGqzW-q',
        '1mcOF74fCiztj35sa-fARpzVj16w6CSyP',
        '1zcddpvAgu1a4G41xHuiLuW5KZFxrvriv',
        '1cLnVXTlTnWz-oE0lohzcoPSK-kdVJWCw',
        '1SE0c3k-4g4Tvq6V4jenmngUQJ2gMrhxn',
        '1Ya5X7Q3y6XDZoHhoAgbxvaqKp1eWwcmm',
        '1ifcAIi4sKNp7ul_LohBotXpsOc3mBI_6',
        '1O431t3-8iBH3NsrYFtafbvIQR3gq8d2E',
        '1PC49KhhslbVOBl2YmNWcsmm3-y3puP5k',
        '1rEb1669y-RwHz4B0-bgf3Nbh7SgYGX2w',
        '1fAY7hIfD7VB7ZyDJxnpbnVx6DLwDlQV6',
        '1mj4ies4TD96h1we62_Kf4rDJUuIBNp8N',
        '1j4EJgBMDzDmdyCRFYpWXQXPtcvb6Wlva',
        '1RSFfIK8DKnqrDy_BK95k8S03NqQoAiyN',
        '1MAv5MjDdQEUJuZkIJEjD29nlbteTZ6Ig',
        '1wPMEJo31e1PIeY_y4XE_4HSG-1GEFg9K',
        '1Z2r1DW7BnMTfdYFVYwdm1Jfgv4s1M_V4',
        '1HwEJGy7M71h2bmVhtrOtybc-lkGc6XGt',
        '1d_MPcUyrZqhxuyJOIs9OAwhENIND4bav',
        '1wI0zdwMLuUGvRkEvhW3zxuKWT66iCO4I',
        '1Rsy-9K5smCIWTPrm5deLSCF6ang4rLpS',
        '1w2aAzQILOp6QIsxB4CqLZdJOXfCuwieG',
        '1ndbyyKTXmMwWbdY8LU-TNizMg9gj387r',
        '18ItNq5qtNgkPjBfsLc_REqzb2Bp_dMHP',
        '1kBU9SPDT3Gx1amDpc-EWFZVP7k-Fu0xE',
        '1PBj_LZIYCJ7O9KOj7M9YFdVTFZ2cLrK7',
        '1OZAA9lB8RrmxxmgaOj7bxbH_r50mqqCU',
        '18BJHVPTw2lXgzZpWmQedHIuHscgBp_2S',
        '1rRbkqXQPgwGAfmPhidwvJ1VnvGc2rriL',
        '14thtPdXfoeYZKH5SWS1hfBXpwuRIXuXS',
        '1GZbb88kd3nminCq8iZ_xSDsl6h6IDr3n',
        '1fxNS_4JPtm8teSjHZYWvD9dPA8A7cYnD',
        '16pDC3c7KxF7E7Obb5wlC6bFxJsjAHn64',
        '177IVP_xzsb2WRXORN5r9GMLUsRa9zeR5',
        '1PKdaI40UYRBtixnNpLtfuAWKNkt-8DC-',
        '13V1iyyMV4owEAh4FM6lpEpJxN-4DCg4v',
        '1xKA-qwagsYcuZjD_L3DvOOc5dWy_QPZW',
        '1gTm1bQR6Ac9HGlbPauBz9ih0KMdrESZb',
        '18175aTUhO7XISIxW5Y8pZ4ErlCpoh_W3',
        '1d1bK33gvaCiy9JOAN3aBWB3u0XJIffOk',
        '1Ci8Iz-pVn_jwOfJxLFrWS_b4usf8ivDS',
        '1AItg5CgfKxef58c4PUJRq65vR-coWsIV',
        '1mM6IJVzS-88Fa2Cfccyt8l_ECvT3v5Ih',
        '1hMd0PhVqJCQbHGS0BVk_HcdtaWiTROVj',
        '1VnarKtn24tE8D2buIbCoqSBeU0AduqmK',
        '1N7k5EjihlX5js37-oMXdSZJ6N31Dhr0D',
        '13B2YMmRQUX9a5slQraswu3mFPADJNn8q',
        '1GZA_T2Jp1WFWOfjJBjNck9jqNcQa8SPU',
        '1Ro_lm1Qq5z03xg7usl70y2YtCLyra5xz',
        '1E8W3Z8jTVVymX2fmgh1-vvsiuG-SJ_jQ',
        '1eqWXIbA_s_5RPXT1U0Plb_QD9FZt5m0q',
        '1A8dj3uIh6-uMitKZ_kOm9TEzMB0m8L4h',
        '1u5A1Emm2i30XmxUpba_q12g1A-zwLELm',
        '1QLz4acAnsXfWkJKkkD6Fhqky-JBAk3QK',
        '1FPNqxA-SZkRlHsQMuFbv6Vg64HPnZUmK',
        '1VpECdChNPeD6aqpAhdSLs1V99y8Z4zmV',
        '1O_p3b0TSta2pw4VK5w3gR5eLpykyYKAg',
        '1f27u3LPyJtwvCe7TYvb_BYMIAtvcYo9O',
        '1RZCDo_fmRRNbY8y0ltscI0DNIhODzwed',
        '13HBV9iBK6sK_N8vWXYqtdJSnPWpofJHD',
        '1ByWy9ohfIPxihx-80fx0E-crSKR5I_za',
        '1xUlVTjosDz0EWF44MDKaigx33Xd_aC3r',
        '1UsPyGNA4wt-3YNvE0hwz-UzT-odiOFbh',
        '1c4SfTttjF5hl5bf0ZFPTrE4IvvJA_sW-'];
      }
    

  }

  
  startGame(){
    let obj1: any = document.getElementById('start');

    this.nbrsForGame = this.getRandomNumbers(this.maxQstns, this.maxNbrValue);
    this.curNbr = 0;


    this.soundFont();
    this.gamefinish = false;  
    
    this.timeLeft = 0;
    this.startTimer();

  }
  finishGame(){

    this.wrongAnswers = 0;
    this.rightAnswers = 0;
    this.curNbr = -1;

    this.pauseTimer();

  }

  listOfSounds: string[];

  maxQstns = 4;
  maxNbrValue = 19;
  wrongAnswers: number = 0;
  rightAnswers: number = 0;

  curNbr: number = -1;
  nbrsForGame:number[]=[];
  nbrsForDisplay:number[]=[];
  gamefinish: boolean = false;

  userQuestionOptions:number[]=[5, 10, 20];

  iLanguageOption:number = 1;



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
        if(this.curNbr == this.maxQstns)
        {
          this.pauseTimer();
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

  getRandomNumbers(maxQsts:number, maxNbr: number): number[]{
    let returnNbers: number[] = [];
    let selectedNbrs = new Array<boolean>(maxNbr+1); 
    for (let index = 0; index <= maxQsts; index++) {
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

  counter(i: number) {
    return new Array(i);
  }

  createNbrsForDisplay(){
    this.nbrsForDisplay = [];
    for(let l = 1; l <= this.maxNbrValue+1; l++){
      this.nbrsForDisplay.push(l);                   
    } 
  }

  applyUserOptions(){
    let obj1: any = document.getElementById('editMaxValue');
    if(obj1) this.maxNbrValue = obj1.value-1;
    
    let obj2: any = document.getElementById('editNbrOfqstns');
    if(obj2) this.maxQstns = obj2.value-1;

    let tryOptions = [5, 10, 20, 30, 50, 80, 100];

    this.userQuestionOptions = [];
    for(let l = 0; l < tryOptions.length; l++){
      if(tryOptions[l] <= this.maxNbrValue+1) 
      this.userQuestionOptions.push(tryOptions[l]);                   
    } 

    this.createNbrsForDisplay();
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

}

