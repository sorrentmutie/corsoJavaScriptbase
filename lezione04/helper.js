function cambiaClasseCss(tagHtml,classeDaRimuovere,classeDaAggiungere){
    const myCard = document.getElementById(tagHtml);
    myCard.classList.remove(classeDaRimuovere);
    myCard.classList.add(classeDaAggiungere);
}

function cambiaSorgenteImmagine(tagHtml,sorgenteImmagine){
    const myImg = document.getElementById(tagHtml);
    myImg.src = sorgenteImmagine;
}

function cambiaFontSize(fontSize){
    document.body.style.fontSize = fontSize+'px'; //Setto il font-size del body
}

function closureFontSize(fontSize){
    return function(){
        document.body.style.fontSize = fontSize+'px'; //Setto il font-size del body
    }
}