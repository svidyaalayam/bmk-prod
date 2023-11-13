import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { LogoutComponent } from './component/auth/logout/logout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { RegstudentComponent } from './component/auth/regstudent/regstudent.component';
import { RegteacherComponent } from './component/auth/regteacher/regteacher.component';
import { HomeComponent } from './component/home/home.component';
import {WorksheetsComponent} from './component/lessons/worksheets/worksheets.component';
import {GrammerComponent} from './component/lessons/grammer/grammer.component';
import {BooksComponent} from './component/lessons/books/books.component';
import {CurriculumComponent} from './component/curriculum/curriculum.component';
import {LekhiniComponent} from './component/lessons/lekhini/lekhini.component';
import {FindlettersComponent} from './component/games/findletters/findletters.component';
import {ColorgameComponent} from './component/games/colorgame/colorgame.component';
import {NumbergameComponent} from './component/games/numbergame/numbergame.component';
import {WeekdaygameComponent} from './component/games/weekdaygame/weekdaygame.component';
import {GamefruitsComponent} from './component/games/gamefruits/gamefruits.component';
import { SabdamGameComponent } from './component/games/sabdam-game/sabdam-game.component';
import { VerifyEmailComponent } from './component/auth/verify-email/verify-email.component';
import { ResetPasswordComponent } from './component/auth/reset-password/reset-password.component';
import { StudentDataComponent } from './component/student/student-data/student-data.component';
import { AdminpanelComponent } from './component/admin/adminpanel/adminpanel.component';
import { CheckusersComponent } from './component/admin/checkusers/checkusers.component';
import { ClasslistComponent } from './component/admin/classlist/classlist.component';
import { TeacherDataComponent } from './component/teacher/teacher-data/teacher-data.component';


import { authGuard } from './guards/auth.guard';






const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component : HomeComponent},  
  {path: 'curriculum', component: CurriculumComponent},
  /*{path: 'varnamaala', component: LekhiniComponent, canActivate:[LoginGuard]},*/
  {path: 'varnamaala', component: LekhiniComponent, canActivate: [authGuard]},
  {path: 'identify', component: FindlettersComponent, canActivate: [authGuard]}, 
  {path: 'colorgame', component: ColorgameComponent, canActivate: [authGuard]},
  {path: 'numbergame', component: NumbergameComponent, canActivate: [authGuard]},
  {path: 'weekdaygame', component: WeekdaygameComponent, canActivate: [authGuard]},
  {path: 'fruitsgame', component: GamefruitsComponent, canActivate: [authGuard]},
  {path: 'sabdams', component: SabdamGameComponent, canActivate: [authGuard]},
  {path: 'login', component : LoginComponent}, 
  {path: 'logout', component : LogoutComponent, canActivate: [authGuard]},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'worksheets', component: WorksheetsComponent, canActivate: [authGuard]},
  {path: 'grammer', component: GrammerComponent, canActivate: [authGuard]}, 
  {path: 'books', component: BooksComponent, canActivate: [authGuard]},
  {path: 'verify', component : VerifyEmailComponent},
  {path: 'reset', component : ResetPasswordComponent},
  {path: 'register', component : RegisterComponent}, 
  {path: 'regstudent', component : RegstudentComponent},
  {path: 'regteacher', component : RegteacherComponent},
  {path: 'myworkspace', component : StudentDataComponent, canActivate: [authGuard]}, 
  {path: 'teacherdata', component : TeacherDataComponent, canActivate: [authGuard]},
  {path: 'adminpanel', component : AdminpanelComponent, canActivate: [authGuard]}, 
  {path: 'checkuser', component : CheckusersComponent, canActivate: [authGuard]},
  {path: 'classlist', component : ClasslistComponent, canActivate: [authGuard]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
