import { Book } from "../models/book";
import { Repository } from "./repository";

export class Library {
    constructor(public books: Repository<Book>) {}

    addBook(book: Book) {
        this.books.add(book);
    }

    removeBook(book: Book) {
        this.books.remove(book);
    }

    searchByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    }

    borrowBook(book: Book): boolean {
        if (book.available) {
            book.available = false;
            return true;
        }
        return false;
    }

    returnBook(book: Book): void {
        book.available = true;
    }
}
