export class Event {
  constructor (public image: string, public title: string,  public date: string, public time: string, public location: string, public address: string, public city: string, public state: string, public zip: string, public description: string, public categories: {}, public organizer: string, public orgagizerWebsite: string, public organizerInfo: string) {}
}
