let myLibrary = [];

function Book(name, author, pages) {
  this.name = name
  this.author = author
  this.pages = pages 
}

function addBookToLibrary(storeBook) {
    myLibrary.push(storeBook)
}

/*----------Pressing the add Button----------- */ 

const btn = document.querySelector('.book')
const formContainer = document.getElementById('form-container')

btn.onclick = function () {
  
  if (formContainer.style.display == "none" || formContainer.style.display.length == 0) {
    formContainer.style.display = "inline-block";
   
  } else {
    formContainer.style.display = "none";

  }
};

/*----------Pressing the addBook Button----------- */ 

const btnAddBook = document.querySelector('.add-book')
const inputName = document.getElementById('book-name')
const inputAuthor = document.getElementById('author')
const inputPages = document.getElementById('pages')



btnAddBook.onclick = function (e){
  e.preventDefault();
  let storeBook = new Book (inputName.value , inputAuthor.value, inputPages.value)
  addBookToLibrary(storeBook)
  console.log(storeBook)
  console.log(myLibrary)
}

