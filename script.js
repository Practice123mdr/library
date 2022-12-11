const submitButton = document.getElementsByClassName("submitButton");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const card = document.getElementsByClassName("card");
const addButton = document.getElementById("add-button");

let myLibrary = [];

function Book(title, author, page, read) {
    this.title = title,
    this.author = author,
    this.page = page,
    this.read = Boolean(read)
}

function addBookToLibrary() {
        if (myLibrary.length > 1) {
            let lastElement = myLibrary[myLibrary.length - 1];
            const container = document.querySelector(".container");
            const content = document.createElement('div');
            content.classList.add('card');
            content.setAttribute("id", `${lastElement.title}`);
            content.innerHTML = `<h1>${lastElement.title}</h1><p>${lastElement.author}</p><p>${lastElement.page}</p><button id="delete-button" value="${lastElement.title}">X</button><button id="read-button" value=${lastElement.title}>V</button>`;            
            container.appendChild(content);
        } else {
            const container = document.querySelector(".container");
            const content = document.createElement('div');
            content.classList.add('card');
            content.setAttribute("id", `${myLibrary[0].title}`);
            content.innerHTML = `<h1>${myLibrary[0].title}</h1><p>${myLibrary[0].author}</p><p>${myLibrary[0].page}</p><button id="delete-button" value="${myLibrary[0].title}">X</button><button id="read-button" value=${myLibrary[0].title}>V</button>`;
            container.appendChild(content);
        }
}

submitButton[0].addEventListener("click", (event) => {
    event.preventDefault();
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    addBookToLibrary();
});

document.body.addEventListener("click", (event) => {
    if (event.target.id == "delete-button") {
       for (let i = 0; i < myLibrary.length; i++) {
            if (event.target.value == myLibrary[i].title) {
                let deleteThisBook = event.target.value;
                let indexOfX = myLibrary.findIndex(element => element.title == deleteThisBook);
                myLibrary.splice(indexOfX, 1);
                return card[i].remove();
            }
       }
    }
  });

document.body.addEventListener("click", (event) => {
    if (event.target.id == "read-button") {
        for (let i = 0; i < myLibrary.length; i++) {
            if (event.target.value == myLibrary[i].title) {
                switch (myLibrary[i].read) {
                    case true: 
                        myLibrary[i].read = false;
                        break;
                    case false:
                        myLibrary[i].read = true;
                        break;
                }
            }
        }
    }
});

addButton.addEventListener("click", () => {
    alert("^^")
});
