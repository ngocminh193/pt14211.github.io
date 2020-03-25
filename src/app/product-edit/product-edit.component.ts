import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(data => {
      let { productID } = data;
      this.productService.getProduct(productID).subscribe(data => this.product = data);
    })
  }
  editProduct(){
    console.log(this.product);
     this.productService.updateProduct(this.product).subscribe(() => this.router.navigateByUrl('/product'));
  }

}
