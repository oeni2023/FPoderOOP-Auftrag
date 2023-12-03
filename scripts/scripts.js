

/* Define  HTML elements */
/* Buttons for Click-events */
const btnAdd = document.getElementById('add-button');
const btnRand = document.getElementById('rand-button');
const statsDiv = document.getElementById('status-wrapper');
const inputName = document.getElementById('input-name');
const inputColor = document.getElementById('input-color');
const inputNambers = document.getElementById('input-numbers');


/* Define eventListener */
btnAdd.addEventListener('click', () => {
    console.log("'Add' clicked!");

    removeMessage();
    addMessage();



});

btnRand.addEventListener('click', () => {
   console.log("'Rand' clicked!")
});



function addMessage() {
    const elementType = 'div';
    const elementText = inputName.value;
    const elementClass = 'ok';
    // const elementAttribute = 'id';
    // const elementId = 'status-text';
    // const elementBorderStyle = '3px solid red';
    const elementParent = statsDiv;

    const messageGenerator = new HtmlGenerator(elementType,  elementText);
    messageGenerator.addClass(elementClass);
    //messageGenerator.setAttribute(elementAttribute, elementId);
    messageGenerator.appendTo(elementParent);

    inputName.value = ''
}


function removeMessage() {
    statsDiv.innerHTML= '';
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