//
//
// /** Define  HTML elements */
// /* Buttons for Click-events */
// const btnAdd = document.getElementById('add-button');
// const btnRand = document.getElementById('rand-button');
// const statusDiv = document.getElementById('status-wrapper');
// const inputName = document.getElementById('input-name');
// const inputColor = document.getElementById('input-color');
// const inputNumbers = document.getElementById('input-numbers');
// const resultDiv = document.getElementById('result-wrapper');
// const checkBoxes = document.getElementsByName('check-boxes');
// const results = document.getElementsByName('results');
//
//
// /** Define eventListener */
// /* Add - Button*/
// btnAdd.addEventListener('click', () => {
//     console.log("'Add' clicked!");
//
//     /* Remove existing messages */
//     removeMessage();
//     // removeTile()
//
//     /* Reset check boxes to "orig" */
//     const origCheckBox = document.getElementById('orig');
//     origCheckBox.checked = true;
//
//     /* Check if all  input field are valide, if yes create new tile */
//     if (!(checkName() && checkColor() && ckeckNumbers())) {
//         console.log('Check not successful!');
//         const messageSuccess = 'Eingabe NICHT korrekt! - Bitte versuchen sie es nochmal.';
//         const messageClass = 'error';
//         addMessage(messageSuccess, messageClass);
//     } else {
//         //console.log('Check successful!');
//         const messageSuccess = 'Eingabe korrekt!';
//         const messageClass = 'ok';
//         addMessage(messageSuccess, messageClass);
//
//         createTiles();
//     }
// });
//
// /* Sort numbers eventListener */
// window.addEventListener('DOMContentLoaded', sortNumbers);
//
// /* Rand - Button */
// btnRand.addEventListener('click', () => {
//     console.log("'Rand' clicked!");
//
//     /* Get current tiles */
//     const tiles = document.querySelectorAll('.results');
//     tiles.forEach(tile => tile.style.backgroundColor = "");
//
//     /* Select a random tile and highlight it */
//     const rand = Math.floor( Math.random() * tiles.length );
//     tiles[rand].style.backgroundColor = "yellow";
// });
//
//
// /** Define Functions */
// /* Check name field */
// function checkName() {
//     if ( inputName.value.length < 3 || inputName.value.length > 10) {
//         console.log("name not correct");
//         inputName.classList.add('error');
//         return false;
//     }
//     inputName.classList.add('ok');
//     //inputName.disabled = true;
//     return true;
// }
//
// /* Check color field */
// function checkColor() {
//     const colorValue = inputColor.value;
//     const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
//
//     if (!(colorValue.length > 0 && colorPattern.test(colorValue))) {
//         console.log("color not correct");
//         inputColor.classList.add('error');
//         return false;
//     }
//     inputColor.classList.add('ok');
//     //inputColor.disabled = true;
//     return true;
// }
//
// /* Check numbers field */
// function ckeckNumbers() {
//     const arrayNumbers = inputNumbers.value.split(',');
//     const numberPattern = /^[0-9]+(,[0-9]+)*$/;
//
//     if ( !(arrayNumbers.length > 0 && numberPattern.test(arrayNumbers))) {
//         console.log("numbers not correct");
//         //inputNumbers.classList.add('error');
//         return false;
//     }
//     inputNumbers.classList.add('ok');
//     //inputNumbers.disabled = true;
//     return true;
// }
//
//
// /* Sort numbers */
// function sortNumbers(data) {
//     checkBoxes.forEach((checkBox) => {
//
//         checkBox.addEventListener('change', () => {
//             const currentInputNumbers = data;     //document.getElementById('input-numbers');
//
//             const numOrig = currentInputNumbers.value.split(",");
//             const numSort = numOrig.map(str => {
//                 return parseInt(str, 10)
//             });
//             console.log(numSort);
//
//             function factorialize(num) {
//                 if (num < 0)
//                     return -1;
//                 else if (num === 0)
//                     return 1;
//                 else {
//                     return (num * factorialize(num - 1));
//                 }
//             }
//
//             if ( checkBox.checked ) {
//                 //console.log(checkBox.id);
//                 switch (true) {
//                     case ( checkBox.id === 'asc' ):
//                         /* Sort ascending */
//                         //enteredNumbers.innerText = numSort.sort(function(a, b){return a-b});
//                         console.log(numSort.sort(function(a, b){return a-b}));
//                         break;
//                     case ( checkBox.id === 'desc' ):
//                         /* Sort descending */
//                         //enteredNumbers.innerText = numSort.sort(function(a, b){return b-a});
//                         console.log(numSort.sort(function(a, b){return b-a}));
//                         break;
//                     case ( checkBox.id === 'sum' ):
//                         /* Sum */
//                         //enteredNumbers.innerText = numSort.reduce((a,c) => {return a + c}, 0);
//                         console.log(numSort.reduce((a,c) => {return a + c}, 0));
//                         break;
//                     case ( checkBox.id === 'fak' ):
//                         const fakNums = numSort.map((x) => factorialize(x));
//                         //enteredNumbers.innerHTML = fakNums.toString();
//                         console.log(fakNums.toString());
//                         break;
//                     default:
//                         checkBox.id === orig
//                         //enteredNumbers.innerText = numOrig;
//                         console.log(numOrig);
//                 }
//             }
//         });
//     });
// }
//
// /* Create tiles */
// function createTiles() {
//     const elementType = 'div';
//     //const elementText = 'Results: '
//     const elementBorderStyle = `${inputColor.value} solid 5px`;
//     const elementParent = resultDiv;
//
//     //console.log(`elementText: ${elementText}`)
//
//     const tileGenerator = new HtmlGenerator(elementType);
//
//     tileGenerator.addClass('results')
//     tileGenerator.addSpan('name', inputName.value);
//     tileGenerator.addSpan('color', inputColor.value);
//     tileGenerator.addSpan('numbers', inputNumbers.value);
//
//     tileGenerator.setBorderStyle(elementBorderStyle);
//
//     tileGenerator.sortElemNumbers(this.elmNumbers);
//     tileGenerator.addSpan('numbers', this.elmNumbers);
//
//     tileGenerator.appendTo(elementParent);
//     //const enteredNumbers = document.getElementsByName('numbers').innerText;
//     // //console.log(enteredNumbers);
//     //
//     //return enteredNumbers;
//
// }
//
//
// /* Create status message */
// function addMessage(messageText, messageClass) {
//     const elementType = 'div';
//     const elementText = messageText;
//     const elementClass = messageClass;
//     const elementParent = statusDiv;
//
//     const messageGenerator = new HtmlGenerator(elementType,  elementText);
//     messageGenerator.addClass(elementClass);
//     messageGenerator.appendTo(elementParent);
//
// }
//
//
// function removeMessage() {
//     statusDiv.innerHTML= '';
// }
//
// function removeTile() {
//     resultDiv.innerHTML= '';
// }
//
//
// /* HTML Generator class */
// class HtmlGenerator {
//     constructor(tagName, textContent) {
//         this.element = document.createElement(tagName);
//         this.element.textContent = textContent || '';
//         this.element.elmName = inputName.value;
//         this.element.elmColor = inputColor.value;
//         this.element.elmNumbers = inputNumbers.value;
//
//     }
//     addClass(className) {
//         this.element.classList.add(className);
//     }
//
//     sortElmNumbers() {
//         this.element.sortNumbers()
//     }
//
//     setAttributes(attributeName, attributeValue) {
//         this.element.setAttribute(attributeName, attributeValue);
//     }
//
//     addSpan(nameAttributeValue, contentText) {
//         const mySpan = document.createElement('span');
//         mySpan.innerText = contentText;
//         mySpan.classList.add('result-span');
//         mySpan.setAttribute('name', nameAttributeValue)
//         this.element.appendChild(mySpan);
//     }
//
//     setBorderStyle(borderStyle) {
//         this.element.style.border = borderStyle;
//     }
//
//     setBgColor(bgColor) {
//         this.element.style.backgroundColor = bgColor;
//     }
//
//     appendTo(parentElement) {
//         parentElement.appendChild(this.element);
//     }
// }



