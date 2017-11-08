import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { EventService } from '../event.service';
import { Event } from '../event.model'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  eventId: string;
  eventToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventId = urlParameters['id'];
    });
    this.eventToDisplay = this.eventService.getEventById(this.eventId);
  }

}
