import { Component, Input, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  @Input()
  plan = '2'

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.getTiers();
  }

  select__tier(){
    this.productService.select__tier(this.plan);
  }

  getTiers() {
    this.productService.getProducts().subscribe(
      res => {
        this.productService.tiers = res;
      },

      err => {
        console.log(err);
      }
    )
  }

}
