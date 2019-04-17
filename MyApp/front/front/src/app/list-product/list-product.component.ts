
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BookService } from "../service/book.service";
import { filter } from 'rxjs/operators';
import { Book } from "../model/Book.model";
import { FilterPipe } from '../searchpipe.pipe';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  single: any;
  searchString: string;
  myArrayList : any = { value: [] }
  myArrayList1 = [];
  final = [];
  aa:boolean=false;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(res => {
      this.myArrayList = res.json();
      console.log(this.myArrayList);
      console.log(this.myArrayList['value']);
  });
  }
  }

