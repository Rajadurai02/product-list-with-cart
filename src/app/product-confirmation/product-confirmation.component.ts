import { Component } from '@angular/core';
import { IProduct } from '../Product';
import { ProductListService } from '../product-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-confirmation.component.html',
  styleUrl: './product-confirmation.component.css'
})
export class ProductConfirmationComponent {

  confirmationOrderList: IProduct[] = [];

  constructor(private readonly _service: ProductListService) {

  }
  ngOnInit(){
    this._service.cartList$.subscribe(data => {
      this.confirmationOrderList = data;
    })
  }

  getTotalPrice(): number {
    return this.confirmationOrderList.reduce((total, product) => total + ( product.price * product.quantity), 0);
  }

  createNewOrder(){
    console.log('new order');
  }
}
