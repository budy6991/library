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
const container = document.querySelector('.container')


btnAddBook.onclick = function (e){
  e.preventDefault();
  let storeBook = new Book (inputName.value , inputAuthor.value, inputPages.value)
  addBookToLibrary(storeBook)
  formContainer.style.display = 'none'
  inputName.value = ''
  inputAuthor.value = ''
  inputPages.value = ''
  let newCard = document.createElement('div')
  newCard.classList.add('new-card')
  
  myLibrary.forEach(book => {
    for (let key in book) {
      newCard.textContent = ( `Name: ${Object.values(book)[0]} Author: ${Object.values(book)[1]} Pages: ${Object.values(book)[2]}` )
      
      container.appendChild(newCard)

      console.log(newCard)

        
    }
  })

  

  
}

