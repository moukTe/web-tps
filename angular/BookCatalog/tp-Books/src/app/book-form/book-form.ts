import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookForm implements OnChanges {
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null;

  @Output() createBook = new EventEmitter<Book>();
  @Output() updateBook = new EventEmitter<Book>();

  book: Book = new Book();

  ngOnChanges() {
    if (this.bookToEdit) {
      this.book = { ...this.bookToEdit };
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    if (this.bookToEdit) {
      this.updateBook.emit(this.book);
    } else {
      this.createBook.emit(this.book);
    }

    this.book = new Book();
    form.resetForm();
  }
}