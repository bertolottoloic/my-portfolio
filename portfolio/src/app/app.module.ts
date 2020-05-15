import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { ResizeDirective } from './directives/resize.directive';
import { TimelineComponent } from './timeline/timeline.component';
import { TraineeComponent } from './timeline/trainee/trainee.component';
import { ResizeTraineeDirective } from './directives/resize-trainee.directive';
import { AngularResizedEventModule } from 'angular-resize-event';
import { AppearDirective } from './directives/appear-directive.directive';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PresentationPageComponent,
    ResizeDirective,
    TimelineComponent,
    TraineeComponent,
    ResizeTraineeDirective,
    AppearDirective,
    SkillsListComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularResizedEventModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
