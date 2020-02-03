import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  isAuth = false;

  signIn() {
    return new Promise(
      (resolve, reject) => {
       
            this.isAuth = true;
            resolve(true);
            reject(false);
           
      }
    );
  }

  signOut() {
    this.isAuth = false;
  }
}