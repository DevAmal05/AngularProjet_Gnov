import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList: AngularFireList<any>
  listuser: User[] = [];
  constructor(private db:AngularFireDatabase, private userservice:UserService) {
    this.userList = db.list('users');
  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(  (results) => {
      this.listUsers(results)
    })
  }

  listUsers(entries: any[]) {
    this.listuser = [];
    entries.forEach(element => {
      let y = element.payload.toJSON()
      y["$key"] = element.key 
      this.listuser.push(y as User)
    })
    console.log(this.listuser);


  }
}
