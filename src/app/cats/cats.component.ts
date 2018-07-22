import { Component, OnInit } from '@angular/core';
import Cats from '../../models/Cats';
import { CatlistService } from '../catlist.service';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  initialCats: any;

  constructor(private catlistService: CatlistService) {}

  ngOnInit() {
    this.catlistService.getCats().forEach((cats) => {
      this.initialCats = cats;
    });
  }

  cats() {
    return new Cats(this.initialCats).list 
  }

}
