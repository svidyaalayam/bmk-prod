import { Component, OnInit } from '@angular/core';
import { EngToTelService } from '../../../shared/eng-to-tel.service';

@Component({
  selector: 'app-dasturi',
  templateUrl: './dasturi.component.html',
  styleUrls: ['./dasturi.component.css']
})
export class DasturiComponent implements OnInit {

  constructor(private sEngToTel: EngToTelService) { }

  ngOnInit(): void {
  }

  showTelugu(){

    let obj1: any = document.getElementById('englishTextArea');
    let obj2: any = document.getElementById('teluguTextArea');
    
    obj2.value = this.sEngToTel.strConvertToTeluguAll(obj1.value);
     
    

  }

}

