import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() productItem  !:Product;

  @Output() emitFromChild=new EventEmitter();
  


  constructor(private router:Router, private counterService:CounterService ){

  }


  // showDetails(id:number){
  //   console.log(id);


  //   this.router.navigate(['product-details',id])
  // }

  emitToParent(id:number){
    this.emitFromChild.emit(id)

  }
  // getDetails(id:number){
  //   this.productService.getProductDetails(this.products.id).subscribe((res :any)=> console.log(res.products.id) )
  // }

  request :any=[]

  // addToCart(id:any){
  //   this.request.push(id);
  // }

  Counter !: any;

  ngOnInit() {
    this.counterService.getCounter().subscribe((res) => {this.Counter = res
    
    this.request.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price})
    })
    
    });
  }

  increaseCounter() {
    this.counterService.setCounter(++this.Counter)
  }

  addToCart(productItem:any){
    // console.log(id)
    this.counterService.addToCart(productItem)

  }

  
  // receveToCart(id:any){
  //   // console.log(id)
  //   this.counterService.receveToCart(id)
      
    

  // }

}
