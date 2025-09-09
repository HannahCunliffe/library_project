const myLibrary = [];
//locate and store container used for generated page content
const pageContent = document.getElementById("pageContent")
//create container element for the library book entries, and adds it the webpage
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
pageContent.appendChild(containerDiv);

function Book(title, author, pages, year) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
};

function addBookToLibrary() {
    let book = new Book("title", "author", 223, 2025);

    myLibrary.push(book);
};

function displayLibrary() {
    //creates an entry for each book in the library array
    //then creates elements to display information from each entry
    myLibrary.forEach((book) => {
        let bookElement = document.createElement("div");
        bookElement.classList.add("book");

        let bookTitle = document.createElement("p");
        bookTitle.classList.add("title");
        bookTitle.textContent = book.title;
        bookElement.appendChild(bookTitle);

        let bookAuthor = document.createElement("p");
        bookAuthor.classList.add("author");
        bookAuthor.textContent = `By ${book.author}`;
        bookElement.appendChild(bookAuthor);

        let bookPages = document.createElement("p");
        bookPages.classList.add("pages")
        bookPages.textContent = `${book.pages} pages`;
        bookElement.appendChild(bookPages);

        let bookYear = document.createElement("p");
        bookYear.classList.add("year");
        bookYear.textContent = book.year;
        bookElement.appendChild(bookYear);

        containerDiv.appendChild(bookElement);
    })
};

//pre-populates the library array with some example books to show on page load
function populateLibrary() {
    let book1 = new Book("The Fellowship of the Ring", "J. R. R. Tolkien", 423, 1954);
    let book2 = new Book("The Two Towers", "J. R. R. Tolkien", 352, 1954);
    let book3 = new Book("The Return of the King", "J. R. R. Tolkien", 416, 1955);

    myLibrary.push(book1, book2, book3);
};

//runs the populate then display function on page load
populateLibrary();

displayLibrary();