import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProfileEditComponent} from "./profile/profile-edit.component";
import {LoginComponent} from "./login/login.component";

export const appRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/edit', component: ProfileEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: '**', component: HomeComponent}
];
