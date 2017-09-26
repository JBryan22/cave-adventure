import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartRoomComponent } from './start-room/start-room.component';
import { EndRoomComponent } from './end-room/end-room.component';
import { FriendlyRoomComponent } from './friendly-room/friendly-room.component';
import { FightRoomComponent } from './fight-room/fight-room.component';
import { DiscoveryRoomComponent } from './discovery-room/discovery-room.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartRoomComponent
  },
  {
    path: 'end-room',
    component: EndRoomComponent
  },
  {
    path: 'friendly/:encounter',
    component: FriendlyRoomComponent
  },
  {
    path: 'fight/:encounter',
    component: FightRoomComponent
  },
  {
    path: 'discovery/:encounter',
    component: DiscoveryRoomComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
