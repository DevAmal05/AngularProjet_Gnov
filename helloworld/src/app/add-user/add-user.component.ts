import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterModule, FormsModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm: FormGroup;

  userList: AngularFireList<any>   
  cin:string;
  firstname:string;
  lastname:string;
  phone:string;
  constructor(private db:AngularFireDatabase, private router:Router) {

    this.userList = db.list('users')
  }


  ngOnInit(): void {

    this.addUserForm = new FormGroup({
      CIn: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]),
      Firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+"),
       
      ]),
      Lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),
      Phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ])
    });
  }


  get CIn(){
    return this.addUserForm.get('CIn')
  }
  get Firstname(){
    return this.addUserForm.get('Firstname')
  }
  get Lastname(){
    return this.addUserForm.get('Lastname')
  }
  get Phone(){
    return this.addUserForm.get('Phone')
  }


  AddUser(){
    
    let create = 'false';

    this.userList.push({
      cin: this.cin,
      firstname: this.firstname,
      lastname:  this.lastname,
      phone: this.phone
    }).then (added =>{
      this.router.navigate(['/users'])
    }).catch(error =>{
      console.error(error)
    })
    }

}
