
/* HTML elements */
const inputName = document.getElementById('input-name');
const inputColor = document.getElementById('input-color');
const inputNumbers = document.getElementById('input-numbers');
const statusDiv = document.getElementById('status-wrapper');
const parentElement = document.getElementById('result-wrapper');
const btnAdd = document.getElementById('add-button');
const btnRand = document.getElementById('rand-button');
const checkBoxes = document.getElementsByName('check-boxes');

/* Add-button eventListener */
btnAdd.addEventListener('click', () => {
    /* Remove existing messages */
    removeMessage();

    /* Reset check boxes to "orig" */
    const origCheckBox = document.getElementById('orig');
    origCheckBox.checked = true;

    /* Check if all  input field are valide, if yes create new tile */
    if (!(checkName() && checkColor() && checkNumbers())) {
        console.log('Check not successful!');
        const messageSuccess = 'Eingabe NICHT korrekt! - Bitte versuchen sie es nochmal.';
        const messageClass = 'error';
        addMessage(messageSuccess, messageClass);
    } else {
        //console.log('Check successful!');
        const messageSuccess = 'Eingabe korrekt!';
        const messageClass = 'ok';
        addMessage(messageSuccess, messageClass);

        createTile()
    }
});

/* Sort numbers eventListener */
window.addEventListener('DOMContentLoaded', sortNumbers);

/* Rand - Button */
btnRand.addEventListener('click', () => {
    console.log("'Rand' clicked!");

    /* Get current tiles */
    const tiles = document.querySelectorAll('.results');
    tiles.forEach(tile => tile.style.backgroundColor = "");

    /* Select a random tile and highlight it */
    const rand = Math.floor( Math.random() * tiles.length );
    tiles[rand].style.backgroundColor = "yellow";
});

/* Check name field */
function checkName() {
    if ( inputName.value.length < 3 || inputName.value.length > 10) {
        console.log("name not correct");
        inputName.classList.add('error');
        return false;
    }
    inputName.classList.add('ok');
    //inputName.disabled = true;
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
    //inputColor.disabled = true;
    return true;
}

/* Check numbers field */
function checkNumbers() {
    const arrayNumbers = inputNumbers.value.split(',');
    const numberPattern = /^[0-9]+(,[0-9]+)*$/;

    if ( !(arrayNumbers.length > 0 && numberPattern.test(arrayNumbers))) {
        console.log("numbers not correct");
        //inputNumbers.classList.add('error');
        return false;
    }
    inputNumbers.classList.add('ok');
    //inputNumbers.disabled = true;
    return true;
}

/* Create status messages */
function addMessage(messageText, messageClass) {
    const elementType = 'div';
    const elementText = messageText;
    const elementClass = messageClass;
    const elementParent = statusDiv;

    const messageGenerator = new HtmlGenerator('div', elementParent, elementText);
    messageGenerator.addElmClass(elementClass);
    messageGenerator.setElemText(elementText);
    messageGenerator.appendTo(elementParent);
}

/* Remove status messages */
function removeMessage() {
    statusDiv.innerHTML= '';
}

/* Create tiles */
function createTile() {
    const myHtmlElement = new HtmlGenerator('div', parentElement);
    const elementBorderStyle = `${inputColor.value} solid 3px`;

    myHtmlElement.setElmAttribute('id',myHtmlElement.id);
    myHtmlElement.setElmAttribute('name', 'tile');
    myHtmlElement.addElmClass('results');

    myHtmlElement.setBorderStyle(elementBorderStyle);
    myHtmlElement.addSubElements();

    myHtmlElement.appendTo(parentElement);

    //console.log(myHtmlElement);
}

/* Sort numbers */
function sortNumbers() {
    checkBoxes.forEach((checkBox) => {

        checkBox.addEventListener('change', () => {

            const Tiles = document.getElementsByName('tile')
            const lastTile = Tiles.item(Tiles.length - 1);
            const lastNumbers = lastTile.lastChild;
            const lastNumbersText = inputNumbers.value;

            const numOrig = lastNumbersText.split(",");
            const numSort = numOrig.map(str => {
                return parseInt(str, 10)
            });

            function factorialize(num) {
                if (num < 0)
                    return -1;
                else if (num === 0)
                    return 1;
                else {
                    return (num * factorialize(num - 1));
                }
            }

            if ( checkBox.checked ) {
                //console.log(checkBox.id);
                switch (true) {
                    case ( checkBox.id === 'asc' ):
                        /* Sort ascending */
                        lastNumbers.innerText = numSort.sort(function(a, b){return a-b});
                        break;
                    case ( checkBox.id === 'desc' ):
                        /* Sort descending */
                        lastNumbers.innerText = numSort.sort(function(a, b){return b-a});
                        break;
                    case ( checkBox.id === 'sum' ):
                        /* Sum */
                        lastNumbers.innerText = numSort.reduce((a,c) => {return a + c}, 0);
                        break;
                    case ( checkBox.id === 'fak' ):
                        const fakNums = numSort.map((x) => factorialize(x));
                        lastNumbers.innerText = fakNums;
                        break;
                    default:
                        checkBox.id === orig
                        lastNumbers.innerText = numOrig;
                        break;
                }
            }
        });
    });
}

/* Class for creating messages and classes */
class HtmlGenerator {

    constructor(tagType, parentElement, contentText) {
        this.element = document.createElement(tagType);
        this.tagType = tagType;
        this.parentElement = parentElement;
        this.text = contentText || '';
        this.idRandom = 'Tile-'+ Math.floor(Math.random() * 1000);
        this.id = 'Tile-'+ document.getElementsByName('tile').length;

        this.name = inputName.value;
        this.color = inputColor.value;
        this.numbers = inputNumbers.value;
    }

    setElmName(){
        this.element.innerText = this.name;
    }

    setElemText() {
        this.element.innerText = this.text;
    }

    setElmAttribute(attributeName, attributeValue) {
        this.element.setAttribute(attributeName, attributeValue);
    }

    addElmClass(className) {
        this.element.classList.add(className);
    }

    setBorderStyle(borderStyle) {
        this.element.style.border = borderStyle;
    }

    addSubElements() {
        const nameAttr = document.createElement('span');
        nameAttr.setAttribute('name', "name");
        nameAttr.classList.add('result-span');
        nameAttr.innerText = this.name;

        const colorAttr = document.createElement('span');
        colorAttr.setAttribute('name', "color");
        colorAttr.classList.add('result-span');
        colorAttr.innerText = this.color;

        const numbersAttr = document.createElement('span');
        numbersAttr.setAttribute('name',"numbers");
        numbersAttr.setAttribute('id', this.id+'-numbers');
        numbersAttr.classList.add('result-span');
        numbersAttr.innerText = this.numbers;

        this.element.appendChild(nameAttr);
        this.element.appendChild(colorAttr);
        this.element.appendChild(numbersAttr);
    }

    appendTo(parentElement) {
        parentElement.appendChild(this.element);
    }
}

