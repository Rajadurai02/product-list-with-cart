import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private readonly productListDataUrl = "/data.json";
  private readonly cartListAsSubject = new Subject<IProduct[]>();
  cartList$ = this.cartListAsSubject.asObservable();
  constructor(private readonly _http:HttpClient) { }

  GetProdouctList():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.productListDataUrl);
  } 

  UpdateProductCart(cartList: IProduct[]){
    this.cartListAsSubject.next(cartList);
  }
}
