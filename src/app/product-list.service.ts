import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private readonly productListDataUrl = "/data.json";
  constructor(private readonly _http:HttpClient) { }

  GetProdouctList():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.productListDataUrl);
  } 
}
