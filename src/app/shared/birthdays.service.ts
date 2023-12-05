import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class BirthdaysService {
  constructor(private fbap: FirebaseApp, private firestore: AngularFirestore, private firestorage: AngularFireStorage, public fireauth: AngularFireAuth) { }


  getAttendanceDates(){
    
  }



  //https://drive.google.com/file/d/1l3oLF0E72zPtI35EZfEJaSfBpcaKbUqj/view?usp=sharing
  //https://drive.google.com/uc?export=download&id=1l3oLF0E72zPtI35EZfEJaSfBpcaKbUqj
}
