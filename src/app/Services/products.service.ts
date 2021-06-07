import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tier } from '../Models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL = "http://localhost:3000/api/tiers";
  tiers: Tier[] | undefined;
  plan: Tier | undefined;

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<Tier[]>(this.API_URL);
  }

  showInfo(value:string) {
    let plan = this.tiers?.find(tier => tier.id == value);
    this.plan = plan;
  }

  select__tier(plan:string){
    this.showInfo(plan);
  }
}
