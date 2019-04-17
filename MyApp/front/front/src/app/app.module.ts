import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import {Http,HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { routing } from './app.routing';
import {BookService} from "./service/book.service";
import { FilterPipe } from './searchpipe.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ListProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
