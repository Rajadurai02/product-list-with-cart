import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { IProduct } from '../Product';
import { CartComponent } from '../cart/cart.component';
import { ProductConfirmationComponent } from '../product-confirmation/product-confirmation.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, CartComponent, ProductConfirmationComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList:any = [];
  cartList:any = [];
  currentDevice:string = "desktop";
  constructor(private readonly _productListService:ProductListService, @Inject(PLATFORM_ID) private platformId: object) {
    
  }

  ngOnInit(){
    this.getProductList();
    if (isPlatformBrowser(this.platformId)) {
      // This block will only run in the browser
      this.checkDevice();
      window.addEventListener('resize', this.checkDevice.bind(this));
    }
  }


  getProductList(){
    this._productListService.GetProdouctList().subscribe(data =>{
      this.productList = data;
    });
  }

  selectProduct(product: IProduct){
    product.quantity = 1;
    this.cartList.push(product);
  }

  increaseProductQuantity(productCategory: string){
    const selectedProduct = this.cartList.find((p: IProduct) => p.category === productCategory);
    if(selectedProduct){
      selectedProduct.quantity += 1;
    }
  }

  decreaseProductQuantity(productCategory: string){
    const selectedProduct = this.cartList.find((p: IProduct) => p.category === productCategory);
    if(selectedProduct){
      selectedProduct.quantity -= 1;
      if(selectedProduct.quantity === 0){
        this.cartList = this.cartList.filter((p : IProduct) => p.category !== productCategory);
        this._productListService.UpdateProductCart(this.cartList);
      }
    }
  }

  createNewOrder(createNewOrder : boolean){
    if(createNewOrder){
      this.cartList = [];
      this.getProductList();
    }
    const bodyEle = document.body;
      if (bodyEle) {
        bodyEle.classList.remove('modal-open');
      }
  }

  checkDevice(){
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      this.currentDevice = 'mobile';
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      this.currentDevice = 'tablet';
    } else {
      this.currentDevice = 'desktop';
    }
  }
}
