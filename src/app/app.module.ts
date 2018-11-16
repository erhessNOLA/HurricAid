import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsComponent } from './news/news.component';
import { PinsComponent } from './pins/pins.component';
import { InfoComponent } from './info/info.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SignupComponent,
    LoginComponent,
    MapComponent,
    ProfileComponent,
    NewsComponent,
    PinsComponent,
    InfoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAettYu6SMK2uhkFNGTsQ_Wd2I1pZ-UMiY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }