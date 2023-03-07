import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './admin/home/home.component';
import { UserComponent } from './admin/user/user.component';

@NgModule({
  declarations: [
    // AppComponent,
    // HomeComponent,
    // UserComponent       //should not include standalone components in declarations of NgModule
  ],
  imports: [
    BrowserModule,
    LoginComponent,
    ProductComponent,
    HomeComponent,
    UserComponent
  ],
  providers: [],
  bootstrap: [
    // AppComponent
  ]
})
export class AppModule { }
