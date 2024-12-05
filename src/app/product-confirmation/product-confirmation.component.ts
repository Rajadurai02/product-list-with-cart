import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../Product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-confirmation.component.html',
  styleUrl: './product-confirmation.component.css'
})
export class ProductConfirmationComponent {

  @Input() confirmationOrderList: IProduct[] = [];
  @Output() createNewOrderClicked = new EventEmitter<boolean>();

  getTotalPrice(): number {
    return this.confirmationOrderList.reduce((total, product) => total + ( product.price * product.quantity), 0);
  }

  createNewOrder(){
    const confirmationPopUp = document.getElementById('confirmationPopUp');
    if (confirmationPopUp) {
      confirmationPopUp.classList.remove('show');
      
    }
    this.createNewOrderClicked.emit(true);
  }
}
