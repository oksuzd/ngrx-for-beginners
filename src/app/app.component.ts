import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { clear, countSelector, decrease, increase, updatedAtSelector } from "./reducers/counter";
import { map } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  updatedAt$ = this.store.select(updatedAtSelector);
  cannotDecrease$ = this.count$.pipe(map(count => count <= 0));

  constructor(private store:Store) {
  }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}

