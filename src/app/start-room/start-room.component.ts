import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-room',
  templateUrl: './start-room.component.html',
  styleUrls: ['./start-room.component.css']
})
export class StartRoomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
