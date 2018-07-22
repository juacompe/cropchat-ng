import { Component, OnInit } from '@angular/core';
import Cats from '../../models/Cats';
import CATLIST from './mockcats';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  initialCats: any;

  constructor() {
    this.initialCats = CATLIST;
  }

  ngOnInit() {
  }

  cats() {
    return new Cats(this.initialCats).list 
  }

}
