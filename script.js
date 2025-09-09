const myLibrary = [];

function Book(title, author, description, year) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.description = description;
    this.year = year;
};

function addBookToLibrary() {
    let book = new Book("title", "author", "example description", 2025);

    myLibrary.push(book);
};