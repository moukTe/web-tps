import { Library } from "./services/library";
import { Repository } from "./services/repository";
import { Book } from "./models/book";
import { fetchBooks } from "./utils/fakeapi";

async function main() {
    const bookRepo = new Repository<Book>();
    const library = new Library(bookRepo);

    const books = await fetchBooks();
    books.forEach(book => library.addBook(book));

    console.log("Tous les livres:", library.books.getAll());

    const bookToBorrow = library.searchByTitle("1984");
    if (bookToBorrow) {
        if (library.borrowBook(bookToBorrow)) {
            console.log(`${bookToBorrow.title} emprunté avec succès.`);
        } else {
            console.log(`${bookToBorrow.title} n'est pas disponible.`);
        }
    }

    console.log("État actuel des livres:", library.books.getAll());
}

main();
