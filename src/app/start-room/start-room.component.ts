import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-start-room',
  templateUrl: './start-room.component.html',
  styleUrls: ['./start-room.component.css'],
  providers: [PlayerService]
})
export class StartRoomComponent implements OnInit {

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }

  createNewPlayer(name: string) {
    console.log('inside component method');
    this.playerService.newPlayer(name);
  }

  beginButton() {
    let roomString: string;
    let roomEncounterRandomizer = Math.floor(Math.random() * 3) + 1;
    let randomizer:number = Math.floor(Math.random() * 3) + 1;
    switch (randomizer) {
      case 1:
        roomString = 'friendly';
        break;
      case 2:
        roomString = 'discovery';
        break;
      case 3:
        roomString = 'fight';
        break;
    }
    this.router.navigate([roomString, roomEncounterRandomizer]);
  }
}
