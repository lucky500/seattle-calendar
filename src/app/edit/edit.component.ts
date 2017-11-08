import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() selectedEvent;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  beginUpdatingEvent(eventToUpdate){
    this.eventService.updateEvent(eventToUpdate);
  }

  beginDeletingEvent(eventToDelete){
    if(confirm("Are you sure you want to delete this event?")){
      this.eventService.deleteEvent(eventToDelete);
    }
  }

}
