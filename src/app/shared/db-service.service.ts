import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getDatabase, ref, child, set, get, push, onValue } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private fbap: FirebaseApp) { }

  ngOnInit(): void{

    

  }

  RowsHeaderDataTelugu : any = { headerData : [
    {lName : 'praarthana', lessons : [ {title : 'gaNESa praarthana', id : ''}, {title : 'sarasvatI praarthana', id : ''}, {title : 'guru praarthana', id : ''} ]},
    {lName : 'acculu', lessons : [ {title : 'a', id : '-Nn1G9pm2L3fBAyZEaCP'}, {title : 'aa', id : '-Nn1GkjPY5QkOwlZg6wv'}, {title : 'i', id : ''} ]},
    {lName : 'hallulu', lessons : [ {title : 'ka', id : ''}, {title : 'kha', id : ''}, {title : 'ga', id : ''} ]},
    {lName : 'guNiMtaalu', lessons : [ {title : 'talakaTTu', id : ''}, {title : 'dIrghamu', id : ''}, {title : 'guDi', id : ''} ]},
    {lName : 'ottulu', lessons : [ {title : 'ka', id : ''}, {title : 'kha', id : ''}, {title : 'ga', id : ''} ]},
    {lName : 'rAmAyaNamu', lessons : [  ]},
    {lName : 'bhaaratamu', lessons : [  ]},
    {lName : 'bhaagavatamu', lessons : [  ]},
    {lName : 'kathalu', lessons : [  ]},
    {lName : 'paMDugalu', lessons : [  ]},
    {lName : 'padAvaLi', lessons : [  ]},
    {lName : 'padyamulu', lessons : [  ]},
    {lName : 'pATalu', lessons : [  ]},
    {lName : 'poDupu kathalu', lessons : [  ]},
    {lName : 'hAsyamu', lessons : [  ]}
  ]};

  RowsHeaderDataSanskrit : any = { headerData : [
    {lName : 'praarthanaa SlOkA@h', lessons : [ {title : 'gaNESa praarthanaa', id : ''}, {title : 'sarasvatI praarthanaa', id : ''}, {title : 'guru praarthanaa', id : ''} ]},
    {lName : 'svarA@h', lessons : [ {title : 'a', id : ''}, {title : 'aa', id : ''}, {title : 'i', id : ''} ]},
    {lName : 'vyaMjanaani', lessons : [ {title : 'ka', id : ''}, {title : 'kha', id : ''}, {title : 'ga', id : ''} ]},
    {lName : 'bahuNAni', lessons : [ {title : 'talakaTTu', id : ''}, {title : 'dIrghamu', id : ''}, {title : 'guDi', id : ''} ]},
    {lName : 'saMyukta akshraa@h', lessons : [ {title : 'ka', id : ''}, {title : 'kha', id : ''}, {title : 'ga', id : ''} ]},
    {lName : 'rAmAyaNam', lessons : [  ]},
    {lName : 'bhaaratam', lessons : [  ]},
    {lName : 'bhaagavatam', lessons : [  ]},
    {lName : 'kathaa@h', lessons : [  ]},
    
  ]};

  RowsData : any ={ rowsData:  [
    {
      
      items: [{
        width:100,
        type:0,
        
        textTop: "aa - aksharamu",
        textBody: []
  
      }
      ]
  
    },
    



    {
      
    items: [{
      width:50,
      type:1,
      textTop: "",
      textBtm: "aavu",
      imageUrl: "https://drive.google.com/uc?export=download&id=1eDJ5AGIjw4RABKgyblVdjISJ5UbGaZhH"
    },
    {
      width:50,
      type:1,
      textTop: "",
      textBtm: "aaku",
      imageUrl: "https://drive.google.com/uc?export=download&id=1-XUajkoJTCGH7TNqVgqo3CXt4hMlFJfY"

    }
    ]
  },

    {
      
    items: [{
      width:50,
      type:1,
      textTop: "",
      textBtm: "aalayamu",
      imageUrl: "https://drive.google.com/uc?export=download&id=1cJzKyD-ceVWp2cDc00GPq3J5bfcbeDRT"
    },
    {
      width:50,
      type:1,
      textTop: "",
      textBtm: "aaTa",
      imageUrl: "https://drive.google.com/uc?export=download&id=1EycY3X5M4rlqiM7_0iTQuh0sJoQcnpFj"

    }
    ]
  },

  {
    
    items: [{
      width:100,
      type:99

    }
    ]

  },

  
  {
      
    items: [{
      width:80,
      type:10,
      textTop: "mari konni padaalu",
      textBtm: "",
      slist:[{imageUrl: "https://drive.google.com/uc?export=download&id=1eDJ5AGIjw4RABKgyblVdjISJ5UbGaZhH", text:"Akali"},
      {imageUrl: "https://drive.google.com/uc?export=download&id=1EycY3X5M4rlqiM7_0iTQuh0sJoQcnpFj", text:"Avedana"},
      {imageUrl: "https://drive.google.com/uc?export=download&id=1cJzKyD-ceVWp2cDc00GPq3J5bfcbeDRT", text:"AlOcana"}],
      
    }
    ]

  },

  
  {
    
    items: [{
      width:100,
      type:99

    }
    ]

  },

  {
      
    items: [{
      width:100,
      type:0,
      
      textTop: "praSnalu",
      textBody: [
        {ptype: 0, ptext: "`Level-1`"},
        {ptype: 1, plist: ["'A' tO oka naalugu padaalu, vATi arthaalu cheppaMDi"]},
        {ptype: 0, ptext: "`Level-2`"},
        {ptype: 1, plist: ["'A' tO oka padi padaalu, vATi arthaalu cheppaMDi", "'A' tO vaccE padaala tO mI svaMta vAkyaalu cheppaMDi"]},
        {ptype: 0, ptext: "`Level-3`"},
        {ptype: 1, plist: ["'A' tO vaccE padaala tO mI svaMta vAkyaalu bhUta, vartamaana, bhavishyat kaalamulalO cheppaMDi"]},
        {ptype: 0, ptext: "`Level-4`"},
        {ptype: 1, plist: ["'A' tO vaccE padaala tO mI svaMta vAkyaalu bhUta, vartamaana, bhavishyat kaalamulalO vrAyaMDi"]}
      ]

    }
    ]

  },

  ]};

  autoSaveDatabaseData() {
    console.log("Writing to Database");
    const database = getDatabase(this.fbap);
    const lessonsRef = ref(database, 'lessons');
  
    // Use push to generate a unique key
    const newLessonRef = push(lessonsRef);
  
    // Set data using the generated key
    set(newLessonRef, this.RowsData);
  }

  saveDatabaseTeluguHeaderData(){
    console.log("Writing to Database");
    const database = getDatabase(this.fbap);
    const starCountRef = ref(database, 'lessons/teluguheader');
      set(starCountRef, this.RowsHeaderDataTelugu);
  }

  saveDatabaseSanskritHeaderData(){
    console.log("Writing to Database");
    const database = getDatabase(this.fbap);
    const starCountRef = ref(database, 'lessons/sanskritheader');
      set(starCountRef, this.RowsHeaderDataSanskrit);
  }

  saveDatabaseData(){
    console.log("Writing to Database");
    const database = getDatabase(this.fbap);
    const starCountRef = ref(database, 'lessons/-Nn1GkjPY5QkOwlZg6wv');
      set(starCountRef, this.RowsData);
  }

  async getDatabaseHeaderData(language: string): Promise<any[]> {
    const database = getDatabase(this.fbap);
    var fullurl: string = 'lessons/teluguheader';
    switch(language.toLowerCase()) { 
      case 'telugu': { 
        fullurl = 'lessons/teluguheader'; 
         break; 
      } 
      case 'sanskrit': { 
        fullurl = 'lessons/sanskritheader';  
         break; 
      }
   } 

    const dbRef = ref(getDatabase());
    var rowsdata : any[] = [];
    await get(child(dbRef, fullurl)).then((snapshot) => {
        if (snapshot.exists()) {
          rowsdata = snapshot.val().headerData;
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      return rowsdata;

  }



  async getDatabaseData(idstr: string): Promise<any[]> {
    const database = getDatabase(this.fbap);

    console.log('idstr', idstr);

    const dbRef = ref(getDatabase());
    var rowsdata : any[] = [];
    await get(child(dbRef, 'lessons/'+idstr)).then((snapshot) => {
        if (snapshot.exists()) {
          rowsdata = snapshot.val().rowsData;
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });

      return rowsdata;

  }

  async getAllLessonsData(): Promise<any[]> {
    const database = getDatabase(this.fbap);
  
    const lessonsRef = ref(database, 'lessons');
    var allLessonsData: any[] = [];
  
    // Use the "get" method to fetch all data under the "lessons" node
    await get(lessonsRef).then((snapshot) => {
      if (snapshot.exists()) {
        // Convert the snapshot to an array of objects
        allLessonsData = Object.values(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  
    return allLessonsData;
  }
  
}

/*
RowsData : any ={ rowsData:  [
  {
    
    items: [{
      width:100,
      type:0,
      
      textTop: "OM gaqNAnaaMV tvA gaqNapaQtig^M",
      textBody: [
        {ptype: 0, ptext: "SrI raama raama raamEti"},
        {ptype: 0, ptext: "ramE raamE manOramE"}
      ]

    }
    ]

  },

  {
    
    items: [{
      width:20,
      type:0,
      
      textTop: "SrI sarasvatyai nama@h",
      textBody: [
        {ptype: 0, ptext: "Saaradaayaa@h naamaa@h"},
        {ptype: 1, plist: ["Saaradaa", "bhaaratI", "sarasvatI"]}
      ],
      drawLine: true

    },
    {
      width:60,
      type:1,
      textTop: "kaMThamu",
      textBtm: "",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/1757753519/display_1500/stock-photo-lord-ganesha-with-colorful-background-wallpaper-god-ganesha-poster-design-for-wallpaper-1757753519.jpg"

    },
    {
      width:20,
      type:0,
      
      textTop: "SrI sarasvatyai nama@h",
      textBody: [
        {ptype: 0, ptext: "Saaradaayaa@h naamaa@h"},
        {ptype: 2, plist: ["Saaradaa", "bhaaratI", "sarasvatI"]}
      ]

    }
    ]

  },

  {
    
  items: [{
    width:30,
    type:1,
    textTop: "aMbaa",
    textBtm: "",
    imageUrl: "https://www.shutterstock.com/shutterstock/photos/1757753519/display_1500/stock-photo-lord-ganesha-with-colorful-background-wallpaper-god-ganesha-poster-design-for-wallpaper-1757753519.jpg"

  },
  {
    width:30,
    type:1,
    textTop: "",
    textBtm: "dharmam",
    imageUrl: "https://www.shutterstock.com/shutterstock/photos/1757753519/display_1500/stock-photo-lord-ganesha-with-colorful-background-wallpaper-god-ganesha-poster-design-for-wallpaper-1757753519.jpg"

  },
  {
    width:30,
    type:1,
    textTop: "",
    textBtm: "saMskRtaM bhaashaa",
    imageUrl: "https://i.pinimg.com/236x/4f/1d/be/4f1dbed9fa2c5cf3a3978d24bea09d3d.jpg"

  }

  ]
},
{
  
  items: [{
    width:100,
    type:0,
    textTop: "abhavat",
    textBody: [],

  }
  ]

},
{
  
  items: [{
    width:100,
    type:99

  }
  ]

}

]}; */


/*
అక్షరము
అప్పడము
అద్దము
అగ్గి / అగ్ని
అచ్చు
అప్పు / అరువు
అక్క
అన్న
ayya
అక్కడ
అప్పుడు
అద్భుతము
అవసరము
అద్దె
అర
అరక
అలక
అణువు
*/
