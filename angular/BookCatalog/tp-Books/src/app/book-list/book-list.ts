import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  trackById(index: number, book: Book) {
    return book.id;
  }
}