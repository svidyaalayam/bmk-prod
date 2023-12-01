import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { addDoc, query, where, collection, getFirestore, doc, setDoc, getDoc, getDocs } from "firebase/firestore";
import { Userdata } from '../model/userdata';
import { Classdata } from '../model/classdata';
import { Enrollment  } from '../model/enrollment';


import { Observable, map } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  constructor(private fbap: FirebaseApp, private firestore: AngularFirestore, private firestorage: AngularFireStorage, public fireauth: AngularFireAuth) { }



  uploadPhoto(file: File, filePath: string): Promise<string> {

    const storageRef = this.firestorage.ref(filePath);
    const uploadTask = storageRef.put(file);

    return new Promise((resolve, reject) => {
      uploadTask.then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          // Save the downloadURL to your user profile in Firebase Authentication or Firestore
          resolve(downloadURL);
        }).catch(error => {
          reject(error);
        });
      });
    });
  }  

  getFireStoreAvailability(): Promise<boolean> {
    return new Promise((resolve) => {
      this.firestore.collection('users').get().subscribe(
        (snapshot) => {
          resolve(!snapshot.empty);
        },
        (error) => {
          console.error('Firestore is not available:', error.message);
          resolve(false);
        }
      );

    })
  }


    // Create
    async create(data: any): Promise<any> {
      return await setDoc(doc(getFirestore(this.fbap), 'users', data.loginid), data);
    }

    // GetStudent
    async GetStudent(loginName: string): Promise<any> {
      const docRef = doc(getFirestore(this.fbap), "users", loginName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        return null;
      }      
    }

    // Read
    getAllUsers(): Observable<any[]> {
        return this.firestore.collection<Userdata>('users').valueChanges().pipe(
          map(users => users.map(student => ({loginid: student.loginid, name: student.name, surname: student.surname, gender: student.gender })))
        );
    }

    // Read
    getAllAcceptedActiveUsersOfType(filterValue:number): Observable<any[]> {
      return this.firestore.collection<Userdata>('users', ref => ref.where('usertype', '==', filterValue).where('accepted', '==', true).where('accountsuspended', '==', false)).valueChanges().pipe(
        map(users => users.map(student => ({loginid: student.loginid, name: student.name, surname: student.surname, gender: student.gender })))
      );
    }

    // Read
    getAllUsersOfType(filterValue:number): Observable<any[]> {
      return this.firestore.collection<Userdata>('users', ref => ref.where('usertype', '==', filterValue)).valueChanges().pipe(
        map(users => users.map(student => ({loginid: student.loginid, name: student.name, surname: student.surname, gender: student.gender })))
      );
    }

    getAllUsersOfFilter(filterType:string, filterValue:string): Observable<any[]> {
      return this.firestore.collection<Userdata>('users', ref => ref.where(filterType, '==', filterValue)).valueChanges().pipe(
        map(users => users.map(student => ({loginid: student.loginid, name: student.name, surname: student.surname, gender: student.gender })))
      );
    }

    // Read
    getAllNewRegs(): Observable<any[]> {
      return this.firestore.collection<Userdata>('users', ref => ref.where('accepted', '==', false)).valueChanges().pipe(
        map(users => users.map(student => ({loginid: student.loginid, name: student.name, surname: student.surname, gender: student.gender })))
      );
    }

    // Read
    getAllSuspended(): Observable<any[]> {
      return this.firestore.collection<Userdata>('users', ref => ref.where('accountsuspended', '==', true)).valueChanges().pipe(
        map(users => users.map(student => ({loginid: student.loginid, name: student.name, surname: student.surname, gender: student.gender })))
      );
    }

    // Read
    async getAllUsersOfType1(userType: number): Promise<any[]> {
      const usersRef = collection(getFirestore(this.fbap), 'users');
      const q = query(usersRef, where("usertype", "==", userType));
      const querySnapshot = await getDocs(q);

      const users: any[] = [];

      querySnapshot.forEach(student => {
        const user: any = {
          loginid: student.data()['loginid'], 
          name: student.data()['name'], 
          surname: student.data()['surname'], 
          gender: student.data()['gender']
        }
        users.push(user);
      });
      return users;
    }
        


  
    // Read
    getItems(): Observable<any[]> {
      return this.firestore.collection('users').valueChanges();
    }
  
    // Update
    update(id: string, data: any): Promise<void> {
      return this.firestore.collection('users').doc(id).update(data);
    }
  
    // Delete
    delete(id: string): Promise<void> {
      return this.firestore.collection('users').doc(id).delete();
    }

    // Read
    getStudentWithLoginId(loginName: string): Observable<any> {
      return this.firestore.collection('users', ref => ref.where('loginid', '==', loginName).limit(1))
      .valueChanges() ;
    }

    updateStudentWithLoginId(loginName: string, data: any): Observable<any> {
      return this.firestore.collection('users', ref => ref.where('loginid', '==', loginName).limit(1))
      .valueChanges() ;
    }

    // Classes related functions
    getAllClasses(): Observable<any[]> {      
      return this.firestore.collection('classes').valueChanges();
    }

    // GetStudent
    async GetClassWithID(classId: string): Promise<any> {
      const docRef = doc(getFirestore(this.fbap), "classes", classId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        // docSnap.data() will be undefined in this case
        return null;
      }      
    }

    // Create enrollment
    async createEnrolment(data: Enrollment): Promise<any> {
      if(data.enrolid !==''){
        return await setDoc(doc(getFirestore(this.fbap), 'enrollment', data.enrolid), data);
      }
      else{
        const enrollRef = doc(collection(getFirestore(this.fbap), 'enrollment'));
        data.enrolid = enrollRef.id;
        return await setDoc(enrollRef, data);
      }      
    }  
    // Read
    getAllEnrollmentsForUser(UserID:string): Observable<Enrollment[]> {
     
      return this.firestore.collection<any>('enrollment', ref => ref.where('sudentid', '==', UserID)).valueChanges();
    }
    // remove
    async removeEnrollmentsForUser(docRef: any): Promise<any> {
      if(docRef !==''){
        this.firestore.collection('enrollment').doc(docRef).delete();
      }
    } 



    // Create classes
    async createClass(data: any): Promise<any> {
      if(data.classid !==''){
        return await setDoc(doc(getFirestore(this.fbap), 'classes', data.classid), data);
      }
      else{
        const cityRef = doc(collection(getFirestore(this.fbap), 'classes'));
        data.classid = cityRef.id;
        return await setDoc(cityRef, data);
      }
      
    }  

    // Classes related functions
    getAllCourses(): Observable<any[]> {      
      return this.firestore.collection('courses').valueChanges();
    }
    
    //Functions for assigning to class
          // Read
          getAllClassesForUser(UserID:string): Observable<any[]> {
            return this.firestore.collection<Userdata>('classusers', ref => ref.where('loginid', '==', UserID)).valueChanges();
          }

          // Read
          getAllClassesForTeacher(UserID:string): Observable<any[]> {
            return this.firestore.collection<Userdata>('classteachers', ref => ref.where('loginid', '==', UserID)).valueChanges();
          }

          // Read
          getAllUsersNotInClassesList(ClassIDs:string[]): Observable<any[]> {
            return this.firestore.collection<Userdata>('classusers', ref => ref.where('classid', 'not-in', ClassIDs)).valueChanges();
          }
    
          // Read
          getAllUsersForClass(ClassID:string): Observable<any[]> {
            return this.firestore.collection<Userdata>('classusers', ref => ref.where('classid', '==', ClassID)).valueChanges();
          }

          // Read
          getAllTeachersForClass(ClassID:string): Observable<any[]> {
            return this.firestore.collection<Userdata>('classteachers', ref => ref.where('classid', '==', ClassID)).valueChanges();
          }
    
    
      // Create
      async createClassUsers(data: any, bIsTeacher: boolean): Promise<any> {
        let sTable: string = bIsTeacher ? 'classteachers': 'classusers';

        if(data.dataId !==''){
          return await setDoc(doc(getFirestore(this.fbap), sTable, data.dataId), data);
        }
        else{
          const cityRef = doc(collection(getFirestore(this.fbap), sTable));
          data.dataId = cityRef.id;
          return await setDoc(cityRef, data);
        } 
      } 

      // remove
      async removeClassUsers(docRef: any, bIsTeacher: boolean): Promise<any> {
        let sTable: string = bIsTeacher ? 'classteachers': 'classusers';

        if(docRef !==''){
        //  const docRef = doc(getFirestore(this.fbap), sTable, data.dataId);
          this.firestore.collection(sTable).doc(docRef).delete();
        }
      } 
}
