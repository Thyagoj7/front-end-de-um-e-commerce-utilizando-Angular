import { Input, Pipe } from '@angular/core';
import { Component, OnInit } from '@angular/core';
//import { truncate } from 'fs';
import { BookstoreAppComponent } from './model/Book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Pipe({
    name: 'truncate'
  })
  @Input()
  livro!:BookstoreAppComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
