import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productList:any = [];
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
}
