import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }
  sClassesStudents : any[] = [
    {
      id: 1,
      title: 'Telugu Language Classes Taught Online by Teachers',
      description: 'Subject to teacher availability, we provide students with the opportunity to join in our weekend Telugu language classes conducted online.',
      src1: '../../../assets/images/virtualclass.png',
      src2: '../../../assets/images/Bpic-2.png',
    },
    {
      id: 2,
      title: 'Telugu Language Classes Self Learning',
      description: 'Students can access our online lessons, worksheets, and interactive games for self-guided learning. Upon completing the lessons at one level, students gain access to the next level of course materials.',
      src1: '../../../assets/images/selfstudy.png',
      src2: '../../../assets/images/Bpic-2.png',
    },
    {
      id: 3,
      title: 'IGCSE Sanskrit Classes Taught Online by Instructors',
      description: 'Subject to teacher availability, we provide students with the opportunity to join in our weekend IGCSE Sanskrit Exam language classes conducted online. Final exams wil be organised by Cambridge University',
      src1: '../../../assets/images/virtualclass.png',
      src2: '../../../assets/images/Bpic-san.png',
    },
    {
      id: 4,
      title: 'Basic speaking Sanskrit Classes Taught Online by Instructors',
      description: 'Subject to teacher availability, we provide students with the opportunity to join in our weekend Sanskrit language classes conducted online.',
      src1: '../../../assets/images/virtualclass.png',
      src2: '../../../assets/images/Bpic-san.png',
    },
    {
      id: 5,
      title: 'Sanskrit Language Classes Self Learning',
      description: 'Students can access our online lessons, worksheets, and interactive games for self-guided learning. Upon completing the lessons at one level, students gain access to the next level of course materials.',
      src1: '../../../assets/images/selfstudy.png',
      src2: '../../../assets/images/Bpic-2.png',
    },
    {
      id: 6,
      title: 'Sanskrit Bala Ramayanam classes',
      description: 'Balaramayanam slokams and meaning will be taught to students. Students will be learning Sanskrit language along with Valmiki Bala Ramayanam',
      src1: '../../../assets/images/balaramayanam.png',
      src2: '',
    },
    {
      id: 7,
      title: 'Balamukundam - Telugu Patalu',
      description: 'In Balamukundam Telugu patalu, students will learn small songs in Telugu like devotional songs, patriotics songs, Thyagaraja, Annamayya, Ramadasa kritis,  and Anjaneya Dandakam etc',
      src1: '../../../assets/images/singing.png',
      src2: '',
    },
    {
      id: 8,
      title: 'Balamukundam - Vedic Lessons',
      description: 'In Balamukundam Vedic Lessons, students will learn different stotrams and suktams.',
      src1: '../../../assets/images/vedic.png',
      src2: '',
    },
    {
      id: 9,
      title: 'Sunaadam - Carnatic Music Lessons',
      description: 'Pratice carnatic music lessons vocal or instrumental along with our Sunaadam App. Our app helps for students of all levels to maitain shriti, laya and progress with the manodharma sangeetam. Note: There will be a nominal fees £2 per month to cover the expenses of app development and hosting.',
      src1: '../../../assets/images/sunaadam.png',
      src2: '',
    },
    {
      id: 10,
      title: 'Tanjore Painting Workshops',
      description: 'We organise workshops for childrens and adults, to learn techniques of Tanjore Paintings. Interested can enrole for the workshops and we intimate when the sessions begin. Note: There will be a fees to cover the expenses of materials.',
      src1: '../../../assets/images/tanjore.png',
      src2: '',
    },


  ];
  sClassesTeachers : any[] = [
    {
      id: 1,
      title: 'Teachers for Telugu Language Classes',
    description: 'Looking for Telugu Teacher Volunteers to teach Telugu at Balamukundam Telugu school. Please join in our Balamukundam Team. విద్యాదానము అన్ని దానములలో ఉత్తమమైనది. మన చిన్నారులకు తెలుగుభాషను నేర్పించడానికి ముందుకురండి. ప్రతి వారమునకు ఒక రెండు గంటలు మీరు online అంతర్జాలం ద్వారా zoom session లో సరదాగా ఒక 10మంది పిల్లలతో మాట్లాడుతూ వారికి తెలుగు నేర్పవచ్చును.',
    src: '../../../assets/images/Bpic-2.png',
    enrolled: false},

    {
      id: 2,
      title: 'Teaching assistants for Telugu Language Classes',
    description: 'Looking for Telugu class teaching assistants to help with our students homeworks and classworks',
    src: '../../../assets/images/Bpic-2.png',
    enrolled: false},

    {
      id: 3,
      title: 'Teachers for Sanskrit Language & vedic Classes',
    description: 'At Balamukundam, we teach sanskrit prayers like slokams, stotrams, Balaramayanam etc for students. Also we offer basic Sanskrit speaking classes and provide comprehensive preparation for the Cambridge University Sanskrit IGCSE Exams. We invite you to be a part of our esteemed Balamukundam Sanskrit Teachers Team. Join us for promote our Devabhasha Sanskrit.',
    src: '../../../assets/images/Bpic-san.png',
    enrolled: false},
    
  ];
}
