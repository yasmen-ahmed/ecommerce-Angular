import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  counter: number = 0

  constructor(private counterService: CounterService) { }
  ngOnInit() {

    // this.counterService.getCounter().subscribe((res) => this.counter = res)

    this.counterService.getProducts().subscribe(res=>{
      this.counter=res.length
    })
  }



}
