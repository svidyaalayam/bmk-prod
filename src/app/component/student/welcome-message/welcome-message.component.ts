import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class WelcomeMessageComponent {
  @Input() dataFromParent: any;

  constructor() {
  }

  ngOnInit(): void{
  }
}
