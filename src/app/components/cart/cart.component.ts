import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  Counter !: number;
  requestsCart :any=[];
  grandTotal !:number


  constructor(private counterService: CounterService) {


  }

  ngOnInit() {
    this.counterService.getCounter().subscribe((res) => this.Counter = res);

    // this.getCartDetails()
    this.counterService.getProducts().subscribe((res)=>{
      this.requestsCart=res;
      this.grandTotal=this.counterService.getTotalPrice()

    })

  }


  decreseCounter() {

    if (this.Counter > 0) {
      this.counterService.setCounter(--this.Counter)
    }

  }

  increaseCounter() {
    this.counterService.setCounter(++this.Counter);
   
  }

//   getCartDetails(){
// this.counterService.getCartDetails().subscribe((res:any)=>{
//   console.log(res)
//   this.requestsCart=res

// })

//   }
removeCartItem(productItem:any){
this.counterService.removeCartItem(productItem);
}
emptyCartItem(){
  this.counterService.removeAllCart()
}

}
