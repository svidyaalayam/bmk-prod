import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { addDoc, query, where, collection, getFirestore, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { Userdata } from '../model/userdata';
import { Classdata } from '../model/classdata';


import { Observable, map } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class ClassusersService {

  constructor(private fbap: FirebaseApp, private firestore: AngularFirestore, private firestorage: AngularFireStorage, public fireauth: AngularFireAuth) { }

      // Read
      getAllClassesForUser(UserID:string): Observable<any[]> {
        return this.firestore.collection<Userdata>('classusers', ref => ref.where('loginid', '==', UserID)).valueChanges();
      }

      // Read
      getAllUsersForClass(ClassID:string): Observable<any[]> {
        return this.firestore.collection<Userdata>('classusers', ref => ref.where('classid', '==', ClassID)).valueChanges();
      }

      // Read not fully completed.
/*      getCountUsersForClass(ClassID:string): Observable<any[]> {

        const userDataCollection = this.firestore.collection<Userdata>('UserData', ref => ref.where('yourField', '==', 'yourValue'));

        userDataCollection.get()
        .subscribe(snapshot => {
          // Get the count of documents
          const count = snapshot.size;
          console.log(`Number of documents with the condition: ${count}`);
        }, error => {
          console.error('Error getting documents:', error);
        });

      }
*/

  // Create
  async createClassUsers(data: any): Promise<any> {
    if(data.dataId !==''){
      return await setDoc(doc(getFirestore(this.fbap), 'classusers', data.dataId), data);
    }
    else{
      const cityRef = doc(collection(getFirestore(this.fbap), 'classusers'));
      data.dataId = cityRef.id;
      return await setDoc(cityRef, data);
    }    
  }    
}
