import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BouttonNavBarComponent } from './boutton-nav-bar/boutton-nav-bar.component';
//import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {RouterLink} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { MenuOptionComponent } from './menu-option/menu-option.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BouttonNavBarComponent,
    HomePageComponent,
    MenuOptionComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterLink,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
