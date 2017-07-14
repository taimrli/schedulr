import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {FeatureModule} from "./feature/feature.module";
import {appRoutes} from "./feature/routes";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {RouterStoreModule} from '@ngrx/router-store';
import {initialState, reducer} from "./core/reducers/index";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./core/effects/auth";
import {AuthService} from "./core/services/auth.service";
import {EventEffects} from "app/core/effects/event";
import {DbService} from "./core/services/db.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    RouterModule.forRoot(
      appRoutes
    ),
    RouterStoreModule.connectRouter(),

    StoreModule.provideStore(reducer, initialState),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

    EffectsModule.run(AuthEffects),
    EffectsModule.run(EventEffects),

    CoreModule,
    SharedModule,
    FeatureModule
  ],
  providers: [
    AuthService,
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
