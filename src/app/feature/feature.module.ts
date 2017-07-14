import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileEditComponent} from './profile/profile-edit.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from './login/login.component';
import {ButtonModule, MenubarModule, PanelModule, TabViewModule} from "primeng/primeng";
import {NavComponent} from './nav/nav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EventDetailComponent} from "./eventAdministrations/event-detail.component";
import {EventsComponent} from "./eventAdministrations/events.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    TabViewModule,
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProfileEditComponent,
    LoginComponent,
    NavComponent,
    EventsComponent,
    EventDetailComponent],
  exports: [
    NavComponent
  ]
})
export class FeatureModule {
}
