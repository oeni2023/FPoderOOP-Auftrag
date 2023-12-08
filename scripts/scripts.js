

/* Define  HTML elements */
/* Buttons for Click-events */
const btnAdd = document.getElementById('add-button');
const btnRand = document.getElementById('rand-button');
const statusDiv = document.getElementById('status-wrapper');
const inputName = document.getElementById('input-name');
const inputColor = document.getElementById('input-color');
const inputNumbers = document.getElementById('input-numbers');
const resultDiv = document.getElementById('result-wrapper');


/* Define eventListener */
/* Add - Button*/
btnAdd.addEventListener('click', () => {
    console.log("'Add' clicked!");

    removeMessage();

    if (!(checkName() && checkColor() && ckeckNumbers())) {
        console.log('Check not successful!');
        const messageSuccess = 'Eingabe NICHT korrekt! - Bitte versuchen sie es nochmal.';
        const messageClass = 'error';
        addMessage(messageSuccess, messageClass);
    } else {
        console.log('Check successful!');
        const messageSuccess = 'Eingabe korrekt!';
        const messageClass = 'ok';
        addMessage(messageSuccess, messageClass);
    }

    //createTiles()
});

/* Rand - Button */
btnRand.addEventListener('click', () => {
   console.log("'Rand' clicked!")
});

/* Define Functions */
/* Check name field */
function checkName() {
    if ( inputName.value.length < 3 || inputName.value.length > 10) {
        console.log("name not correct");
        inputName.classList.add('error');
        return false;
    }
    inputName.classList.add('ok');
    inputName.disabled = true;
    return true;
}

/* Check color field */
function checkColor() {
    const colorValue = inputColor.value;
    const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

    if (!(colorValue.length > 0 && colorPattern.test(colorValue))) {
        console.log("color not correct");
        inputColor.classList.add('error');
        return false;
    }
    inputColor.classList.add('ok');
    inputColor.disabled = true;
    return true;
}

/* Check numbers field */
function ckeckNumbers() {
    const arrayNumbers = inputNumbers.value.split(',');
    const numberPattern = /^[0-9]+(,[0-9]+)*$/;
    console.log(arrayNumbers);

    if ( !(arrayNumbers.length > 0 && numberPattern.test(arrayNumbers))) {
        console.log("numbers not correct");
        inputNumbers.classList.add('error');
        return false;
    }
    inputNumbers.classList.add('ok');
    inputNumbers.disabled = true;
    return true;
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
function addMessage(messageText, messageClass) {
    const elementType = 'div';
    const elementText = messageText;
    const elementClass = messageClass;
    const elementParent = statusDiv;

    const messageGenerator = new HtmlGenerator(elementType,  elementText);
    messageGenerator.addClass(elementClass);
    messageGenerator.appendTo(elementParent);
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