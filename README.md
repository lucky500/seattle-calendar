# SeattleCalendar

##### _Epicodus Group Project in Angular and Electron, November 9, 2017_

## About

_Seattle Calendar like the name implies is a Seattle local calendar for events. Users can add their events for free, add them to categories, edit events and delete events._


## Setup/Installation Requirements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

* _Clone directory from github using git_

* __NOTE: These instructions assume you already have Node installed.__

### Installing the necessary database:

* _In your terminal enter:_ ``` $ npm install ```

* _In your terminal enter:_ ``` $ bower install ```

* _Change your firebase read/write rules to true_

* _Add a api-key.ts file to your src/app folder, and add the following block of code with your API info from Firebase _

 ```typescript
  export const environment = {
    production: false,
    firebase: {
      apiKey: "[YOUR-FIREBASE-API-KEY]",
      authDomain: "[YOUR-FIREBASE-NAME].firebaseapp.com",
      databaseURL: "[YOUR-FIREBASE-URL]",
      projectId: "[YOUR-FIREBASE-ID]",
      storageBucket: "",
      messagingSenderId: "[YOUR-SENDER-ID]"
    }
  };```

Before running the tests make sure you are serving the app via `ng serve`.


## 🐛Known Bugs🐛

_There are no known bugs at this time._

## Support and contact details

## Further Development

* _At the current state, the app is not complete._

* _Google Maps API should be add to the details page_

* _Authentication needs to be separate, whereas A user, should only have access to ther own ads, and admin should have access to add/delete all adds._

* _A calendar should be added to the home page, where ads can be filtered by date_

## Technologies Used

_HTML, CSS, Bootstrap, JavaScript, Angular, Firebase_

## Contributors

[Luciano Oliveira](https://github.com/lucky500)
[Bably](https://github.com/bablyseattle)
[Erik](https://github.com/Erikzaksf)
[Safiy Cham](https://github.com/safiyc)
