let myLibrary = [];

function Book(name, author, pages) {
  this.name = name
  this.author = author
  this.pages = pages 
}

const newBook = new Book ('The lurd of the rangs', 'JR Boind', '450')

function addBookToLibrary() {
    myLibrary.push(newBook)
}

/*----------When we press the add Button----------- */ 

const btn = document.querySelector('.book')
const formContainer = document.getElementById('form-container')

btn.onclick = function () {

  if (formContainer.style.display != "none") {
    
    formContainer.style.display = "none";
   
  } else {
    formContainer.style.display = "inline-block";
  }
};

/*----------When we press the addBook Button----------- */ 

const btnAddBook = document.querySelector('.add-book')
const inputName = document.getElementById('book-name')
const inputAuthor = document.getElementById('author')
const inputPages = document.getElementById('pages')

btnAddBook.onclick = function (e){
  e.preventDefault();
  console.log(inputName.value)
  console.log(inputAuthor.value)
  console.log(inputPages.value)
}

