import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private auth:AuthService){}
/*
  register() {
    const email
    const password
    this.auth.createNewUser(email,password).then(
      () => {

        this.router.navigate(['/login'])
      }
    )
  }
    */
   
}
