import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ProductListComponent} from './components/product-list/product-list.component'
import{ProductDetailsComponent} from './components/product-details/product-details.component'
import{AddProductComponent} from './components/add-product/add-product.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
{
  path:'',
  component: ProductListComponent
},
{
  path:'product-details/:id',
  component: ProductDetailsComponent
},

{
  path:'add-product',
  component: AddProductComponent,
  canActivate: [authGuardGuard]
},

{
  path:'login',
  component: LoginComponent
},

{
  path:'register',
  component: RegisterComponent
},

{
  path:'cart',
  component:CartComponent 
    

},

{
  path:'**',
  component: NotFoundComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
