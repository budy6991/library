let myLibrary = [];

class Book {
  constructor (name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages 
    this.read = read
  }
  
  toggleRead(){

    if (this.read == 'Yes') {
      this.read = 'No'
    }

    else if (this.read == 'No') {
      this.read = 'Yes'
    }
  }
  
}

function changeStatus (){
  console.log(this.name)
}


function addBookToLibrary(storeBook) {
    myLibrary.push(storeBook)
}

/*----------Pressing the add Button----------- */ 

  const btn = document.querySelector('.book')
  const formContainer = document.getElementById('form-container')

  btn.onclick = function () {
    
    // Makes the form-container visible/invisible

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

  if (
    inputName.validity.valueMissing ||
    inputAuthor.validity.valueMissing||
    inputPages.validity.valueMissing
  ) {
    e.preventDefault()
    alert('Please fill out all of the fields')
    console.log(myLibrary)
  } else {  
  

  e.preventDefault();
  let storeBook = new Book (inputName.value , inputAuthor.value, inputPages.value, 'No')
  addBookToLibrary(storeBook)
  formContainer.style.display = 'none'
  inputName.value = ''
  inputAuthor.value = ''
  inputPages.value = ''

  
  //Creates the slots in the card ***

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

      // Takes the inputs and place them in the card

      bookName.textContent = (`Name: ${Object.values(book)[0]}`) 
      authorName.textContent = (`Author: ${Object.values(book)[1]}`) 
      pagesNumber.textContent = (`Pages: ${Object.values(book)[2]}`) 
      
      toggleButton.style.backgroundColor = 'white'
      toggleButton.style.color = 'black'

      toggleButton.textContent = '✔'
      removeButton.textContent = 'X'

      // Attaches the slots to the card ***

      newCard.appendChild(bookName)
      newCard.appendChild(authorName)
      newCard.appendChild(pagesNumber)
      newCard.appendChild(toggleButton)
      newCard.appendChild(removeButton)
      container.appendChild(newCard)

      /*------Remove card------ */ 

      removeButton.onclick = function (e){
        let index = myLibrary.indexOf(book)
        myLibrary.splice(index, 1)
        console.log(myLibrary)
        newCard.remove(book)
      }
      
    }
    
  })
  
  /*------Switch status to read/ unread------ */ 
  
  toggleButton.onclick = function (e) {

    if (e.target.style.backgroundColor == 'green') {
      e.target.style.backgroundColor = 'white'
      e.target.style.color = 'black'
      storeBook.toggleRead()
      console.log(storeBook)
      console.log(myLibrary)
    }

    else {
      e.target.style.backgroundColor = 'green'
      e.target.style.color = 'white'
      storeBook.toggleRead()
      console.log(storeBook)
      console.log(myLibrary)
  }}}


}





