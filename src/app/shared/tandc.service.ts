import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TandcService {

  constructor() { }

  sTermsAndConditions : any[] = [
    {title: 'Eligibility and Prerequisites',
    description: 'While there are no specific prerequisites, it is important for parents and students to have an interest in the Telugu language and appreciate the teachers efforts. Regular commitment, dedicating at least 30 minutes per week to homework, is necessary. Additionally, we encourage parents to support and motivate their children to speak Telugu at home.',
    accepted: false},
  
    {title: 'Minimum age requirement',
    description: 'While we recommend a minimum age of 5 years for joining our Telugu classes, we have accommodated a few younger students below this age. In such cases, we kindly request parental support in helping these young children connect to the classes, complete their homework, and ensure their comfort in settling into the class environment. Your assistance in this matter is greatly appreciated.',
    accepted: false},
  
    {title: 'Admission Process',
    description: 'Admissions are subject to teacher availability, and typically commence in September. If all spaces are filled, students are placed on a waiting list. Admission offers will be made as vacancies become available.',
    accepted: false},
  
    {title: 'Fees and Payment',
    description: 'Classes, books, materials, internal assessment exams, and apps are offered to students at no charge. However, penalty fees apply for unauthorized absences and consistent failure to submit homework assignments.',
    accepted: false},
  
    {title: 'Attendance and Punctuality',
    description: 'Students must maintain a minimum attendance of 90% to be eligible for promotion to the next class. We acknowledge and reward perfect attendance, with special recognition for students attending 100% of the term. Any absence without the teacher’s permission or a valid reason will incur a penalty fee of £5 per unauthorized absence.',
    accepted: false},
  
    {title: 'Code of Conduct',
    description: 'Students are expected to be punctual for their classes, joining the Zoom meeting at least 5 minutes before the scheduled time to participate in the opening prayer. It is essential for students to pay full attention during the classes. Parents are kindly requested to ensure a disturbance-free environment for their children during class hours. Activities such as using mobile phones, eating, or grooming are not permitted while the class is in session. Your cooperation in maintaining a focused and respectful learning atmosphere is greatly appreciated.',
    accepted: false},
  
    {title: 'How to attend Classes',
    description: 'Please ensure you have downloaded Zoom onto your devices https://zoom.us/download.  When atending the class, it is recommended to use widescreen devices such as laptops or desktop computers. Avoid using smaller screen devices like mobile phones or tablets, as the screen content may not be fully visible to students. Additionally, students need to ensure their cameras are switched on during the class. Using good-quality microphones and earphones is also encouraged to enhance the audio experience for everyone involved.',
    accepted: false},
  
    {title: 'Homework',
    description: 'Timely submission of homework is mandatory. We track students progress and monitor the consistency of homework submissions. Both students and parents will receive notifications if homework assignments are not submitted regularly. Your cooperation in ensuring prompt submission is highly valued.',
    accepted: false},
  
    {title: 'Parental Involvement',
    description: 'We kindly ask parents to attend the parent-teacher meetings. We also encourage parents to converse with their children in Telugu to enhance their vocabulary and foster an interest in learning the language. Please motivate your children to actively participate in all Balamukundam events. Your support in these endeavors is greatly appreciated.',
    accepted: false},
  
    {title: 'Privacy and Data Protection',
    description: 'We assure you that any personal information shared by students and parents will be collected, stored, and utilized solely for communication purposes and to maitain good relationships between teachers and students. If you have any concerns regarding data protection laws, please do not hesitate to inform us. Your privacy and security are of utmost importance to us.',
    accepted: false},
  
    {title: 'Termination of Admission',
    description: 'We utilize an automated system to track attendance and monitor homework completion. Accounts of students who are absent for more than three consecutive classes without authorization will be deactivated automatically. If students fail to request reactivation, their accounts will be terminated. Please note that a penalty fee of £10 will apply for reactivating deactivated accounts.',
    accepted: false},
  
    {title: 'Changes to Terms and Conditions',
    description: 'Balamukundam teachers and administrators reserve the right to update the Terms and Conditions as needed. Parents will be informed of any changes promptly.',
    accepted: false},   
  
    ];

    sTermsAndConditionsTeachers : any[] = [
      {title: 'Commitment',
      description: 'Kindly be aware that at Balamukundam, our primary objective is to preserve our language and cultural heritage by passing it down to the next generation. Given that our children in the UK often perceive Telugu as a foreign language, its essential for our teachers to be consistent in attending classes. We kindly request our teachers to maintain regularity, communicate with co-teachers, and ensure that students dont miss any sessions. This approach fosters interest among the children and encourages their active participation in Telugu classes.',
      accepted: false},

      {title: 'Our Prayer',
      description: '"ఓం సహనా వవతు! సహనౌ భునక్తు! సహవీర్యం కరవావహై! తేజస్వినావధీతమస్తు! మావిద్విషావహై! ఓం శాంతి శాంతి శాంతిః" అని గురు-శిష్యుల సంబంధాన్ని, మన ఋషులు చెప్పిన విధంగా, ఆ భగవంతుడు పిల్లలకు తెలుగు బోధించడానికి అవసరమైన శక్తి సామర్ద్యములు, జ్ఞానము మనకు అందిస్తాడని, పిల్లలకు బోధిస్తూ వారితో పాటు మనము కూడా నేర్చుకుంటూ, మన మధ్యలో ఎటువంటి విభేదాలు తలయెత్తకుండు గాక అని యీ శాంతి మంత్రము ద్వారా కోరుకుందాము.',
      accepted: false},
    ]
}
