const myLibrary = [];
//locate and store container used for generated page content
const pageContent = document.getElementById("pageContent")
//create container element for the library book entries, and adds it the webpage
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
pageContent.appendChild(containerDiv);

//queryselector for page and form buttons
const btnAdd = document.getElementById("btnAdd");
const btnSubmit = document.getElementById("btnSubmit");
const btnClose = document.getElementById("btnClose");
const dialog = document.getElementById("form");
const form = document.getElementById("formElement");

//add event listeners for buttons
btnAdd.addEventListener("click", () => {
    dialog.showModal();
});

btnClose.addEventListener("click", () => {
    dialog.close();
});

//adds an event listener that stops the form being submitted to a server when button pressed
//as this project has no server
btnSubmit.addEventListener("click", bookSubmit, false);

function bookSubmit(event) {
    //prevents default form submitting behaviour on button press
    event.preventDefault();

    //retrieve user input from form fields
    let bookName = form.elements['bookName'].value;
    let bookAuthor = form.elements['bookAuthor'].value;
    let pages = form.elements['pages'].value;
    let date = form.elements['date'].value;

    //run function to create book from input
    addBookToLibrary(bookName, bookAuthor, pages, date);

    //close form dialog, and reset form fields back to empty
    dialog.close();
    form.reset();
}

function Book(title, author, pages, year) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
};

function addBookToLibrary(title, author, pages, date) {
    //create new book from constructor
    let book = new Book(title, author, pages, date);

    //add to library, refresh site display to update with new library contents
    myLibrary.push(book);
    displayLibrary();
};

function displayLibrary() {
    //clears existing entries in-case this function is being called after library has
    //already been populated, i.e preventing duplicate displays
    while (containerDiv.hasChildNodes()) {
        containerDiv.removeChild(containerDiv.children[0]);
    };

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

        //adds an id to each book display identical to the unique id generated on 
        // object creation for each book
        // will allow identification of specific books for manipulation purposes (i.e deletion)
        bookElement.id = book.id;

        let btnRemove = document.createElement("button");
        btnRemove.textContent = "Remove";
        bookElement.appendChild(btnRemove);

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