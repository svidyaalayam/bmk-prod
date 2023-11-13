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
  
}
