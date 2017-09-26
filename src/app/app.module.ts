import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { EndRoomComponent } from './end-room/end-room.component';
import { StartRoomComponent } from './start-room/start-room.component';
import { FightRoomComponent } from './fight-room/fight-room.component';
import { FriendlyRoomComponent } from './friendly-room/friendly-room.component';
import { DiscoveryRoomComponent } from './discovery-room/discovery-room.component';

@NgModule({
  declarations: [
    AppComponent,
    EndRoomComponent,
    StartRoomComponent,
    FightRoomComponent,
    FriendlyRoomComponent,
    DiscoveryRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