/** TEST Section */

const inputName = document.getElementById('input-name');
const inputColor = document.getElementById('input-color');
const inputNumbers = document.getElementById('input-numbers');
const statusDiv = document.getElementById('status-wrapper');
const parentElement = document.getElementById('result-wrapper');
const btnAdd = document.getElementById('add-button');
const btnRand = document.getElementById('rand-button');
const checkBoxes = document.getElementsByName('check-boxes');


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


function removeMessage() {
    statusDiv.innerHTML= '';
}

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

            // console.log(Tiles);
            // console.log(lastTile);
            // console.log(lastNumbers);
            // console.log(lastNumbersText);

            const numOrig = lastNumbersText.split(",");
            const numSort = numOrig.map(str => {
                return parseInt(str, 10)
            });
            console.log(numOrig);
            console.log(numSort);

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
                        console.log(numSort.sort(function(a, b){return a-b}));
                        break;
                    case ( checkBox.id === 'desc' ):
                        /* Sort descending */
                        lastNumbers.innerText = numSort.sort(function(a, b){return b-a});
                        console.log(numSort.sort(function(a, b){return b-a}));
                        break;
                    case ( checkBox.id === 'sum' ):
                        /* Sum */
                        lastNumbers.innerText = numSort.reduce((a,c) => {return a + c}, 0);
                        console.log(numSort.reduce((a,c) => {return a + c}, 0));
                        break;
                    case ( checkBox.id === 'fak' ):
                        const fakNums = numSort.map((x) => factorialize(x));
                        lastNumbers.innerText = fakNums;
                        console.log(fakNums);
                        break;
                    default:
                        checkBox.id === orig
                        lastNumbers.innerText = numOrig;
                        console.log(numOrig);
                        break;
                }
            }
        });
    });
}


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

