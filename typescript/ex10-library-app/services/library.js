"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books) {
        this.books = books;
    }
    Library.prototype.addBook = function (book) {
        this.books.add(book);
    };
    Library.prototype.removeBook = function (book) {
        this.books.remove(book);
    };
    Library.prototype.searchByTitle = function (title) {
        return this.books.find(function (book) { return book.title.toLowerCase() === title.toLowerCase(); });
    };
    Library.prototype.borrowBook = function (book) {
        if (book.available) {
            book.available = false;
            return true;
        }
        return false;
    };
    Library.prototype.returnBook = function (book) {
        book.available = true;
    };
    return Library;
}());
exports.Library = Library;
