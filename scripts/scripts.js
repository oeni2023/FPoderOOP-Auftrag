

/* Define  HTML elements */
/* Buttons for Click-events */
const btnAdd = document.getElementById('add-button');
const btnRand = document.getElementById('rand-button');
const statusDiv = document.getElementById('status-wrapper');
const inputName = document.getElementById('input-name');
const inputColor = document.getElementById('input-color');
const inputNambers = document.getElementById('input-numbers');
const resultDiv = document.getElementById('result-wrapper')


/* Define eventListener */
btnAdd.addEventListener('click', () => {
    console.log("'Add' clicked!");

    //checkName();
    removeMessage();
    addMessage();
    //createTiles()
});

btnRand.addEventListener('click', () => {
   console.log("'Rand' clicked!")
});


/* Define Functions */
/* Check name field */
function checkName() {
    if ( inputName.value.length < 3 || inputName.value.length > 10) {
        console.log("name no correct");

    }
    return true;
}

/* Check color field */
function checkColor() {

}

/* Check numbers field */
function ckeckNumbers() {

}

/* Print Message to Screen */
function printMessage() {
    if ( checkName() ) {
        console.log('Bingo!!!');
    } else {
        console.log('No good!!');
    }


}
/* Create tiles */
function createTiles() {
    const elementType = 'div';
    const elementText = inputName.value;
    const elementClass = 'ok';
    const elementParent = resultDiv;

    const tileGenerator = new HtmlGenerator(elementType, elementText);
    tileGenerator.addClass(elementClass);
    tileGenerator.appendTo(elementParent);

}


/* Create status message */
function addMessage() {
    const elementType = 'div';
    const elementText = inputName.value;
    const elementClass = 'error';
    const elementParent = statusDiv;

    const messageGenerator = new HtmlGenerator(elementType,  elementText);
    messageGenerator.addClass(elementClass);
    messageGenerator.addClass('element-border');
    messageGenerator.appendTo(elementParent);

    inputName.value = ''
}




function removeMessage() {
    statusDiv.innerHTML= '';
}

class HtmlGenerator {
    constructor(tagName, textContent) {
        this.element = document.createElement(tagName);
        this.element.textContent = textContent || '';
    }
    addClass(className) {
        this.element.classList.add(className);
    }

    setAttribute(attributeName, attributeValue) {
        this.element.setAttribute(attributeName, attributeValue);
    }

    setBorderStyle(borderStyle) {
        this.element.style.border(borderStyle);
    }

    appendTo(parentElement) {
        parentElement.appendChild(this.element);
    }
}