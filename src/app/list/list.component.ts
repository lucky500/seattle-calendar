import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../event.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { EventService } from '../event.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [EventService]
})
export class ListComponent implements OnInit {
  events: FirebaseListObservable<any[]>
  currentRoute: string = this.router.url;


  constructor(private router: Router, private eventService: EventService) { }

  goToDetailPage(clickedEvent){
    this.router.navigate(['events', clickedEvent.$key]);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
