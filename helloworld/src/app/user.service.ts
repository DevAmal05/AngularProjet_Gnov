import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>

  constructor(private db:AngularFireDatabase) {

    this.userList = db.list('users');

   }

   getUsers(): Observable<any> {
    return this.db.list('users').snapshotChanges();
   }

  

   createUser(user:User) {
    this.userList.push({
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
      cin: user.cin
    }).catch(error =>{
      console.error(error)
    })

   }
}
