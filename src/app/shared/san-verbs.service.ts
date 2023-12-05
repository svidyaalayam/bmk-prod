import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanVerbsService {

  constructor() { }

  public verbTitleSan: string = '';
  public verbTitleEng: string = '';

  public aVerbSan: any = [];
  public aVerbEng: any = [];

  private verbData: any[] = [
    {
      meaning: 'become', ePast: 'became', verb: 'भू', suff:'s',
      present: [['भवति', 'भवत:', 'भवन्ति'], ['भवसि', 'भवथ:', 'भवथ'], ['भवामि', 'भवाव:', 'भवाम:']],
      future: [['भविष्यति', 'भविष्यतः', 'भविष्यन्ति'], ['भविष्यसि', 'भविष्यथः', 'भविष्यथ'],['भविष्यामि', 'भविष्यावः', 'भविष्यामः']],
      past:[['अभवत्', 'अभवताम्', 'अभवन्'], ['अभवः', 'अभवतम्', 'अभवत'], ['अभवम्', 'अभवाव', 'अभवाम']],
      examplesMale:[['angry','कुपितः'], ['king', 'नृपः'], ['sage', 'मुनिः'], ['sad', 'दुःखितः'], ['happy', 'प्रसन्नः'], ['rich', 'धनिकः'], ['clever', 'चतुरः'], ['teacher', 'आचार्यः']],
      examplesFemale:[['angry','कुपिता'], ['queen', 'राज्ञी'], ['sad', 'दुःखिता'], ['happy', 'प्रसन्ना'], ['rich', 'धनिका'], ['clever', 'चतुरा'], ['teacher', 'आचार्या']],
      examplesNeutral:[['hot','उष्णं'], ['cold', 'शीतं'], ['right', 'सम्यक्']],
    },
    {
      meaning: 'go', ePast: 'went', verb: 'गम्', suff:'es',
      present: [['गच्छति', 'गच्छतः', 'गच्छन्ति'], ['गच्छसि', 'गच्छथः', 'गच्छथ'], ['गच्छामि', 'गच्छावः', 'गच्छामः']],
      future: [['गमिष्यति', 'गमिष्यतः', 'गमिष्यन्ति'], ['गमिष्यसि', 'गमिष्यथः', 'गमिष्यथ'],['गमिष्यामि', 'गमिष्यावः', 'गमिष्यामः']],
      past:[['अगच्छत्', 'अगच्छताम्', 'अगच्छन्'], ['अगच्छः', 'अगच्छतम्', 'अगच्छत'], ['अगच्छम्', 'अगच्छाव', 'अगच्छाम']],
      examplesMale:[['angry','कुपितः'], ['king', 'नृपः'], ['sage', 'मुनिः'], ['sad', 'दुःखितः'], ['happy', 'प्रसन्नः'], ['rich', 'धनिकः'], ['clever', 'चतुरः'], ['teacher', 'आचार्यः']],
      examplesFemale:[['angry','कुपिता'], ['queen', 'राज्ञी'], ['sad', 'दुःखिता'], ['happy', 'प्रसन्ना'], ['rich', 'धनिका'], ['clever', 'चतुरा'], ['teacher', 'आचार्या']],
      examplesNeutral:[['hot','उष्णं'], ['cold', 'शीतं'], ['right', 'सम्यक्']],
    },
    {
      meaning: 'say', ePast: 'said', verb: 'वद्', suff:'s',
      present: [['वदति', 'वदतः', 'वदन्ति'], ['वदसि', 'वदथः', 'वदथ'], ['वदामि', 'वदावः', 'वदामः']],
      future: [['वदिष्यति', 'वदिष्यतः', 'वदिष्यन्ति'], ['वदिष्यसि', 'वदिष्यथः', 'वदिष्यथ'], ['वदिष्यामि', 'वदिष्यावः', 'वदिष्यामः']],
      past:[['अवदत्', 'अवदताम्', 'अवदन्'], ['अवदः', 'अवदतम्', 'अवदत'], ['अवदम्', 'अवदाव', 'अवदाम']],
      examplesMale:[],
      examplesFemale:[],
      examplesNeutral:[],
    },
    {
      meaning: 'throw', ePast: 'threw', verb: 'क्षिप्', suff:'s',
      present: [['क्षिपति', 'क्षिपतः', 'क्षिपन्ति'], ['क्षिपसि', 'क्षिपथः', 'क्षिपथ'], ['क्षिपामि', 'क्षिपावः', 'क्षिपामः']],
      future: [['क्षेप्स्यति', 'क्षेप्स्यतः', 'क्षेप्स्यन्ति'], ['क्षेप्स्यसि', 'क्षेप्स्यथः', 'क्षेप्स्यथ'], ['क्षेप्स्यामि', 'क्षेप्स्यावः', 'क्षेप्स्यामः']],
      past:[['अक्षिपत्', 'अक्षिपताम्', 'अक्षिपन्'], ['अक्षिपः', 'अक्षिपतम्', 'अक्षिपत'], ['अक्षिपम्', 'अक्षिपाव', 'अक्षिपाम']],
      examplesMale:[],
      examplesFemale:[],
      examplesNeutral:[],
    }
  ];

  public getDataForVerb(sVerb: string): any {
    return this.verbData.find(vb => vb.verb === sVerb);
  }

  public getMeaningForVerb(sVerb: string): any {
     let selectedVerbData = this.verbData.find(vb => vb.verb === sVerb);
     return selectedVerbData.meaning;
  }
  public getAllVerbs(): any {
    let allerbs: any = [];
    this.verbData.forEach(vb => {
      allerbs.push(vb.verb);
    })
    return allerbs;
  }

  public getAllMeanings(): any {
    let allerbs: any = [];
    this.verbData.forEach(vb => {
      allerbs.push(vb.meaning);
    })
    return allerbs;
  }

}
