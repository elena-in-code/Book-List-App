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
//Show error message
UI.prototype.showAlert = function(message, className){
    //create a div
    const div = document.createElement("div");
    // add class
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get a parent
    const container = document.querySelector(".container");
    //get form
    const form = document.querySelector("#book-form");
    //insert alert: what to insert and before what element
    container.insertBefore(div, form);
    //Time out after 3 sec
    setTimeout(function(){
        document.querySelector(".alert").remove()
    }, 3000);
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
    //validate
    if(title === "" || author === "" || isbn === ""){
        //error alert
        ui.showAlert("Please fill in all fields", "error");
    } else {
        //Add book to list
        ui.addBookToList(book);
        //show success
        ui.showAlert("Book added correctly!", "success ");
        //clear fields
        ui.clearFields();
    }

    e.preventDefault();
 });