import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    localStorage.setItem('plan', JSON.stringify(this.productService.plan));
    /*alert(this.productService.plan?.type);
    console.log(this.productService.plan);*/
  }

}
