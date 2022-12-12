const submitButton = document.getElementsByClassName("submitButton");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");
const card = document.getElementsByClassName("card");
const addButton = document.getElementById("add-button");
const modal = document.getElementById("myModal");
const showModal = document.getElementById("add-button");
const closeSpan = document.getElementsByClassName("close")[0];

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
            content.innerHTML = `<h1>${lastElement.title}</h1><p>${lastElement.author}</p><p>${lastElement.page} pages</p><div class="button-container"><button id="delete-button" value="${lastElement.title}"></button><button id="read-button" value="${lastElement.title}" class="${lastElement.read}"></button></div>`;            
            container.appendChild(content);
            
        } else {
            const container = document.querySelector(".container");
            const content = document.createElement('div');
            content.classList.add('card');
            content.setAttribute("id", `${myLibrary[0].title}`);
            content.innerHTML = `<h1>${myLibrary[0].title}</h1><p>${myLibrary[0].author}</p><p>${myLibrary[0].page} pages</p><div class="button-container"><button id="delete-button" value="${myLibrary[0].title}"></button><button id="read-button" value="${myLibrary[0].title}" class="${myLibrary[0].read}"></button></div>`;
            container.appendChild(content);
        }
}

function submitFunction() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    addBookToLibrary();
    modal.style.display = "none";
    resetFields();
}

document.body.addEventListener("click", (event) => {
    if (event.target.id == "delete-button") {
       for (let i = 0; i < myLibrary.length; i++) {
            if (event.target.value == myLibrary[i].title) {
                let deleteThisBook = event.target.value;
                let indexOfX = myLibrary.findIndex(element => element.title == deleteThisBook);
                myLibrary.splice(indexOfX, 1);
                card[i].remove();
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
                    if (myLibrary[i].read === true) {
                        event.target.style.backgroundColor = "red";
                    }
                        myLibrary[i].read = false;
                        break;
                    case false:
                        if (myLibrary[i].read === false) {
                            event.target.style.backgroundColor = "green";
                        }
                        myLibrary[i].read = true;
                        break;
                }
            }
        }
    }
});

function resetFields() {
    const inputArray = document.querySelectorAll("input");
    inputArray.forEach(function (input) {
        if (input.classList != "submitButton")
        input.value = "";
        inputArray[3].checked = false;
    });
}

showModal.onclick = function() {
  modal.style.display = "block";
}

closeSpan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}