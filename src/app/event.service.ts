import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
  }

  getEvents(){
    return this.events;
  }

  addEvent(newEvent: Event){
    this.events.push(newEvent);
  }

  getEventById(eventId: string){
    return this.database.object('events/' + eventId);
  }

  updateEvent(localUpdatedEvent){
    var eventEntryInFirebase = this.getEventById(localUpdatedEvent.$key);
    eventEntryInFirebase.update({
      // image:    localUpdatedEvent.image,
      title:    localUpdatedEvent.title,
      date:     localUpdatedEvent.date,
      // time:     localUpdatedEvent.time,
      location: localUpdatedEvent.location,
      address:  localUpdatedEvent.address,
      city:     localUpdatedEvent.city,
      state:    localUpdatedEvent.state,
      zip:      localUpdatedEvent.zip,
      description: localUpdatedEvent.description,
      organizer:   localUpdatedEvent.organizer,
      organizerWebsite: localUpdatedEvent.organizerWebsite,
      organizerInfo:  localUpdatedEvent.organizerInfo
    });
  }

  deleteEvent(localEventToDelete){
    var eventEntryInFirebase = this.getEventById(localEventToDelete.$key);
    eventEntryInFirebase.remove();
  }

}
