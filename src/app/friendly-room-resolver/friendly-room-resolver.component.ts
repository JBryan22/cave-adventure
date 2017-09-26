import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendly-room-resolver',
  templateUrl: './friendly-room-resolver.component.html',
  styleUrls: ['./friendly-room-resolver.component.css']
})
export class FriendlyRoomResolverComponent implements OnInit {
  resolverNumber: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.resolverNumber = urlParameters['number'];
    });
  }

}
