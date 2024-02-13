import { Component,Input } from '@angular/core';
import { Product } from '../../Model/Product';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  
  @Input() productlistComp:ProductlistComponent=undefined;
  product:Product;

  // lifecycle hook
  ngOnInit(){
     this.product=this.productlistComp.selectedProduct;
  }
}
