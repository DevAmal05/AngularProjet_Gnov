import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { UsersComponent } from './users/users.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [

    {path:'', component:LoginComponent},

    {path:'test', component:TestComponent},

    {path:'register',component:RegisterComponent},

    {path:'users',component:UsersComponent},

    {path:'forgetpassword',component:ForgetpasswordComponent},

    {path:'add-user', component:AddUserComponent},














    {path:'**',component:Page404Component}

  
];
