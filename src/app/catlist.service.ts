import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase } from 'angularfire2/database';

export interface Cat {
  url: string;
  info: string;
  comment: string;
  createdAt: number;
}

@Injectable({
  providedIn: "root"
})
export class CatlistService {
  cats: Observable<Cat[]>;
  constructor(private db: AngularFireDatabase) {
    this.cats = db.list<Cat>("cat").valueChanges();
    console.log(this.cats);
  }
  getCats() {
    return this.cats;
  }
}
