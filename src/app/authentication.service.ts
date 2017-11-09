import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;


  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword (email, password).then(value => {
      alert('Account created successfully.');
    })
    .catch(err => {
      alert("Account not created:" + err.message);
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      console.log("Logged in.");
    })
    .catch(err => {
      console.log("Unable to log in:", err.message);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
