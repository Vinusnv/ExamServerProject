import { LoadquizComponent } from './pages/normaluser/loadquiz/loadquiz.component';
import { UserDashboardComponent } from './pages/normaluser/user-dashboard/user-dashboard.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { ViewquizQuestionComponent } from './pages/admin/viewquiz-question/viewquiz-question.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { AddQuizesComponent } from './pages/admin/add-quizes/add-quizes.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';

import { NormalGuard } from './Service/normal.guard';
import { AdminGuard } from './Service/admin.guard';
import { SidemenubarComponent } from './pages/sidemenubar/sidemenubar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { NormaldashboardComponent } from './pages/normaldashboard/normaldashboard.component';


const routes: Routes = [

  { path: "signup", component: SignupComponent },
  { path: "sidemenu", component: SidemenubarComponent, canActivate: [AdminGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: AdmindashboardComponent, children: [

      { path: "", component: WelcomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "viewcategories", component: ViewCategoryComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "quizes", component: ViewQuizesComponent },
      { path: "addquiz", component: AddQuizesComponent },
      { path: 'updatequiz/:qid', component: UpdateQuizComponent },
      { path: 'viewquestion/:qid/:title', component: ViewquizQuestionComponent },
      { path: 'addquestion/:qid/:title', component: AddQuestionComponent }



    ], canActivate: [AdminGuard]
  },
  { path: "normal", component: UserDashboardComponent, canActivate: [NormalGuard],children:[

    {path:":cId",component:LoadquizComponent }
  ] },
  
 
  { path: "**", component: LoginComponent },
  { path: ":catId", component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
