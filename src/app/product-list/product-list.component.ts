import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../Product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList:any = [];
  selectedProducts: { [ key : string ] : boolean } = {};
  cartList:any = [];
  constructor(private readonly _productListService:ProductListService) {
    
  }

  ngOnInit(){
    this.getProductList();
  }

  getProductList(){
    this._productListService.GetProdouctList().subscribe(data =>{
      this.productList = data;
    });
  }

  selectProduct(product: IProduct){
    this.selectedProducts[product.category] = true;
    product.quantity = 1;
    this.cartList.push(product);
    this._productListService.UpdateProductCart(this.cartList);
  }

  increaseProductQuantity(productCategory: string){
    const selectedProduct = this.cartList.find((p: IProduct) => p.category === productCategory);
    if(selectedProduct){
      selectedProduct.quantity += 1;
    }
  }
}
