import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  constructor() { 
    this.listOfPoems = 
    [
      {
        currentCount: 0,
        groupName: 'ప్రార్థనా శ్లోకములు',
        groupItems:
        [{
          currentCount: 0,
          collectionName: '(Class Beginning Prayers)',
          poemDetails:[{title:'శుక్లాంబరధరం... ', 
          poemLines:['శుక్లాంబరధరం విష్ణుం  శశివర్ణం చతుర్భుజమ్ ', 'ప్రసన్నవదనం ధ్యాయేత్   సర్వవిఘ్నోప శాంతయే !' ],
          vlink:""},
          {title:'అగజానన పద్మార్కం... ', 
          poemLines:['అగజానన పద్మార్కం గజానన మహర్నిశం ', 'అనేక దం తం భక్తానాం ఏకదంత ముపాస్మహే !' ],
          vlink:""},
          {title:'సరస్వతీ నమస్తుభ్యం... ', 
          poemLines:['సరస్వతీ నమస్తుభ్యం వరదే కామ రూపిణి ', 'విద్యారంభం కరిష్యామి సిద్ధిర్భవతు మే సదా !' ],
           vlink:""},
          {title:'పద్మపత్ర విశాలాక్షి... ', 
          poemLines:['పద్మపత్ర విశాలాక్షి పద్మకేసరవర్ణినీ ', 'నిత్యం పద్మాలయా దేవి సామాంపాతు సరస్వతీ !' ],
           vlink:""},
          {title:'గురుర్బ్రహ్మా గురుర్విష్ణుః... ', 
          poemLines:['గురుర్బ్రహ్మ గురుర్విష్ణుః గురుర్దేవో మహేశ్వరః ', 'గురు స్సాక్షాత్పర బ్రహ్మ తస్మై శ్రీ గురవే నమః !' ],
           vlink:""}]},

          {
            currentCount: 0,
            collectionName: '(Class Ending Prayer)',
            poemDetails:[{title:'సర్వమంగళ మాంగళ్యే... ', 
            poemLines:['సర్వమంగళ మాంగళ్యే శివే సర్వార్థ సాధికే ', 'శరణ్యే త్రంబకే దేవీ నారాయణి నమోస్తుతే !' ],
             vlink:""}]}

        ]
        
      },

      {
        currentCount: 0,
        groupName: 'ప్రార్థనా పద్యములు',
        groupItems:
        [{
          currentCount: 0,
          collectionName: 'పిల్లల పద్యములు',
          poemDetails:[
          {title:'చేత వెన్న ముద్ద... ', 
          poemLines:['చేత వెన్న ముద్ద చెంగల్వ పూదండ', 'బంగరు మొలత్రాడు పట్టుదట్టి !', 'సందె తాయతులను సరిమువ్వ గజ్జెలు', 'చిన్న కృష్ణ నిన్ను చేరు కొలుతు !!' ]
          , vlink:""},
          {title:'నందనందన... ', 
          poemLines:['నందనందన భక్తచందన నారదాది మునీంద్ర సత్‌ ', 'వందితామల కీర్తిసంయుత ప్రస్తుతించెద నిన్‌ సదా !', 'మందహాసముఖేందు సుందర మాధవా మధుసూదనా ', 'వందనమ్ము ముకుంద కేశవ వాసుదేవ జగద్గురూ !!' ]
          , vlink:""}]},

          {
            currentCount: 0,
            collectionName: 'కృష్ణ శతకము',
            poemDetails:[
            {title:'శ్రీ రుక్మిణీశ కేశవ... ', 
            poemLines:['శ్రీ రుక్మిణీశ కేశవ', 'నారద సంగీతలోల నగధర శౌరీ !', 'ద్వారక నిలయ జనార్ధన', 'కారుణ్యముతోడ మమ్ము గావుము కృష్ణా !!' ]
            , vlink:""},
            {title:'నీవే తల్లివి తండ్రివి... ', 
            poemLines:['నీవే తల్లివి దండ్రివి ', 'నీవే నా తోడు నీడ నీవే సఖుడౌ !', 'నీవే గురుడవు దైవము ', 'నీవే నా పతియు గతియు నిజముగ కృష్ణా !!' ]
            , vlink:""},
            {title:'నారాయణ పరమేశ్వర... ', 
            poemLines:['నారాయణ పరమేశ్వర ', 'ధారాధర నీలదేహ దానవవైరీ !', 'క్షీరాబ్ధిశయన యదుకుల ', 'వీరా నను గావు కరుణ వెలయఁగ కృష్ణా !!' ]
            , vlink:""},
            {title:'హరియను రెండక్షరములు... ', 
            poemLines:['హరియను రెండక్షరములు ', 'హరియించును పాతకముల నంబుజనాభా !', 'హరి నీ నామమహత్మ్యము ', 'హరి హరి పొగడంగవశమె హరి శ్రీకృష్ణా !!' ]
            , vlink:""},
            {title:'చిలుక నొక రమణి ముద్దులు... ', 
            poemLines:['చిలుక నొక రమణి ముద్దులు ', 'చిలుకను శ్రీరామయనుచు శ్రీపతి పేరుం !', 'బిలిచిన మోక్షము నిచ్చితి ', 'వలరగ మిము దలచు జనుల కరుదా కృష్ణా !!' ]
            , vlink:""}]},

            {
              currentCount: 0,
              collectionName: 'దాశరథీ శతకము',
              poemDetails:[
              {title:'శ్రీరఘురామ చారు తులసీదళదామ... ', 
              poemLines:['శ్రీరఘురామ ! చారు తులసీదళదామ ! శమ క్షమాది శృం', 'గార గుణాభిరామ ! త్రిజగన్నుత శౌర్యరమాలలామ ! దు', 'ర్వార కబంధరాక్షస విరామ ! జగజ్జన కల్మషార్ణవో', 'త్తారకనామ ! భద్రగిరి దాశరథీ ! కరుణాపయోనిధీ !!' ]
              , vlink:""},
              {title:'భండన భీముడార్తజన... ', 
              poemLines:['భండన భీముడార్తజన బాంధవుడుజ్జ్వల బాణతూణ కో ', 'దండ కళాప్రచండ భుజ తాండవ కీర్తికి రామమూర్తికిన్', 'రెండవ సాటి దైవమిక లేడనుచున్ గడగట్టి భేరికా', 'ఢాండ డఢాండ ఢాండ నినదంబులజాండము నిండ మత్త వే', 'దండము నెక్కి చాటెదను దాశరథీ కరుణాపయోనిధీ' ]
              , vlink:""}]}

        ]
        
      },

      

      {
        currentCount: 0,
        groupName: 'భాగవత పద్యములు',
        groupItems:
        [{
          currentCount: 0,
          collectionName: 'ప్రారంభ పద్యాలు',
          poemDetails:[
          {title:'శ్రీ కైవల్యపదంబు... ', 
          poemLines:['శ్రీ కైవల్యపదంబు జేరుటకునై చింతించెదన్ లోకర', 'క్షైకారంభకు భక్తపాలనకళాసంరంభకున్ దానవో', 'ద్రేకస్తంభకు గేళిలోలవిలసదృగ్జాలసంభూతనా', 'నాకంజాతభవాండకుంభకు మహానందాంగనా ఢింభకున్ !!' ]
          , vlink:""},
          {title:'పలికెడిది భాగవతమట... ', 
          poemLines:['పలికెడిది భాగవతమట ', 'పలికించెడివాడు రామభద్రుండట నే', 'పలికిన భవహరమగునట ', 'పలికెద వేరొండు గాథ పలుకగనేలా !' ]
          , vlink:""},
          {title:'అమ్మలగన్నయమ్మ... ', 
          poemLines:['అమ్మలగన్నయమ్మ ముగురమ్మల మూలపుటమ్మ చాల పె‌ ', 'ద్దమ్మ సురారులమ్మ కడుపారడి పుచ్చినయమ్మ దన్నులో', 'నమ్మినవేల్పుటమ్ములయుండెడి యమ్మ దుర్గ మా ', 'యమ్మ కృపాబ్దియిచ్చు తమహత్వ్తకవిత్వ పటుత్వసంపదల్ !!' ]
          , vlink:""},
          {title:'శారద నీరదేందు... ', 
          poemLines:['శారద నీరదేందు ఘన సార పటీర మరాళ మల్లికా ‌ ', 'హార తుషార ఫేన రజతాచల కాశ ఫణీశ కుంద మం', 'దార సుధా పయోధి సిత తామర సామర వాహినీ సుభా ', 'కారత నొప్పు నిన్ను మది గానగ నెన్నడు గల్గు భారతీ !!' ]
          , vlink:""}]},

          {
            currentCount: 0,
            collectionName: 'గజేంద్రమోక్షము పద్యాలు',
            poemDetails:[
            {title:'కరి దిగుచు మకరి సరసికి... ', 
            poemLines:['కరి దిగుచు మకరి సరసికి', 'కరి దరికిని మకరి దిగుచు కరకరి బెరయన్', 'కరికి మకరి మకరికి కరి', 'భరమనుచును నతల కుతల భటులరుదు పడన్ !!' ]
            , vlink:""},
            {title:'లోకంబులు లోకేశులు... ', 
            poemLines:['లోకంబులు లోకేశులు ', 'లోకస్థులు తెగిన తుది నలోకంబగు పెం', 'జీకటి కవ్వల నెవ్వడు ', 'ఏకాకృతి వెల్గు నతని నే భజియింతున్  !!' ]
            , vlink:""},
            {title:'ఎవ్వని చే జనించు... ', 
            poemLines:['ఎవ్వని చే జనించు జగ? మెవ్వని లోపల నుండు లీనమై? ', 'ఎవ్వని యందు డిందు? పరమేశ్వరుడెవ్వడు? మూల కారణం', 'బెవ్వ? డనాది మధ్య లయుడెవ్వడు? సర్వము తానె యైన వా ', 'డెవ్వడు? వాని నాత్మ భవు నీశ్వరు నే శరణంబు వేడెదన్ !!' ]
            , vlink:""},
            {title:'లావొక్కింతయు లేదు... ', 
            poemLines:['లావొక్కింతయు లేదు ధైర్యము విలోలంబయ్యె ప్రాణంబులున్ ', 'ఠావుల్ దప్పెను మూర్చ వచ్చె తనువున్ డస్సెన్ శ్రమంబయ్యెడిన్', 'నీవే తప్ప ఇతః పరంబెరుగ మన్నింపం దగున్ దీనునిన్ ', 'రావే ఈశ్వర కావవే వరద సంరక్షింపు భద్రాత్మకా !!' ]
            , vlink:""},
            {title:'అల వైకుంఠ పురంబులో... ', 
            poemLines:['అల వైకుంఠ పురంబులో నగరిలో నా మూల సౌధంబు దా ', 'పల మందార వనాంతరామృత సరః ప్రాంతేందు కాంతోపలో', 'త్పల పర్యంక రమా వినోది యగు నాపన్నః ప్రసన్నుండు వి ', 'హ్వల నాగేంద్రము పాహి పాహి యన గుయ్యాలించి సంరంభి యై !!' ]
            , vlink:""},
            {title:'సిరికిం జెప్పడు... ', 
            poemLines:['సిరికిం జెప్పడు శంఖ చక్ర యుగముం చేదోయి సంధింప డే ', 'పరివారంబును జీర డభ్రగపతిన్ మన్నింపడా కర్ణికాం', 'తర ధమ్మిల్లము చక్కనొత్తడు వివాద ప్రోద్ధిత శ్రీ కుచో ', 'పరి చేలాంచలమైన వీడడు గజప్రాణా వనోత్సాహి యై !!' ]
            , vlink:""},
            {title:'తన వెంటన్ సిరి... ', 
            poemLines:['తన వెంటన్ సిరి, లచ్చి వెంట నవరోధవ్రాతమున్ వాని వె ', 'న్కను పక్షీంద్రుడు వాని పొంతను ధనుః కౌమోదకీ శంఖ చ', 'క్ర నికాయంబును నారదుండు ధ్వజినీకాంతుండు రావచ్చి రొ ', 'య్యన వైకుంఠపురంబునం గలుగువా రాబాలగోపాలమున్ !!' ]
            , vlink:""},
            {title:'అడిగెద నని కడు వడి జను... ', 
            poemLines:['అడిగెద నని కడు వడి జను ', 'అడిగిన తన మగుడ నుడువడని నెడయుడుగున్', 'వెడ వెడ జిడి ముడి తడ బడ ', 'నడుగిడు నడిగిడదు జడిమ నడుగిడు నెడలన్ !!' ]
            , vlink:""}]},

            {
              currentCount: 0,
              collectionName: 'ప్రహ్లాదుని పద్యాలు',
              poemDetails:[
              {title:'చదువని వాడజ్ఞుండగు... ', 
              poemLines:['చదువని వాడజ్ఞుండగు', 'చదివిన సదసద్వివేక చతురత గలుగున్ !', 'చదువగ వలయును జనులకు', 'చదివించెద నార్యులొద్ద చదువుము తండ్రీ !!' ]
              , vlink:""},
              {title:'చదివించిరి నను గురువులు... ', 
              poemLines:['చదివించిరి నను గురువులు ', 'చదివితి ధర్మార్ధ ముఖ్య శస్త్రంబులు నే', 'చదివినవి గలవు పెక్కులు ', 'చదువులలో మర్మమెల్ల చదివితి తండ్రీ  !!' ]
              , vlink:""},
              {title:'ఇందు గలడందు లేడని... ', 
              poemLines:['ఇందు గలడందు లేడని ', 'సందేహము వలదు చక్రి సర్వోపగతుం', 'డెందెందు వెదకి జూచిన ', 'అందందే గలడు దానవాగ్రణి వింటే !!' ]
              , vlink:""},
              {title:'మందార మకరంద... ', 
              poemLines:['మందార మకరంద మాధుర్యమున దేలు ', 'మధుపంబు బోవునే మదనములకు', 'నిర్మల మందాకినీ వీచికల దూగు ', 'రాయంచ సనునె తరంగిణులకు ',
              'లలిత రసాల పల్లవ ఖాదియై చొక్కు ', 'కోయిల సేరునే కుటజములకు', 'పూర్ణేందు చంద్రికా స్ఫురిత చకోరక ', 'మ్మరుగునే సాంద్ర నీహారములకు ', ' ',
              'అంబుజోదర దివ్య పాదారవింద ', 'చింతనామృత పాన విశేష మత్త', 'చిత్త మే రీతి నితరంబు చేర నేర్చు ', 'వినుత గుణ శీల మాటలు వేయు నేల !!' ]
              , vlink:""},
              {title:'కమలాక్షు నర్చించు... ', 
              poemLines:['కమలాక్షు నర్చించు కరములు కరములు ', 'శ్రీనాథు వర్ణించు జిహ్వ జిహ్వ', 'సుర రక్షకుని జూచు చూడ్కులు చూడ్కులు ', 'శేషశాయికి మ్రొక్కు శిరము శిరము ',
              'విష్ణు నాకర్ణించు వీనులు వీనులు ', 'మధువైరి దవిలిన మనము మనము', 'భగవంతు వలగొను పదములు పదములు ', 'పురుషోత్తముని మీది బుద్ధి బుద్ధి ', ' ',
              'దేవదేవుని చింతించు దినము దినము ', 'చక్రహస్తుని బ్రకటించు చదువు చదువు', 'కుంభినీధవు జెప్పెడి గురుడు గురుడు ', 'తండ్రి! హరి జేరు మనియెడి తండ్రి తండ్రి !!' ]
              , vlink:""}]}

        ]
        
      },
      {
        currentCount: 0,
        groupName: 'నీతి పద్యములు',
        groupItems:
        [{
          currentCount: 0,
          collectionName: 'వేమన శతకము',
          poemDetails:[{title:'ఉప్పు కప్పురంబు... ', 
          poemLines:['ఉప్పు కప్పురంబు నొక్క పోలిక నుండు ', 'చూడచూడ రుచుల జాడ వేరు', 'పురుషులందు పుణ్య పురుషులు వేరయా ', 'విశ్వదాభిరామ! వినుర వేమ!' ],
          vlink:""},
          {title:'అల్పుడెపుడుబల్కు... ', 
          poemLines:['అల్పుడెపుడుబల్కు నాడంబురముగాను ', 'సజ్జనుండు బల్కు చల్లగాను', 'కంచు మ్రోగునట్లు కనకంబు మ్రోగునా? ', 'విశ్వదాభిరామ! వినుర వేమ!'],
          vlink:""},
          {title:'గంగిగోవు పాలు... ', 
          poemLines:['గంగిగోవు పాలు గరిటెడైనను చాలు ', 'కడివెడైన నేమి ఖరము పాలు', 'భక్తిగలుగు కూడు పట్టెడైనను చాలు ', 'విశ్వదాభిరామ! వినుర వేమ!' ],
           vlink:""},
          {title:'అనువుగానిచోట... ', 
          poemLines:['అనువుగానిచోట నధికులమనరాదు ', 'కొంచెముండుటెల్ల కొదువ గాదు', 'కొండ అద్దమందు కొంచమై యుండదా? ', 'విశ్వదాభిరామ! వినుర వేమ!' ],
           vlink:""},
          {title:'అనగ ననగ రాగ... ', 
          poemLines:['అనగ ననగ రాగ మతిశయిల్లుచునుండు ', 'తినగ తినగ వేము తీయగనుండు', 'సాధనమున పనులు సమకూరు ధరలోన', 'విశ్వదాభిరామ! వినుర వేమ!' ],
           vlink:""},
          {title:'తల్లిదండ్రి మీద... ', 
          poemLines:['తల్లిదండ్రి మీద దయలేని పుత్రుడు ', 'పుట్టనేమి వాడు గిట్టనేమి', 'పుట్టలోని చెదలు పుట్టవా గిట్టవా? ', 'విశ్వదాభిరామ! వినుర వేమ!'],
           vlink:""}]},

          {
            currentCount: 0,
            collectionName: 'సుమతీ శతకము',
            poemDetails:[{title:'అక్కరకు రాని చుట్టము... ', 
          poemLines:['అక్కరకు రాని చుట్టము ', 'మ్రొక్కిన వరమీని వేల్పు మోహరమునదా', 'నెక్కిన బారని గుర్రము ', 'గ్రక్కున విడవంగవలయు గదరా సుమతీ!' ],
          vlink:""},
          {title:'అప్పిచ్చువాడు... ', 
          poemLines:['అప్పిచ్చువాడు, వైద్యుడు ', 'నెప్పుడు నెడతెగక పారు నేరును, ద్విజుడున్‌', 'జొప్పడిన యూర నుండుము ', 'చొప్పడకున్నట్టి యూరు చొరకుము సుమతీ!'],
          vlink:""},
          {title:'ఉపకారికి నుపకారము... ', 
          poemLines:['ఉపకారికి నుపకారము ', 'విపరీతము గాదు సేయ వివరింపంగా', 'నపకారికి నుపకారము ', 'నెపమెన్నక సేయువాడు నేర్పరి సుమతీ!' ],
           vlink:""},
          {title:'కనకపు సింహాసనమున... ', 
          poemLines:['కనకపు సింహాసనమున ', 'శునకము గూర్చుండబెట్టి శుభ లగ్నమునం', 'దొనరగ బట్టము గట్టిన ', 'వెనుకటి గుణమేల మాను వినరా సుమతీ!' ],
           vlink:""},
          {title:'ఎప్పుడు సంపద కలిగిన... ', 
          poemLines:['ఎప్పుడు సంపద కలిగిన ', 'నప్పుడు బంధువులు వత్తు రది యెట్లన్నన్‌', 'తెప్పలుగ జెఱువు నిండిన ', 'గప్పలు పదివేలు చేరు గదరా సుమతీ!'],
           vlink:""},
           {title:'చీమలు పెట్టిన పుట్టలు... ', 
           poemLines:['చీమలు పెట్టిన పుట్టలు ', 'పాముల కిరవైనయట్లు పామరుడు దగన్‌‌', 'హేమంబు గూడ బెట్టిన ', 'భూమీశుల పాల జేరు భువిలో సుమతీ!'],
            vlink:""},
            {title:'తన కోపమె తన శత్రువు... ', 
            poemLines:['తన కోపమె తన శత్రువు, ', 'తన శాంతమె తనకు రక్ష, దయ చుట్టంబౌ‌‌', 'తన సంతోషమె స్వర్గము, ', 'తన దుఃఖమె నరక మండ్రు తథ్యము సుమతీ!'],
             vlink:""}]}

        ]
        
      }                

    ];

    this.selectedGroup = this.listOfPoems[0];
    this.selectedCollection = this.selectedGroup.groupItems[0];
    this.selectedPoem = this.selectedCollection.poemDetails[0];
  }

  selectedPoem: any;
  listOfPoems: any;
  selectedGroup: any;
  selectedCollection: any;
  curNbr: number = 0;

  incrementCounter(i: number) {
    this.selectedCollection.currentCount = i;
    this.selectedPoem = this.selectedCollection.poemDetails[i];
  }

  setCollection(i: number) {
    this.listOfPoems[this.curNbr].currentCount = i;
    this.selectedCollection = this.selectedGroup.groupItems[i];
    this.selectedPoem = this.selectedCollection.poemDetails[this.selectedCollection.currentCount];
  }

  applySelectedItem(){
    let obj1: any = document.getElementById('editMode2');
    let objVal: number = 0;
    if(obj1) objVal = obj1.value;

    this.listOfPoems[this.curNbr].currentCount = objVal;
    this.selectedCollection = this.selectedGroup.groupItems[objVal];
    this.selectedPoem = this.selectedCollection.poemDetails[this.selectedCollection.currentCount];
  }



  setGroup(i: number) {
    this.curNbr = i;
    this.selectedGroup = this.listOfPoems[i];

    this.selectedCollection = this.selectedGroup.groupItems[this.selectedGroup.currentCount];
  }

  applySelectedLesson(){
    let obj1: any = document.getElementById('editMode');
    let objVal: number = 0;
    if(obj1) objVal = obj1.value;

    this.curNbr = objVal;
    this.selectedGroup = this.listOfPoems[objVal];

    this.selectedCollection = this.selectedGroup.groupItems[this.selectedGroup.currentCount];
    this.selectedPoem = this.selectedCollection.poemDetails[this.selectedCollection.currentCount];
  }

  ngOnInit(): void {
  }

}

