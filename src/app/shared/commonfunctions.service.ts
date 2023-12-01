import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionsService {

  constructor() { }

  getCurrentDate(): string {
    return this.getYearMonthDayForDate(new Date());
  }

  getDateFirestoreStamp(firestoreTimestamp: any):string {
    const dateObject: Date = firestoreTimestamp.toDate();
    return this.getYearMonthDayForDate(dateObject);

  }
  getYearMonthDayForDate(dateObject: Date): string{
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because months are zero-based
    const day = String(dateObject.getDate()).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;

  }

  formatDateInternational(inputDate: string): string {
    const dateObject = new Date(inputDate);
    
    const options = { day: 'numeric', month: 'long', year: 'numeric' } as Intl.DateTimeFormatOptions;
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(dateObject);
  
    return formattedDate;
  }

  formatDateWithoutYear(inputDate: string): string {

    const dateObject = new Date(inputDate);
    
    const options = { day: 'numeric', month: 'long' } as Intl.DateTimeFormatOptions;
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(dateObject);
  
    return formattedDate;
  }

  getRandomNumbers(maxNbr: number, reqdNbrs:number): number[]{

    let returnNbers: number[] = [];
    for (let index = 0; index < reqdNbrs; index++) {
      let rndNbr:number = Math.round(Math.random() * (maxNbr-index+1));
      let bNbrSelcted: boolean = true;
      while(bNbrSelcted) {
        bNbrSelcted = false;
        for(let j = 0; j < index; j++){
          if(returnNbers[j] === rndNbr){
            bNbrSelcted = true;
            rndNbr++;
            if(rndNbr>maxNbr)rndNbr=0;
          }
        }
      }
      returnNbers.push(rndNbr);      
    }

    return returnNbers;

  }
  
}
