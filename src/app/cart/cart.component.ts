import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  addedProducts = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentProducts.subscribe(products => this.addedProducts = products);
  }

}
