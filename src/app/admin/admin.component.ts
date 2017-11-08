import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  // submitForm(image: string, title: string, date: string, time: string, location: string, address: string, city: string, state: string, zip: string, description: string, organizer: string, organizerWebsite: string, organizerInfo: string,){
  //   var newEvent: Event = new Event(image, title, date, time, location, address, city, state, zip, description, organizer, organizerWebsite, organizerInfo);
  //   this.eventService.addEvent(newEvent);
  // }
}
