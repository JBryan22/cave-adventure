import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { EndRoomComponent } from './end-room/end-room.component';
import { StartRoomComponent } from './start-room/start-room.component';
import { FightRoomComponent } from './fight-room/fight-room.component';
import { FriendlyRoomComponent } from './friendly-room/friendly-room.component';
import { DiscoveryRoomComponent } from './discovery-room/discovery-room.component';
import { FriendlyRoomResolverComponent } from './friendly-room-resolver/friendly-room-resolver.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    EndRoomComponent,
    StartRoomComponent,
    FightRoomComponent,
    FriendlyRoomComponent,
    DiscoveryRoomComponent,
    FriendlyRoomResolverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
