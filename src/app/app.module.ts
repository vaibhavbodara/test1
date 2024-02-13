import { NO_ERRORS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FeaturedComponent } from './container/featured/featured.component';
import { SearchComponent } from './container/search/search.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { FilterComponent } from './container/productlist/filter/filter.component';
import { ProductComponent } from './container/productlist/product/product.component';
import { HeaderComponent } from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopMainuComponent } from './header/top-mainu/top-mainu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SetBackgroundDirective } from './CustomDirectives/set-background.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { AppHoveDirective } from './CustomDirectives/app-hove.directive';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FeaturedComponent,
    SearchComponent,
    ProductDetailComponent,
    ProductlistComponent,
    FilterComponent,
    ProductComponent,
    HeaderComponent,
    MainMenuComponent,
    TopMainuComponent,
    TopHeaderComponent,
    SetBackgroundDirective,
    HighlightDirective,
    AppHoveDirective,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule { }
