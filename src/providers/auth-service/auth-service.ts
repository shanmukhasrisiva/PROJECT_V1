import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

//export class User {
  //name: string;
  //email: string;
 
  //constructor(name: string, email: string) {
   // this.name = name;
   // this.email = email;
  //}
//}

@Injectable()
export class AuthServiceProvider {

  private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}
 
  public login(credentials) {
   // if (credentials.email === null || credentials.password === null) {
     // return Observable.throw("Please insert credentials");
   // } else {
     // return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
       // let access = (credentials.password === "pass" && credentials.email === "bala@gmail.com");
        //this.currentUser = new User('BALA', 'bala@gmail.com');
       // observer.next(access);
       // observer.complete();
      //});
   // }

   //console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
  }

  //public getUserInfo() : User {
   // return this.currentUser;
  //}
 
  public logout() {
    return Observable.create(observer => {
    //  this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  //constructor(public http: HttpClient) {
   // console.log('Hello AuthServiceProvider Provider');
 // }

}
