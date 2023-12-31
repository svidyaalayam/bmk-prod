import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getDatabase, ref, child, set, get, onValue } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private fbap: FirebaseApp) { }

  ngOnInit(): void{

    

  }

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

  ]};

  saveDatabaseData(){
    console.log("Writing to Database");
    const database = getDatabase(this.fbap);
    const starCountRef = ref(database, 'lessons/1');
      set(starCountRef, this.RowsData);
  }

  async getDatabaseData(): Promise<any[]> {
    const database = getDatabase(this.fbap);

    const dbRef = ref(getDatabase());
    var rowsdata : any[] = [];
    await get(child(dbRef, 'lessons/1')).then((snapshot) => {
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
  
}
