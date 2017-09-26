import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class PlayerService {
  player: Player;

  //FirebaseObjectObservable<any>;

  constructor(private database: AngularFireDatabase) {
  }

  newPlayer(name: string) {
    this.player = new Player(name);
    this.database.object('player').set(this.player);
  }


}
