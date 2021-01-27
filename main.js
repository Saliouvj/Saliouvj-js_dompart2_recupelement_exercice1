// 1
let div = document.getElementById('content');
console.log(div.firstElementChild);

// 2
let titre = document.getElementById('titreNiv3');
console.log(titre);

// 3
console.log(titre.previousElementSibling);

// 4
let petitPara = document.getElementsByClassName('petitParagraphe')[0];
console.log(petitPara.nextElementSibling);

//5
let important = document.getElementsByClassName('important');

console.log(important[0].parentElement);

//6

let list = document.getElementById('listElements').parentElement
console.log(list.firstElementChild);

// 7
let exo7 = document.getElementsByClassName('important')

let exo7longueur = exo7.length -1
let exo7Bis = exo7[exo7longueur]
console.log(exo7Bis.nextElementSibling);

//8
let mytextGeneral = document.getElementById('textGeneral')
console.log(mytextGeneral.nextElementSibling.nextElementSibling);

//9
let mySpan = document.getElementsByTagName('span')[1];
let spanParent = mySpan.parentElement;
let mySpanPrenom = mySpan.nextElementSibling;
console.log(mySpanPrenom);

//10
let nicolas = document.getElementsByTagName("b")[2];
let nicolas2 = nicolas.parentElement;
let nicolas3 = nicolas2.parentElement;
let nicolas4 = nicolas3.previousElementSibling;
let nicolas5 = nicolas4.firstElementChild;
let nicolas6 = nicolas5.firstElementChild;
console.log(nicolas6.innerText);
// méthode 2
console.log(document.getElementsByTagName('div')[1].getElementsByTagName('span')[1].firstElementChild.parentElement.parentElement.parentElement.getElementsByTagName('p')[0].firstElementChild.firstElementChild);


// 11 querySelector
let newMethode = document.querySelector('#textGeneral')

console.log(newMethode);


// 12
let newMethodeAll = document.querySelectorAll('li')
console.log(newMethode);
let listFinal = Array.from(newMethodeAll)
console.log(listFinal);

listFinal.forEach(el => {
    console.log(el);
});

