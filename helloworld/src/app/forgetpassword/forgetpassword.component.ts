import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [RouterModule,RouterOutlet,FormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css'
})
export class ForgetpasswordComponent {
  errorMsg: any;
email:string;

  constructor(private authservice:AuthService, private router:Router) {}

  ngOnInit(): void {

  }

  forgetPassword(email:string) {
    this.authservice.resetPassword(email).then(
      () => {
        this.router.navigate(['/'])
      },
      (error) => {
        this.errorMsg=error;
      }
    )
  }

}
