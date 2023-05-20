import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  //behaviour subject  0 is inizal value
  private counter =new BehaviorSubject(0);
  // HttpClient: any;


  // counterVal=this.counter.asObservable()


  constructor(private http:HttpClient ) { }

  getCounter(){
    //make key publice to behaviour subject
    return this.counter.asObservable()
   }
    

  setCounter (newVal:number){

    //use next fun. to update new value from behaviour subject
this.counter.next(newVal);

  }

  receveToCart(id:number){
    return this.http.get('https://dummyjson.com/products/'+id)
    // return this.http.get(`https://dummyjson.com/products/${id}`)
  }


  // getCartDetails(){
  //   return this.http.get('http://localhost:4200/cart')
  // }
public cartItemList:any=[]
public ProductList =new BehaviorSubject<any>([])

getProducts(){
  return this.ProductList.asObservable();

}

setProduct(Product:any){
  this.cartItemList.push(...Product);
  this.ProductList.next(Product)
}

addToCart(Product:any){
  this.cartItemList.push(Product);
  this.ProductList.next(this.cartItemList)
  this.getTotalPrice();
  console.log(this.cartItemList)

}

getTotalPrice():number{
  let grandTotal=0;
  this.cartItemList.map((a:any)=>{
    grandTotal +=a.total;
  })

  return grandTotal;
}

removeCartItem(Product:any){
  this.cartItemList.map((a:any,index:any)=>{
    if(Product.id===a.id){
      this.cartItemList.splice(index,1);
    }
  })

}

removeAllCart(){
  this.cartItemList=[]
  this.ProductList.next(this.cartItemList)

}
}
