import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../Product';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList : IProduct[] = [];
  constructor(private readonly _service : ProductListService) {
    
  }

  ngOnInit(){
    this._service.cartList$.subscribe(data => {
      this.cartList = data;
    })
  }

  getTotalPrice(): number {
    return this.cartList.reduce((total, product) => total + ( product.price * product.quantity), 0);
  }
}
