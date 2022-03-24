const parametri = {
    sorgenteImmagine: 'https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-social-logo.png',
    primary: 'bg-primary',
    danger: 'bg-danger',
    warning: 'bg-warning'
}

const myButton = document.getElementById("modificaDom");

const miaFunzione = function() { //Funzione associata a una variabile
    console.log("Ho cliccato il pulsante");
}
//myButton.addEventListener('click', miaFunzione);

const modificaCard = function(numeroRandom){
    console.log(numeroRandom);
    if(numeroRandom > 0.5) {
        cambiaClasseCss("miaCard",parametri.primary,parametri.danger);   
        //const myImg = document.getElementById("miaImmagine");
        //myImg.src = "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-social-logo.png";
        cambiaSorgenteImmagine("miaImmagine", parametri.sorgenteImmagine);
    } else {
        cambiaClasseCss("miaCard",parametri.primary,parametri.warning);
    }
}

/* myButtonFontSize8.addEventListener("click", function(){
    //document.body.style.fontSize = "8px"; //Setto il font-size del body
    //console.log(document.body.style);
    cambiaFontSize("8");
}) */

const changeSize8 = closureFontSize(8);
const changeSize16 = closureFontSize(16);
const changeSize50 = closureFontSize(50);
//console.log(changeSize8);

const myButtonFontSize8 = document.getElementById("modificaFontSize8"); //Punto al bottone font size
const myButtonFontSize16 = document.getElementById("modificaFontSize16"); //Punto al bottone font size
const myButtonFontSize50 = document.getElementById("modificaFontSize50"); //Punto al bottone font size

/* myButtonFontSize16.addEventListener("click", function(){
    //document.body.style.fontSize = "16px"; //Setto il font-size del body
    //console.log(document.body.style);
    cambiaFontSize("16");
}) */

myButtonFontSize8.addEventListener("click", changeSize8);
myButtonFontSize16.addEventListener("click", changeSize16);
myButtonFontSize50.addEventListener("click", changeSize50);

/* myButtonFontSize50.addEventListener("click", function(){
    //document.body.style.fontSize = "50px"; //Setto il font-size del body
    //console.log(document.body.style);
    cambiaFontSize("50");
}) */


myButton.addEventListener('click', function () { //Utilizzo questa funzione solo in questo caso
    //const numeroRandom = Math.random(); //Genera il numero tra 0 e 1
    modificaCard(Math.random());
    /* if(numeroRandom > 0.5) {
        cambiaClasseCss("miaCard",parametri.primary,parametri.danger);   
        //const myImg = document.getElementById("miaImmagine");
        //myImg.src = "https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-social-logo.png";
        cambiaSorgenteImmagine("miaImmagine", parametri.sorgenteImmagine);
    } else {
        cambiaClasseCss("miaCard",parametri.primary,parametri.warning);
    } */
    
    //console.log("Ho cliccato il pulsante");
    //const myCard = document.getElementById("miaCard");
    //console.log(myCard);
    //myCard.className = "card text-white bg-success mb-3";
    //myCard.classList.remove("bg-primary");
    //myCard.classList.add("bg-success");
})

const aggiungiCardButton = document.getElementById("aggiungiCard"); //Punto al bottone aggiungiCard
aggiungiCardButton.addEventListener('click', function (){ //Evento click sul bottone aggiungiCard
    /* const contenutoCard = { //Definisco un oggetto
        idCard: "miaCard",
        idImmagine: 1,
        sorgenteImmagine: "https://th.bing.com/th/id/R.01241cea06b096ac90461904353bd688?rik=D8lGtjGtYDfsxg&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f11%2fJavaScript-logo.jpg&ehk=GBk32yNZVy8FPu%2fyJqGP7hJ843CTenl9ocRWZ6KDzVA%3d&risl=&pid=ImgRaw&r=0",
        titoloHeader: "Header",
        titoloCard: "Primary card title",
        contenutoParagrafo: "Some quick example text to build on the card title and make up the bulk of the card's content."
    } */
    for(let i=0; i<10; i++){
        const contenutoCard = generaDati(i+'Card',i+'Immagine');
        disegnaCard(contenutoCard,"contenitoreCard");
    }   
})

const rimuoviTutteCard = document.getElementById("rimuoviTutteCard");
rimuoviTutteCard.addEventListener('click', function() {
    let element = document.getElementById("contenitoreCard");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
})