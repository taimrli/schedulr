import {Component, OnInit} from '@angular/core';
import {State} from "./core/reducers/index";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  navItems$: Observable<MenuItem[]>;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.navItems$ = this.store.select(s => s.nav.items);
  }

}
