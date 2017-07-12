import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileEditComponent} from './profile/profile-edit.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from './login/login.component';
import {ButtonModule, MenubarModule} from "primeng/primeng";
import {NavComponent} from './nav/nav.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ButtonModule,
    MenubarModule,
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProfileEditComponent,
    LoginComponent,
    NavComponent,
    EventsComponent],
  exports: [
    NavComponent
  ]
})
export class FeatureModule {
}
