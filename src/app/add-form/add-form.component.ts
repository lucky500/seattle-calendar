import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  submitForm(form){
    this.eventService.addEvent(form.value);
  }

}
