import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route:  ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  
  getProduct(){
    this.route.params.subscribe(data => {
      let { productID } = data;
      this.productService.getProduct(productID).subscribe(data => this.product = data);
    })
  }

}