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
  let bookName = document.createElement('p')
  let authorName = document.createElement('p')
  let pagesNumber = document.createElement('p')
  let toggleButton = document.createElement('button')
  let removeButton = document.createElement ('button')

  newCard.classList.add('new-card')
  toggleButton.classList.add('toggle-button')
  removeButton.classList.add('remove-button')

  /*----------Inserting the values of the inputs----------- */ 

  myLibrary.forEach(book => {
    for (let key in book) {
      bookName.textContent = (`Name: ${Object.values(book)[0]}`) 
      authorName.textContent = (`Author: ${Object.values(book)[1]}`) 
      pagesNumber.textContent = (`Pages: ${Object.values(book)[2]}`) 
      
      toggleButton.textContent = '✔'
      removeButton.textContent = 'X'

      newCard.appendChild(bookName)
      newCard.appendChild(authorName)
      newCard.appendChild(pagesNumber)
      newCard.appendChild(toggleButton)
      newCard.appendChild(removeButton)
      container.appendChild(newCard)

      console.log(newCard) 

      
    }
    
  })
  
  /*------Switch status to read/ unread------ */ 
  
  toggleButton.onclick = function (e) {

    if (e.target.style.backgroundColor == 'green') {
      e.target.style.backgroundColor = 'white'
    }

    else {e.target.style.backgroundColor = 'green'}

  }

  /*------Remove card------ */ 

  removeButton.onclick = function (e){
    console.log(key)
  }

}








