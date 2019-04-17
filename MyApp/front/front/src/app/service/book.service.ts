import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from "../model/Book.model";

@Injectable()
export class BookService {
  book_id: string = "";
  books: Array<Book> = [];
  constructor(private http: Http) {

  }
//to fetch books data from db by get method 
  getAllBooks() {
    
    return this.http.get("http://localhost:3000/getAllBooks");

  }
}

