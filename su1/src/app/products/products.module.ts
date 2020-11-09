import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes =[

  {path:'', component: ProductComponent}
]

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})

export class ProductsModule{
  constructor() {
    console.log('products module loaded');
  }
 }
