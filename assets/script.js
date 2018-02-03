//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById("book-list");
    //create tr element
    const row = document.createElement("tr");
    //Insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(row);
}
// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}

//Event Listeners
document.getElementById("book-form").addEventListener("submit",
 function(e){
    //get form values:
    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value
    //Instantiate book
    const book = new Book(title, author, isbn);
    //Instantiate UI
    const ui = new UI();
    //Add book to list
    ui.addBookToList(book);
    //clear fields
    ui.clearFields();

    e.preventDefault();
 });