import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanSabdamsService {

  constructor() { }

  public sabdamTitleSan: string = '';
  public sabdamTitleEng: string = '';

  public aSabdamsSan: any = [];
  public aSabdamsEng: any = [];

  private sabdamData: any = [
    {
      endType: 'a', gender: 0, titleEng: 'akārāntaḥ puṃlliṅgaḥ rāma śabdaḥ', titleSan: 'अकारान्तः पुंल्लिङ्गः राम शब्दः',
      SabdamSan: ['रामः','रामौ','रामाः','हे राम !', 'हे रामौ !', 'हे रामाः !', 'रामम्', 'रामौ', 'रामान्', 'रामेण', 'रामाभ्याम्', 'रामैः', 'रामाय', 'रामाभ्याम्', 'रामेभ्यः', 'रामात्', 'रामाभ्याम्', 'रामेभ्यः', 'रामस्य', 'रामयोः', 'रामाणाम्', 'रामे', 'रामयोः', 'रामेषु'],
      SabdamEng: ['rāmaḥ','rāmau','rāmāḥ','he rāma !', 'he rāmau !', 'he rāmāḥ !', 'rāmam', 'rāmau', 'rāmān', 'rāmeṇa', 'rāmābhyām', 'rāmaiḥ', 'rāmāya', 'rāmābhyām', 'rāmebhyaḥ', 'rāmāt', 'rāmābhyām', 'rāmebhyaḥ', 'rāmasya', 'rāmayoḥ', 'rāmāṇām', 'rāme', 'rāmayoḥ', 'rāmeṣu']      
    },
    {
      endType: 'i', gender: 0, titleEng: 'ikārāntaḥ puṃlliṅgaḥ hari śabdaḥ', titleSan: 'इकारान्तः पुंल्लिङ्गः हरि शब्दः',
      SabdamSan: ['हरिः', 'हरी', 'हरयः', 'हे हरे !', 'हे हरी !', 'हे हरयः !', 'हरिम्', 'हरी', 'हरीन्', 'हरिणा', 'हरिभ्याम्', 'हरिभिः', 'हरये', 'हरिभ्याम्', 'हरिभ्यः', 'हरेः', 'हरिभ्याम्', 'हरिभ्यः', 'हरेः', 'हर्योः', 'हरीणाम्', 'हरौ', 'हर्योः', 'हरिषु'],
      SabdamEng: ['hariḥ', 'harī', 'harayaḥ', 'he hare !', 'he harī !', 'he harayaḥ !', 'harim', 'harī', 'harīn', 'hariṇā', 'haribhyām', 'haribhiḥ', 'haraye', 'haribhyām', 'haribhyaḥ', 'hareḥ', 'haribhyām', 'haribhyaḥ', 'hareḥ', 'haryoḥ', 'harīṇām', 'harau', 'haryoḥ', 'hariṣu']      
    },
    {
      endType: 'u', gender: 0, titleEng: 'ukārāntaḥ puṃlliṅgaḥ guru śabdaḥ', titleSan: 'उकारान्तः पुंल्लिङ्गः गुरु शब्दः',
      SabdamSan: ['गुरु:', 'गुरू', 'गुरव:', 'हे गुरो !', 'हे गुरू !', 'हे गुरव: !', 'गुरुम्', 'गुरू', 'गुरून्', 'गुरुणा', 'गुरुभ्याम्', 'गुरुभि:', 'गुरुवे', 'गुरुभ्याम्', 'गुरुभ्य:', 'गुरो:', 'गुरुभ्याम्', 'गुरुभ्य:', 'गुरो:', 'गुर्वो:', 'गुरूणाम्', 'गुरौ', 'गुर्वो:', 'गुरुषु'],
      SabdamEng: ['guru:', 'gurū', 'gurava:', 'he guro !', 'he gurū !', 'he gurava: !', 'gurum', 'gurū', 'gurūn', 'guruṇā', 'gurubhyām', 'gurubhi:', 'guruve', 'gurubhyām', 'gurubhya:', 'guro:', 'gurubhyām', 'gurubhya:', 'guro:', 'gurvo:', 'gurūṇām', 'gurau', 'gurvo:', 'guruṣu']      
    },
    {
      endType: 'ṛ', gender: 0, titleEng: 'ṛkārāntaḥ puṃlliṅgaḥ dhātṛ śabdaḥ', titleSan: 'ऋकारान्तः पुंल्लिङ्गः धातृ शब्दः',
      SabdamSan: ['धाता', 'धातारौ', 'धातारः', 'हे धातः !', 'हे धातारौ !', 'हे धातारः !', 'धातारम्', 'धातारौ', 'धातॄन्', 'धात्रा', 'धातृभ्याम्', 'धातृभिः', 'धात्रे', 'धातृभ्याम्', 'धातृभ्यः', 'धातुः', 'धातृभ्याम्', 'धातृभ्यः', 'धातुः', 'धात्रोः', 'धातॄणाम्', 'धातरि', 'धात्रोः', 'धातृषु'],
      SabdamEng: ['dhātā', 'dhātārau', 'dhātāraḥ', 'he dhātaḥ !', 'he dhātārau !', 'he dhātāraḥ !', 'dhātāram', 'dhātārau', 'dhātṝn', 'dhātrā', 'dhātṛbhyām', 'dhātṛbhiḥ', 'dhātre', 'dhātṛbhyām', 'dhātṛbhyaḥ', 'dhātuḥ', 'dhātṛbhyām', 'dhātṛbhyaḥ', 'dhātuḥ', 'dhātroḥ', 'dhātṝṇām', 'dhātari', 'dhātroḥ', 'dhātṛṣu']      
    },
    {
      endType: 'n', gender: 0, titleEng: 'ṛkārāntaḥ puṃlliṅgaḥ rājan śabdaḥ', titleSan: 'नकारान्तः पुंल्लिङ्गः राजन् शब्दः',
      SabdamSan: ['राजा', 'राजानौ', 'राजानः', 'हे राजन्', 'हे राजानौ', 'हे राजानः', 'राजानम्', 'राजानौ', 'राज्ञः', 'राज्ञा', 'राजभ्याम्', 'राजभिः', 'राज्ञे', 'राजभ्याम्', 'राजभ्यः', 'राज्ञः', 'राजभ्याम्', 'राजभ्यः', 'राज्ञः', 'राज्ञोः', 'राज्ञाम्', 'राज्ञि-राजनि', 'राज्ञोः', 'राजसु'],
      SabdamEng: ['rājā', 'rājānau', 'rājānaḥ', 'he-rājan', 'he-rājānau', 'he-rājānaḥ', 'rājānam', 'rājānau', 'rājñaḥ', 'rājñā', 'rājabhyām', 'rājabhiḥ', 'rājñe', 'rājabhyām', 'rājabhyaḥ', 'rājñaḥ', 'rājabhyām', 'rājabhyaḥ', 'rājñaḥ', 'rājñoḥ', 'rājñām', 'rājñi-rājani', 'rājñoḥ', 'rājasu']      
    },
    {
      endType: 'aa', gender: 1, titleEng: 'ākārāntaḥ strīliṅgaḥ sītā śabdaḥ', titleSan: 'आकारान्तः स्त्रीलिङ्गः सीता शब्दः',
      SabdamSan: ['सीता', 'सीते', 'सीताः', 'हे सीते !', 'हे सीते !', 'हे सीताः !', 'सीताम्‌ ', 'सीते', 'सीताः', 'सीतया', 'सीताभ्याम्', 'सीताभिः', 'सीतायै', 'सीताभ्याम्', 'सीताभ्यः', 'सीतायाः', 'सीताभ्याम्', 'सीताभ्यः', 'सीतायाः', 'सीतयोः', 'सीतानाम्‌', 'सीतायाम्‌', 'सीतयोः', 'सीतासु'],
      SabdamEng: ['sītā', 'sīte', 'sītāḥ', 'he sīte !', 'he sīte !', 'he sītāḥ !', 'sītām', 'sīte', 'sītāḥ', 'sītayā', 'sītābhyām', 'sītābhiḥ', 'sītāyai', 'sītābhyām', 'sītābhyaḥ', 'sītāyāḥ', 'sītābhyām', 'sītābhyaḥ', 'sītāyāḥ', 'sītayoḥ', 'sītānām', 'sītāyām', 'sītayoḥ', 'sītāsu']     
    },
    {
      endType: 'ii', gender: 1, titleEng: 'īkārāntaḥ strīliṅgaḥ nadī śabdaḥ', titleSan: 'ईकारान्तः स्त्रीलिङ्गः नदी शब्दः',
      SabdamSan: ['नदी', 'नद्यौ', 'नद्यः', 'हे नदि !', 'हे नद्यौ !', 'हे नद्यः !', 'नदीम्‌ ', 'नद्यौ', 'नदीः', 'नद्या', 'नदीभ्याम्', 'नदीभिः', 'नद्यै', 'नदीभ्याम्', 'नदीभ्यः', 'नद्याः', 'नदीभ्याम्', 'नदीभ्यः', 'नद्याः', 'नद्योः', 'नदीनाम्‌', 'नद्याम्‌', 'नद्योः', 'नदीषु'],
      SabdamEng: ['nadī', 'nadyau', 'nadyaḥ', 'he nadi !', 'he nadyau !', 'he nadyaḥ !', 'nadīm', 'nadyau', 'nadīḥ', 'nadyā', 'nadībhyām', 'nadībhiḥ', 'nadyai', 'nadībhyām', 'nadībhyaḥ', 'nadyāḥ', 'nadībhyām', 'nadībhyaḥ', 'nadyāḥ', 'nadyoḥ', 'nadīnām', 'nadyām', 'nadyoḥ', 'nadīṣu']     
    },
    {
      endType: 'a', gender: 2, titleEng: 'akārāntaḥ napuṃsikaliṅgaḥ mitra śabdaḥ', titleSan: 'अकारान्तः नपुंसिकलिङ्गः मित्र शब्दः',
      SabdamSan: ['मित्रम्‌', 'मित्रे', 'मित्राणि', 'हे मित्र !', 'हे मित्रे !', 'हे मित्राणि !', 'मित्रम्', 'मित्रे', 'मित्राणि', 'मित्रेण​', 'मित्राभ्याम्', 'मित्रैः', 'मित्राय​', 'मित्राभ्याम्', 'मित्रेभ्यः', 'मित्रात्', 'मित्राभ्याम्', 'मित्रेभ्यः', 'मित्रस्य​', 'मित्रयोः', 'मित्राणाम्', 'मित्रे', 'मित्रयोः', 'मित्रेषु'],
      SabdamEng: ['mitram‌', 'mitre', 'mitrāṇi', 'he mitra !', 'he mitre !', 'he mitrāṇi !', 'mitram', 'mitre', 'mitrāṇi', 'mitreṇ', 'mitrābhyām', 'mitraiḥ', 'mitrāy', 'mitrābhyām', 'mitrebhyaḥ', 'mitrāt', 'mitrābhyām', 'mitrebhyaḥ', 'mitrasy', 'mitrayoḥ', 'mitrāṇām', 'mitre', 'mitrayoḥ', 'mitreṣu']      
    }
  ];

  public getEndTypes(iGend: number): any{

    let tempData: any = this.sabdamData.filter((p: any) => p.gender == iGend);
    let returnArry: any =[];
    for (let index = 0; index < tempData.length; index++) {
      const element = tempData[index];
      switch (element.endType) {
        case 'a':
          returnArry.push(['a', 'Ending with: a (अकारान्तः)']);
          break;
        case 'aa':
          returnArry.push(['aa', 'Ending with: ā (आकारान्तः)']);
          break;
        case 'i':
          returnArry.push(['i', 'Ending with: i (इकारान्तः)']);
          break;
          case 'ii':
          returnArry.push(['ii', 'Ending with: ī (ईकारान्तः)']);
          break;
        case 'u':
          returnArry.push(['u', 'Ending with: u (उकारान्तः)']);
          break;
        case 'ṛ':
          returnArry.push(['ṛ', 'Ending with: ṛ (ऋकारान्तः)']);
          break;
        case 'n':
          returnArry.push(['n', 'Ending with: n (नकारान्तः)']);
          break;
        default:
          // body statements
          // code block
          break;
      }       
    }

    return returnArry;
  }

  public setSabdam(iGend: number, sEnd: string){

    let tempData: any = this.sabdamData.filter((p: any) => p.endType== sEnd && p.gender == iGend);

    if(tempData.length > 0){
      this.aSabdamsSan =  tempData[0].SabdamSan;
      this.aSabdamsEng =  tempData[0].SabdamEng;
      this.sabdamTitleSan = tempData[0].titleSan;
      this.sabdamTitleEng = tempData[0].titleEng;
    }
    
  }

}
