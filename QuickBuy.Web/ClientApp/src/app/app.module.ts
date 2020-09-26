import { StoreProductComponent } from './store/product/store.product.component';
import { StoreSearchComponent } from './store/search/store.search.component';
import { RegisterUserComponent } from './user/register/register.user.component';
import { RoutesGuard } from './authorization/routes.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TruncateModule } from 'ng2-truncate';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './user/login/login.component';
import { UserService } from './services/user/user.service';
import { ProductService } from './services/product/product.service';
import { SearchProductComponent } from './product/search/search.product.component';
import { StoreEffectuateComponent } from './store/effectuate/store.effectuate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    RegisterUserComponent,
    SearchProductComponent,
    StoreSearchComponent,
    StoreProductComponent,
    StoreEffectuateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    TruncateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },      
      { path: 'product', component: ProductComponent},
      { path: 'login', component: LoginComponent },
      { path: 'new-user', component: RegisterUserComponent },
      { path: 'search-product', component: SearchProductComponent },
      { path: 'store-product', component: StoreProductComponent },
      { path: 'store-effectuate', component: StoreEffectuateComponent }
    ])
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//{ path: 'product', component: ProductComponent, canActivate: [RoutesGuard] },
