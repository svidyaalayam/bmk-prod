import { Component, OnInit } from '@angular/core';
import { BirthdaysService } from '../../../shared/birthdays.service';

@Component({
  selector: 'app-scroll-header',
  templateUrl: './scroll-header.component.html',
  styleUrls: ['./scroll-header.component.css']
})
export class ScrollHeaderComponent implements OnInit {

  scrollingText: string = '';
  jsonData: any = null;
  

  constructor(private birthdayService: BirthdaysService) {
    this.scrollingText += '🙏🙏🙏 ఓం శ్రీ మహాగణాధిపతయే నమః 🙏🙏🙏 శ్రీ వాగ్దేవ్యై నమః 🙏🙏🙏 శ్రీ గురుభ్యో నమః 🙏🙏🙏 ';
    this.scrollingText += 'అ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఌ ౡ ఎ ఏ ఐ ఒ ఓ ఔ అం అః క  ఖ గ ఘ ఙ  చ ౘ ఛ జ ౙ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ  శ ష స హ ళ క్ష ఱ ';
    this.scrollingText += '🙏🙏🙏 Please note 15th December 2023 is the last date to register for participating in శ్రీ సరస్వతీ పూజ మరియు సద్గురు శ్రీత్యాగరాజ స్వామి ఆరాధనోత్సవములు. For full details see home page - upcoming events 🙏🙏🙏 ';
    

  }

  ngOnInit() {

  }
}
