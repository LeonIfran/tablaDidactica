import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

// Firebase Auth
import { AngularFireAuthModule } from '@angular/fire/auth';

// Audio
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // Firebase Auth
    AngularFireAuthModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeAudio
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
