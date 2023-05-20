import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getProduct(){
    return this.http.get(`https://dummyjson.com/products`
    
    // {
    //   params:{
    //     api_key:``
    //   }
    // }
    )
  }

  getProductDetails(id:number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
