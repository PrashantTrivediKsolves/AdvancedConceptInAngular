import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';

import { ProductComponent } from './product/product.component';

import { GalleryComponent } from './gallery/gallery.component';

import { AboutBehaviorComponent } from './about-behavior/about-behavior.component';

import { GalleryBehaviorComponent } from './gallery-behavior/gallery-behavior.component';

import { ProductBehaviorComponent } from './product-behavior/product-behavior.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    GalleryComponent,
    AboutBehaviorComponent,
    GalleryBehaviorComponent,
    ProductBehaviorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
