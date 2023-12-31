import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { RegisterComponent } from './component/auth/register/register.component';

import { LoginComponent } from './component/auth/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HomeComponent } from './component/home/home.component';
import { CurriculumComponent } from './component/curriculum/curriculum.component';
import { DasturiComponent } from './component/lessons/dasturi/dasturi.component';
import { FindlettersComponent } from './component/games/findletters/findletters.component';
import { GamefruitsComponent } from './component/games/gamefruits/gamefruits.component';
import { GrammerComponent } from './component/lessons/grammer/grammer.component';
import { LekhiniComponent } from './component/lessons/lekhini/lekhini.component';
import { MediaComponent } from './component/others/media/media.component';
import { NumbergameComponent } from './component/games/numbergame/numbergame.component';
import { PadamuluComponent } from './component/lessons/padamulu/padamulu.component';
import { PoemsComponent } from './component/lessons/poems/poems.component';
import { PrakatanaluComponent } from './component/others/prakatanalu/prakatanalu.component';
import { PrepreCoordsComponent } from './component/others/prepre-coords/prepre-coords.component';
import { SabdamGameComponent } from './component/games/sabdam-game/sabdam-game.component';
import { TelwordsComponent } from './component/lessons/telwords/telwords.component';
import { WeekdaygameComponent } from './component/games/weekdaygame/weekdaygame.component';
import { WorksheetsComponent } from './component/lessons/worksheets/worksheets.component';
import { BooksComponent } from './component/lessons/books/books.component';
import { ColorgameComponent } from './component/games/colorgame/colorgame.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { VerifyEmailComponent } from './component/auth/verify-email/verify-email.component';
import { ResetPasswordComponent } from './component/auth/reset-password/reset-password.component';
import { StudentDataComponent } from './component/student/student-data/student-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { AdminpanelComponent } from './component/admin/adminpanel/adminpanel.component';
import { CheckusersComponent } from './component/admin/checkusers/checkusers.component';
import { ClasslistComponent } from './component/admin/classlist/classlist.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RegstudentComponent } from './component/auth/regstudent/regstudent.component';
import { RegteacherComponent } from './component/auth/regteacher/regteacher.component';
import { PersonaldetailsComponent } from './component/student/personaldetails/personaldetails.component';
import { SubscriptionsComponent } from './component/student/subscriptions/subscriptions.component';
import { StudentclasesComponent } from './component/student/studentclases/studentclases.component';
import { StudenthomeworkComponent } from './component/student/studenthomework/studenthomework.component';
import { StudentattendanceComponent } from './component/student/studentattendance/studentattendance.component';
import { WelcomeMessageComponent } from './component/student/welcome-message/welcome-message.component';
import { TeacherDataComponent } from './component/teacher/teacher-data/teacher-data.component';
import { TeacherclasesComponent } from './component/teacher/teacherclases/teacherclases.component';
import { TeachercalanderComponent } from './component/teacher/teachercalander/teachercalander.component';
import { StudentcalanderComponent } from './component/student/studentcalander/studentcalander.component';
import { VerbsComponent } from './component/sanskrit/verbs/verbs.component';
import { NounsComponent } from './component/sanskrit/nouns/nouns.component';
import { SentencesComponent } from './component/sanskrit/sentences/sentences.component';
import { IgcseComponent } from './component/sanskrit/igcse/igcse.component';
import { EpicsComponent } from './component/sanskrit/epics/epics.component';
import { ScrollHeaderComponent } from './component/others/scroll-header/scroll-header.component';
import { ActionsComponent } from './component/admin/actions/actions.component';
import { RamayanamComponent } from './component/others/ramayanam/ramayanam.component';
import { AttendanceComponent } from './component/admin/attendance/attendance.component';
import { BasicsanComponent } from './component/tutorials/basicsan/basicsan.component';
import { BasictelComponent } from './component/tutorials/basictel/basictel.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CurriculumComponent,
    DasturiComponent,
    FindlettersComponent,
    GamefruitsComponent,
    GrammerComponent,
    LekhiniComponent,
    MediaComponent,
    NumbergameComponent,
    PadamuluComponent,
    PoemsComponent,
    PrakatanaluComponent,
    PrepreCoordsComponent,
    SabdamGameComponent,
    TelwordsComponent,
    WeekdaygameComponent,
    WorksheetsComponent,
    BooksComponent,
    ColorgameComponent,
    LogoutComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    StudentDataComponent,
    AdminpanelComponent,
    CheckusersComponent,
    ClasslistComponent,
    FilterPipe,
    RegstudentComponent,
    RegteacherComponent,
    PersonaldetailsComponent,
    SubscriptionsComponent,
    StudentclasesComponent,
    StudenthomeworkComponent,
    StudentattendanceComponent,
    WelcomeMessageComponent,
    TeacherDataComponent,
    TeacherclasesComponent,
    TeachercalanderComponent,
    StudentcalanderComponent,
    VerbsComponent,
    NounsComponent,
    SentencesComponent,
    IgcseComponent,
    EpicsComponent,
    ScrollHeaderComponent,
    ActionsComponent,
    RamayanamComponent,
    AttendanceComponent,
    BasicsanComponent,
    BasictelComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, 
    provideFirebaseApp(() => initializeApp(environment.firebaseProductionebApp)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), 
    provideDatabase(() => getDatabase()),  
    FormsModule, BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebaseProductionebApp}],
  bootstrap: [AppComponent]
})
export class AppModule { }

//firebasePathasala01
//firebaseProductionebApp
