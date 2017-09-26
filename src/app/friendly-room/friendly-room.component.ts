import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendly-room',
  templateUrl: './friendly-room.component.html',
  styleUrls: ['./friendly-room.component.css'],
  providers: [PlayerService]
})
export class FriendlyRoomComponent implements OnInit {
  roomNumber: string;

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.roomNumber = urlParameters['encounter'];
    });
  }

  helpOldMan() {
    let resolutionNumber = Math.floor(Math.random() * 3) + 1;
    this.router.navigate(['friendly', 'resolution', resolutionNumber])
  }

  continueSearching() {
    let resolutionNumber = Math.floor(Math.random() * 6) + 4;
    this.router.navigate(['friendly', 'resolution', resolutionNumber])
  }

}
