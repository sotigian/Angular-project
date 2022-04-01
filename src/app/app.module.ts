import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialDemoComponent } from './angular-material-demo/angular-material-demo.component';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatRadioModule} from '@angular/material/radio'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    ContactFormComponent,
    PostsComponentComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TeamComponent,
    ContactComponent,
    AngularMaterialDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'our-team',
        component: TeamComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'posts',
        component: PostsComponentComponent
      },
      {
        path: 'angular-material',
        component: AngularMaterialDemoComponent
      }
      

    ]),
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
