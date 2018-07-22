import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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
  catsRef: AngularFireList<Cat>
  constructor(private db: AngularFireDatabase) {
    this.catsRef = db.list<Cat>("cat")
    this.cats = this.catsRef.valueChanges();
  }
  getCats() {
    return this.cats;
  }
  pushNewCat(newCat) {
    return this.catsRef.push(newCat);
  }
}
