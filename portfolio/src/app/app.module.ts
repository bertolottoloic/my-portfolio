import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { ResizeDirective } from './directives/resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PresentationPageComponent,
    ResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
