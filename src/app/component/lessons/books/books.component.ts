import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booklinks: any;
  pdfFileLink: SafeResourceUrl;
  currentCount: number;

  constructor(private sanitizer: DomSanitizer) {
    this.currentCount = 0,
    this.booklinks = 
    [{
      titleName: 'శేషాద్రి (1వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1971wj0nhGNYvsypnNWYmPxY-fjtfgy02/preview")
    },
    {
      titleName: 'గరుడాద్రి (2వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1igrTSuuhptdt3S8F204GIR9tK1zLJRa2/preview")
    },
    {
      titleName: 'వృషభాద్రి (3వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1ShcWXzoYwIAZkkHt7YfTANT_Ddu3_VNK/preview")
    },
    {
      titleName: 'వృషాద్రి (4వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/19hLNK63xjWrmNCRJPZ1n7QS2UIFqeO0u/preview")
    },
    {
      titleName: 'అంజనాద్రి (5వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/14-FxZbFazeiawvZiFIEdSfDITdQOiFAB/preview")
    },
    {
      titleName: 'నారాయణాద్రి (6వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1zXW4scaSk9YzutIKBeiy6KIbSTNZJ6Jo/preview")
    },
    {
      titleName: 'వెంకటాద్రి (7వ తరగతి)',
      pdfLink: this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/11qAF-TW3Jgxo-l1eveaZWGgVc5IZ7Fhd/preview")
    },
  ];

    this.pdfFileLink = this.sanitizer.bypassSecurityTrustResourceUrl("https://drive.google.com/file/d/1971wj0nhGNYvsypnNWYmPxY-fjtfgy02/preview")


   }

  incrementCounter(i: number) {
    this.currentCount = i;
  }

  ngOnInit(): void {
  }

}
