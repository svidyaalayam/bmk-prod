import { Injectable } from '@angular/core';
import { Classschedule  } from '../model/classschedule';
import { Classschedulestudent } from '../model/classschedulestudent'
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

 
  // Read
  getAllSchedulesStudentsForClass(scheduleID:string): Observable<Classschedulestudent[]> {    
    return this.firestore.collection<any>('schedulestudents', ref => ref.where('classScheduleid', '==', scheduleID)).valueChanges();
  }

      // Get or Create and Get
      async getClassScheduleStudent(scheduleId: string, studentId: string ): Promise<any> {
        const docRef = doc(getFirestore(this.fbap), "schedulestudents", scheduleId+studentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return docSnap.data();
        }

        const data: Classschedulestudent = {
          classScheduleid : scheduleId,
          studentid : studentId,
          present : 'Not marked',
          reasonAbsent : '',
          classworkunderstand : false,
          homeworksubmitted : false,
          studentcomment : '',
          teachercomment : ''
        }
      
        return await setDoc(doc(getFirestore(this.fbap), 'schedulestudents', scheduleId+studentId), data);
     
      }

        // Create enrollment
  async updateClassScheduleStudent(data: Classschedulestudent): Promise<any> {
      return await setDoc(doc(getFirestore(this.fbap), 'schedulestudents', data.classScheduleid+data.studentid), data);
  }
  
}
