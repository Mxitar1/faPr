

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';

import { HomComponent } from './components/hom/hom.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { ContactComponent } from './components/contact/contact.component';
import { HederComponent } from './components/heder/heder.component';
import { HedImgComponent } from './components/hed-img/hed-img.component';
import { ImijsComponent } from './components/imijs/imijs.component';
import {AppRoutingModule} from './rutModel';
import { FuterComponent } from './components/futer/futer.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MapComponent } from './components/map/map.component';
import {AlertModule, CarouselModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import { RatingComponent } from './components/rating/rating.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { Pej1Component } from './components/pej1/pej1.component';





@NgModule({
  declarations: [
    AppComponent,
    HomComponent,
    AbautComponent,
    ContactComponent,
    HederComponent,
    HedImgComponent,
    ImijsComponent,
    FuterComponent,
    SubscribeComponent,
    TestimonialsComponent,
    MapComponent,
    RatingComponent,
    Pej1Component,



  ],
  imports: [


      RatingModule.forRoot(),
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AlertModule.forRoot(),
      CarouselModule.forRoot(),
      BrowserModule,
      FormsModule,
      RouterModule,
      AppRoutingModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBf8T-0cRn2jWHM7Czb7dQZROW1n9shqIM'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
