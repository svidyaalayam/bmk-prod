import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanEpicCivilService {

  constructor() { }

  private epicData: any[] = [
    {
      lesson: 1,
      words: [['Brahman (ब्रह्मन्‌)', 'The ultimate reality underlying all phenomena'], 
        ['Ātman(आत्मन्‌)', 'The self. The one Self in all'],
        ['Māyā(माया)','The illusion that makes the universe seem to be here'],
        ['Avidyā(अविद्या)','Ignorance. The belief that the māyā is the true reality'],
        ['Jñāna(ज्ञान)','True knowledge. The knowledge that brahman is reality'],
        ['Karman(कर्मन्‌)','The principle that actions create an effect in the future'],
        ['Saṁskāra(संस्कार)','Traces or deposits from past actions that create conditions for rebirth'],
        ['Saṁsāra(संसार)','Transmigration. The process of continual rebirth'],
        ['Mōkṣa(मोक्ष)','Liberation from bondage in saṁsāra(संसार)'],
        ['Avyakta(अव्यक्त)','Unmanifest nature'],
        ['Puruṣa(पुरुष)','Spirit, whose reflection is prakr̥ti'],
        ['Prakr̥ti(प्रकृति)','Primal nature, where everything is stored in seed or causal form, which can be thought of as the reflection of puruswa. Also known as avyakta(अव्यक्त)'],
        ['Guṇāḥ(गुणाः)','The three constituents of the universe, namely: Sattva, Rajas and Tamas'],
        ['Sattva(सत्त्व)','The quality of purity, intelligence, brightness'],
        ['Rajas(रजस्‌)','The quality of activity and passion'],
        ['Tamas(तमस्‌)','The quality of dullness and inertia'],
        ['Sr̥ṣṭi(सृष्टि)','Creation. Presided over by rajas'],
        ['Sthiti(स्थिति)','Sustenance. Presided over by sattva'],
        ['Pralaya(प्रलय)','Dissolution. Presided over by tamas']
        ]
    },
    {
      lesson: 2,
      words: [['Mahā bhūtāni(महा भूतानि)', 'The five great subtle elements'], 
        ['Ākāśa(आकाश)', 'Space, or ether, the first great element with its property sound Śabda(शब्द)'],
        ['Vāyu(वायु)', 'Air, the second great element with its property touch sparśa(स्पर्श)'],
        ['Agni(अग्नि) or Tejas(तेजस्‌)', 'Fire, the third great element with its property form or beauty rūpa(रूप)'],
        ['Jala(जल)', 'Water, the fourth great element with its property taste rasa(रस)'],
        ['Pr̥thvi(पृथ्वि) or bhūmi(भूमि)', 'Earth, the fifth great element with its property smell gandha(गन्ध)'],
        ['Antaḥkaraṇa(अन्तःकरण)', 'Inner organ of mind'],
        ['Buddhi(बुद्धि)', 'Reason, the organ of discrimination, reflecting the light of the ātman'],
        ['Ahaṅkāra(अहङ्कार)', 'The organ that identifies the ātman with something in creation'],
        ['Samaṣṭi(समष्टि)', 'The universe as a single person or whole'],
        ['Vyaṣṭi(व्यष्टि)', 'The individual acting as a separate unit'],
        ['Manas(मनस्‌)', 'Mind, the lower level that thinks and deliberates'],
        ['Saṅkalpa(सङ्कल्प)', 'Mental construction, resolve, belief'],
        ['Vikalpa(विकल्प)', 'Doubt, conflicting idea'],
        ['Citta(चित्त)', 'The part of the causal body called the heart where the deposits of actions are stored'],
        ['Indriyāṇi(इन्द्रियाणि)', 'Senses'],
        ['Karmendriyāṇi(कर्मेन्द्रियाणि)', 'Senses of action - speaking, grasping etc'],
        ['Prāṇa(प्राण)', 'The breath in the mouth and nose'],
        ['Apāṇa(अपाण)', 'The breath that excretes'],
        ['vyāṇa(व्याण)', 'The breath that permeates the whole body'],
        ['Udāṇa(उदाण)', 'The breath that leaves the body at death'],
        ['Samāṇa(समाण)', 'The breath that digests'],
        ['Yuga(युग)', 'An age'],
        ['Manvantara(मन्वन्तर)', '71 mahāyugas, supervised by one Manu (Lawgiver)'],
        ['Kalpa(कल्प)', '14 manvantaras, a day of Brahmā'],
        ['Mahāyuga(महायुग)', 'One cycle of the four yugas - 4,320,000 years'],
        ['Kr̥tayuga(कृतयुग)/Satyayuga(सत्ययुग)', 'The Golden Age: 1,728,000 years'],
        ['Trētāyuga(त्रेतायुग)', 'The Silver Age: 1,296,000 years'],
        ['Dvāparayuga(द्वापरयुग)', 'The Bronze Age: 864,000 years'],
        ['Kaliyuga(कलियुग)', 'The Iron Age: 432,000 years']
        ]
    },
    {
      lesson: 3,
      words: [
        ['Śruti(श्रुति)', 'What has been heard i.e., Vedic literature. This is considered to be of the highest authority'],
        ['Veda(वेद)', ' Thought to be the oldest Sanskrit literature and is a collection of hymns compiled into four sections. The eternal, non-human knowledge that shapes the creation'],
        ['Vyāsa(व्यास)', 'He is considered to be the sage who compiled the veda into sections and who also composed the Mahābhārata, Purāṇas and the Brahmasūtra'],
        ['Āraṇyaka(आरण्यक)', 'Forest discussions of the vedas inner meaning'],
        ['Upaniṣad(उपनिषद्‌)', 'Philosophical discussions of the identity of the ātman(आत्मन्‌) with the brahman(ब्रह्मन्‌)'],
        ['Vedānta(वेदान्त)', 'The teaching of the Upaniswads, literally the final part or goal of the veda'],
        ['Smr̥ti(स्मृति)', 'What has been remembered. The teachings of the great sages. Secondary in authority to the Śruti'],
        ['Vedāṅga(वेदाङ्ग)', 'The support of the veda. Six sciences which preserve the proper understanding and recitation of the veda'],
        ['Śikṣa(शिक्ष)', 'Pronunciation. One of the Vedāṅgas'],
        ['Chandas(छन्दस्‌)', 'Metre. One of the Vedāṅgas'],
        ['Vyākaraṇa(व्याकरण)', 'Grammar. One of the Vedāṅgas'],
        ['Nirukta(निरुक्त)', 'Meaning of words. One of the Vedāṅgas'],
        ['Jyotiṣa(ज्योतिष)', 'Astronomy. One of the Vedāṅgas'],
        ['Kalpa(कल्प)', 'Performance of rituals. One of the Vedāṅgas'],
        ['Sūtra(सूत्र)', 'A very terse statement which is part of a complete system explaining a science'],
        ['Pāṇini(पाणिनि)', 'Author of the 4000 or so sūtras comprising the vyākaraṇa. In this science all words are shown to derive from a few simple dhātus(seed forms) and an even simpler system of pratyayas(endings)'],
        ['Dhātu(धातु)', 'Seed of a word. For example, vid is the dhātu of veda'],
        ['Pratyaya(प्रत्यय)', 'The endings of words'],
        ['Yōgasūtrāṇi(योगसूत्राणि)', 'A text outlining the principles of yoga(यॊग). Attributed to Patañjali'],
        ['Manusmr̥ti(मनुस्मृति)', 'Also called dharmaśāstra. The Laws of Manu setsout the laws of human life according to the universal system of dharma'],
        ['Śāstra(शास्त्र)', 'Scripture, methodology, teaching'],
        ['Rāmāyaṇa(रामायण)', 'The story of Rāma and his battles with the demons, by the sage Vālmīki'],
        ['Mahābhārata(महाभारत)', 'The worlds longest epic, by Vyāsa, narrating the story of the battle between the Pānḍavas and the Kauravas and the events leading to it'],
        ['Mantra(मन्त्र)', 'A special magic word'],
        ['Bhagavadgītā(भगवद्गीता)', 'The Song of the Lord, found in the Mahābhārata, records the spiritual discourse between Kr̥ṣṇa and the warrior Arjuna'],
        ['Purāṇa(पुराण)', 'The ancient teachings. Eighteen works traditionally attributed to Vyāsa that deal with creation and dissolution, kings, sages, incarnations etc'],
        ['Śrīmadbhāgavatam(श्रीमद्भागवतम्‌)', 'The most famous Purāṇa, dealing especially with the life and exploits of Kr̥ṣṇa']
        ]
    },
    {
      lesson: 4,
      words: [
        ['Deva(देव)', 'Shining one. A universal power or deity'],
        ['Devī(देवी)', 'A female deity'],
        ['Śakti(शक्ति)', 'The power or force of a deva, considered as his consort'],
        ['Brahmā(ब्रह्मा)', 'The god responsible for creating the creation. Represents rajas'],
        ['Viṣṇu(विष्णु)', 'The god responsible for maintaining the creation. Maintains order by incarnating himself with avatāras. Represents sattva'],
        ['Śiva(शिव)', 'The god responsible for destroying creation. Represents tamas'],
        ['Sarasvatī(सरस्वती)', 'Consort of Brahmā, the power of wisdom'],
        ['Lakṣmī(लक्ष्मी)', 'Consort of Viṣṇu, the power of increase and prosperity.'],
        ['Pārvatī(पार्वती)', 'Consort of Śiva,the power of law'],
        ['Indra(इन्द्र)', 'Lord of the minor gods. Universal mind, lord of the elements'],
        ['Yama(यम)', 'Death, controller and ender of all'],
        ['Agni(अग्नि)', 'God of fire'],
        ['Vāyu(वायु)', 'God of wind'],
        ['Sūrya(सूर्य)', 'God of the sun'],
        ['Pr̥thvī(पृथ्वी)', 'Goddess of the Earth'],
        ['Apsaras(अप्सरस्‌)', 'Beautiful heavenly nymph'],
        ['Gandharva(गन्धर्व)', 'Celestial musician'],
        ['Pitr̥(पितृ)', 'Ancestor'],
        ['Nāga(नाग)', 'Serpent being'],
        ['Yakṣa(यक्ष)', 'Guardian spirit'],
        ['Rākṣasa(राक्षस)', 'Night wandering ogre or demon'],
        ['Avatāra(अवतार)', 'Incarnation of Viswn-u when dharmais transgressed'],
        ['R̥ṣi(ऋषि)', 'Sage']
        ]
    },
    {
      lesson: 5,
      words: [
        ['Puruṣārtha(पुरुषार्थ)', 'The aspiration and purpose of human life. This has four aspects:kāma, artha, wealth, dharma and mōkṣa,'],
        ['Kāma(काम)', 'Desire and sensual enjoyment'],
        ['Artha(अर्थ)', 'Wealth, prosperity'],
        ['Dharma(धर्म)', 'Virtue. That which upholds, the system of duties, rewards, punishments etc.Universal justice, which ensures happiness for all who follow the law of their own nature'],
        ['Mōkṣa(मोक्ष)', 'Liberation '],
        ['Varṇa(वर्ण)', 'Occupation. There are four main divisions'],
        ['Brāhmaṇa(ब्राह्मण)', 'The class of priests and teachers'],
        ['Kṣatriya(क्षत्रिय)', 'The class of warriors, kings and statesmen'],
        ['Vaiśya(वैश्य)', 'The class of merchants, producers and farmers'],
        ['Śūdra(शूद्र)', 'The class of servants and labourers'],
        ['Āśrama(आश्रम)', 'A stage in life. There are four main divisions'],
        ['Brahmacārin(ब्रह्मचारिन्‌)', 'The student stage of chastity, study and obedience'],
        ['Gr̥hastha(गृहस्थ)', 'The householder stage'],
        ['Vānaprastha(वानप्रस्थ)', 'The forest-dweller stage'],
        ['Sanyāsin(सन्यासिन्‌)', 'The stage of complete renunciation as a wandering mendicant'],
        ['Dhyāna(ध्यान)', 'Meditation'],
        ['Yajña(यज्ञ)', 'Sacrifice. This can be a complicated ritual or dedicated action. Five sacrifices are enumerated in Manu'],
        ['Devayajña(देवयज्ञ)', 'Yajña for the gods'],
        ['R̥ṣiyajña(ऋषियज्ञ)', 'Yajña for the sages'],
        ['Pitr̥yajña(पितृयज्ञ)', 'Yajña for the ancestors'],
        ['Manuṣyayajña(मनुष्ययज्ञ)', 'Yajña for the human beings'],
        ['Bhūtayajña(भूतयज्ञ)', 'to the lower creatures'],
        ['Tapas(तपस्‌)', 'Disciplined action that purifies and enhances energy'],
        ['Puṇya(पुण्य)', 'Merit, the essence of good deeds'],
        ['Pāpa(पाप)', 'Sin, the essence of bad deeds'],
        ['Ahiṁsā(अहिंसा)', 'Harmlessness of thought, speech and action'],
        ['Satyam(सत्यम्‌)', 'Unfailing truthfulness in speech'],
        ['Asteyam(अस्तेयम्‌)', 'Abstention from theft'],
        ['Śaucam(शौचम्‌)', 'Cleanliness'],
        ['Abhayam(अभयम्‌)', 'Fearlessness'],
        ['Dānam(दानम्‌)', 'Generosity'],
        ['Dama(दम)', 'Control of mind, speech, senses and body'],
        ['Svādhyāya(स्वाध्याय)', 'Regular study of the scriptures'],
        ['Akrodha(अक्रोध)', 'Absence of anger'],
        ['Śānti(शान्ति)', 'Peace'],
        ['Dayā(दया)', 'Compassion']
        ]
    }
  ];

  getDataForLesson(i:number): any[]{
    let returnData: any[] = [];
    if(i>0 && i<6) return this.epicData.find(x => x.lesson==i).words;
    else if(i==6){     
  
    returnData = returnData.concat(this.epicData.find(x => x.lesson==1).words)
                  .concat(this.epicData.find(x => x.lesson==2).words)
                  .concat(this.epicData.find(x => x.lesson==3).words)
                  .concat(this.epicData.find(x => x.lesson==4).words)
                  .concat(this.epicData.find(x => x.lesson==5).words);
  }

  return returnData;
  }

}
