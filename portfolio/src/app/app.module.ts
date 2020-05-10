import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PresentationPageComponent,
    ResizeDirective,
    TimelineComponent,
    TraineeComponent,
    ResizeTraineeDirective,
    AppearDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
