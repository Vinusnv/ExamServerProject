import { SlugifyPipe } from './slugify.pipe';
import { authInterceptorProvider } from './Service/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';

import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SidemenubarComponent } from './pages/sidemenubar/sidemenubar.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmindashboardComponent } from './pages/admindashboard/admindashboard.component';
import { NormaldashboardComponent } from './pages/normaldashboard/normaldashboard.component';
import { AdminsidebarComponent } from './pages/adminsidebar/adminsidebar.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewQuizesComponent } from './pages/admin/view-quizes/view-quizes.component';
import { AddQuizesComponent } from './pages/admin/add-quizes/add-quizes.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewquizQuestionComponent } from './pages/admin/viewquiz-question/viewquiz-question.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    ErrorpageComponent,
    HomeComponent,
    ProfileComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomeComponent,
    SidemenubarComponent,
    LoginComponent,
    AdmindashboardComponent,
    NormaldashboardComponent,
    AdminsidebarComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewQuizesComponent,
    AddQuizesComponent,
    UpdateQuizComponent,
    ViewquizQuestionComponent,
    SlugifyPipe,
    AddQuestionComponent
  
 
   
  
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
    
    
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
