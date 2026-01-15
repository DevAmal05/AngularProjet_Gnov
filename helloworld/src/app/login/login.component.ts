import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMsg: any;

  constructor(private fb:FormBuilder, private authservice:AuthService, private router:Router) {}

  title = "HelloWorld";
  title2= "222224335347636"
  test = true
  A = 5;
  B!:number;
condition: any
photo = "assets/image.jpg"
userList = ['Ahmed', 'Imen', 'Ali']

loginForm!:FormGroup;
ngOnInit(): void {
this.initForm();
}

initForm() {
  this.loginForm = this.fb.group({
    email: new FormControl('', [
      Validators.email,
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ])
  })
}

get email() {
  return this.loginForm.get('email')
}
get password() {
  return this.loginForm.get('password')
}

login() {
  const email=this.loginForm.get('email').value;
  const password=this.loginForm.get('password').value;

  this.authservice.signInUser(email,password).then(
  () => {
    this.router.navigate(['/users'])
  },
  (error) => {
    this.errorMsg=error
  }
)
}











}
