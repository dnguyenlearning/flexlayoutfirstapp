import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { UserAppComponent } from './components/user-app/user-app.component';
import { ZaloAppComponent } from './components/zalo-app/zalo-app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatButtonModule,MatInputModule,MatToolbarModule,MatListModule ,MatIconModule} from '@angular/material';
import { DescriptionComponent } from './components/description/description.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    UserAppComponent,
    ZaloAppComponent,
    ContactFormComponent,
    FooterComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
