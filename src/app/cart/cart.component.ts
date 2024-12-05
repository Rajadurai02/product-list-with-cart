import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() cartList: IProduct[] = [];
  constructor() {}

  getTotalPrice(): number {
    return this.cartList.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }

  cancelProduct(productCategory: string) {
    const selectedProduct = this.cartList.find(
      (p: IProduct) => p.category === productCategory
    );
    if (selectedProduct) {
      selectedProduct.quantity = 0;
      this.cartList = this.cartList.filter(
        (p: IProduct) => p.category !== productCategory
      );
    }
  }

  confirmOrder() {
    const bodyEle = document.body;
      if (bodyEle) {
        bodyEle.classList.add('modal-open');
        this.scrollToTop();
      }
    const confirmationPopUp = document.getElementById('confirmationPopUp');
    if (confirmationPopUp) {
      confirmationPopUp.classList.add('show');
      
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    // For older browsers or fallback
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
}
