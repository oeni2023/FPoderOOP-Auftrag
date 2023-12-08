

/* Define  HTML elements */
/* Buttons for Click-events */
const btnAdd = document.getElementById('add-button');
const btnRand = document.getElementById('rand-button');
const statusDiv = document.getElementById('status-wrapper');
const inputName = document.getElementById('input-name');
const inputColor = document.getElementById('input-color');
const inputNumbers = document.getElementById('input-numbers');
const resultDiv = document.getElementById('result-wrapper');
const checkBoxes = document.getElementsByName('check-boxes');



/* Define eventListener */
/* Add - Button*/
btnAdd.addEventListener('click', () => {
    console.log("'Add' clicked!");


    removeMessage();
    // removeTile()

    if (!(checkName() && checkColor() && ckeckNumbers())) {
        console.log('Check not successful!');
        const messageSuccess = 'Eingabe NICHT korrekt! - Bitte versuchen sie es nochmal.';
        const messageClass = 'error';
        addMessage(messageSuccess, messageClass);
    } else {
        //console.log('Check successful!');
        const messageSuccess = 'Eingabe korrekt!';
        const messageClass = 'ok';
        addMessage(messageSuccess, messageClass);

        createTiles();

    }
});


/* Sort numbers eventListener */
window.addEventListener('DOMContentLoaded', sortNumbers);


/* Rand - Button */
btnRand.addEventListener('click', () => {
   console.log("'Rand' clicked!");
    const tiles = document.getElementsByName('results');
    const rand = Math.floor( Math.random() * tiles.length );
    tiles[rand].style.backgroundColor = "yellow";

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
function ckeckNumbers() {
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

/* Sort numbers */
function sortNumbers() {
    checkBoxes.forEach((checkBox) => {

        checkBox.addEventListener('change', () => {
            const numOrig = inputNumbers.value.split(",");
            const numSort = numOrig.map(str => {
                return parseInt(str, 10)
            });
            console.log(numSort);

            function factorialize(num) {
                if (num < 0)
                    return -1;
                else if (num == 0)
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
                        numbers.innerText = numSort.sort(function(a, b){return a-b});
                        break;
                    case ( checkBox.id === 'desc' ):
                        /* Sort descending */
                        numbers.innerText = numSort.sort(function(a, b){return b-a});
                        break;
                    case ( checkBox.id === 'sum' ):
                        /* Sum */
                        numbers.innerText = numSort.reduce((a,c) => {return a + c}, 0);
                        break;
                    case ( checkBox.id === 'fak' ):
                        const fakNums = numSort.map((x) => factorialize(x));
                        numbers.innerHTML = fakNums.toString();
                        break;
                    default:
                        checkBox.id === orig
                        numbers.innerText = numOrig;
                }
            }
        });
    });
}

/* Create tiles */
function createTiles() {
    const elementType = 'div';
    const elementText = 'Results: '
    const elementBorderStyle = `${inputColor.value} solid 5px`;
    const elementParent = resultDiv;

    console.log(`elementText: ${elementText}`)

    const tileGenerator = new HtmlGenerator(elementType, elementText);

    tileGenerator.addClass('results')
    tileGenerator.addSpan('name', inputName.value);
    tileGenerator.addSpan('color', inputColor.value);
    tileGenerator.addSpan('numbers', inputNumbers.value);

    tileGenerator.setBorderStyle(elementBorderStyle);

    tileGenerator.appendTo(elementParent);
    const enteredNumbers = document.getElementById('numbers').innerText.split(',');
    //console.log(enteredNumbers);

    return enteredNumbers;

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

function removeTile() {
    resultDiv.innerHTML= '';
}


/* HTML Generator class */
class HtmlGenerator {
    constructor(tagName, textContent) {
        this.element = document.createElement(tagName);
        this.element.textContent = textContent || '';
    }
    addClass(className) {
        this.element.classList.add(className);
    }

    setAttributes(attributeName, attributeValue) {
        this.element.setAttribute(attributeName, attributeValue);
    }

    addSpan(nameAttributeValue, contentText) {
        const mySpan = document.createElement('span');
        mySpan.innerText = contentText;
        mySpan.classList.add('result-span');
        mySpan.setAttribute('id', nameAttributeValue)
        this.element.appendChild(mySpan);
    }

    setBorderStyle(borderStyle) {
        this.element.style.border = borderStyle;
    }

    setBgColor(bgColor) {
        this.element.style.backgroundColor = bgColor;
    }

    appendTo(parentElement) {
        parentElement.appendChild(this.element);
    }
}