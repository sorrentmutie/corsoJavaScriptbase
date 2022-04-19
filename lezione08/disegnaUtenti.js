import {coloreMaschi , coloreFemmine } from './settings.js';

const disegnaContatore = function(contatore) {

    const main = document.getElementById('main');
    
    const pMaschi = document.createElement('p');
    pMaschi.innerText = "Numero maschi: " + contatore.numeroMaschi;
    pMaschi.style = 'background-color:' + coloreMaschi + '; color: white;';
    main.appendChild(pMaschi);

    const pFemmine = document.createElement('p');
    pFemmine.innerText = "Numero femmine: " + contatore.numeroFemmine;
    pFemmine.style = 'background-color: ' + coloreFemmine + '; color: black;';
    main.appendChild(pFemmine);
};

const disegnaCard = function(personaSpeciale, contenitore) {
    const section = document.getElementById(contenitore);
    const article = document.createElement('article');
    article.style= "border: 1px solid red; margin-bottom: 5px";
    const h3 = document.createElement('h3');
    const pIndirizzo = document.createElement('p');
    h3.innerText = personaSpeciale.name.first + " " + personaSpeciale.name.last ;
    pIndirizzo.innerText = personaSpeciale.stampaIndirizzo();
    const img = document.createElement('img');
    img.src = personaSpeciale.picture.large;
    article.appendChild(h3);
    article.appendChild(pIndirizzo);
    article.appendChild(img);
    section.appendChild(article);
};

export { disegnaContatore, disegnaCard };