import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { EngToTelService } from '../../../shared/eng-to-tel.service';
import { DbServiceService } from '../../../shared/db-service.service';

@Component({
  selector: 'app-basicsan',
  templateUrl: './basicsan.component.html',
  styleUrls: ['./basicsan.component.css']
})
export class BasicsanComponent implements OnInit {


  constructor(private sEngToTel: EngToTelService, private db: DbServiceService) { 

   // db.saveDatabaseData();
   
     
     
  }

  ngOnInit(): void {
    this.db.getDatabaseData().then(res => {this.RowsData = res});
  }
  title = 'Lalithas 1st Project';


  numberOfColumns = 3;

  bTel = true;
  bSan = true;
  bTrans = true;


  RowsData : any[] = [];
  getSan(str:string): string{
    return this.sEngToTel.getStringInSanskrit(str)
  }

  getTel(str:string): string{
    return this.sEngToTel.getStringInTelugu(str)

  }

  getTran(str:string): string{
    return this.sEngToTel.getStringInTranscript(str)
  }

}

