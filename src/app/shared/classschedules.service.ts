import { Injectable } from '@angular/core';
import { Classschedule  } from '../model/classschedule';
import { FirebaseApp } from '@angular/fire/app';
import { Observable, map } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, query, where, collection, getFirestore, doc, setDoc, getDoc, getDocs } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class ClassschedulesService {

  constructor(private fbap: FirebaseApp, private firestore: AngularFirestore) { }

  // Create enrollment
  async createClassSchedule(data: Classschedule): Promise<any> {
    if(data.dataId !==''){
      return await setDoc(doc(getFirestore(this.fbap), 'schedules', data.dataId), data);
    }
    else{
      const enrollRef = doc(collection(getFirestore(this.fbap), 'schedules'));
      data.dataId = enrollRef.id;
      return await setDoc(enrollRef, data);
    }      
  }  
  // Read
  getAllSchedulesForClass(classID:string): Observable<Classschedule[]> {    
    return this.firestore.collection<any>('schedules', ref => ref.where('classid', '==', classID)).valueChanges();
  }
}
