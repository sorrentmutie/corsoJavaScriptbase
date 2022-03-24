function disegnaCard(datiCard, contenitoreCard){
    //console.log("Disegno card");
    //Creare il div mia card > fatto
    const miaCard = creaDivMiaCard(datiCard);
    const contenitore = document.getElementById(contenitoreCard);
    contenitore.appendChild(miaCard);
    //Creare il tag img (figlio di miaCard) > fatto
    //Creare il div Header > fatto
    //Creare il div card body > fatto
    //Creare il tag h4 > fatto
    //Creare il paragrafo > fatto
}

function creaDivMiaCard(datiCard){
    const myDiv = document.createElement("div");
    const myImg = document.createElement("img");
    const myHeader = document.createElement("div");
    const myBody = document.createElement("div");
    const myTagH4 = document.createElement("h4");
    const myParag = document.createElement("p");
    const bottoneRimozioneCard = document.createElement("button");

    myImg.id = datiCard.idImmagine;
    myImg.className = "card-img-top";
    myImg.src = datiCard.sorgenteImmagine;
    myDiv.id = datiCard.idCard;
    myDiv.className = "card text-white bg-primary mb-3";
    myHeader.className = "card-header";
    myHeader.innerText = datiCard.titoloHeader;   
    myBody.className = "card-body";
    myTagH4.className = "card-title";
    myTagH4.innerText = datiCard.titoloCard;
    myBody.appendChild(myTagH4);
    myParag.className = "card-text";
    myParag.innerText = datiCard.contenutoParagrafo;
    myBody.appendChild(myParag);

    myDiv.style.maxWidth = "20rem";
    myDiv.style.marginTop = "10px";
    bottoneRimozioneCard.innerText = "OK";
    bottoneRimozioneCard.className = "btn btn-danger";
    bottoneRimozioneCard.id = datiCard.idCard+'remove';
    myDiv.appendChild(myImg);
    myDiv.appendChild(myHeader);
    myDiv.appendChild(myBody);
    myDiv.appendChild(bottoneRimozioneCard);

    bottoneRimozioneCard.addEventListener('click', function(){
        console.log(this.id);
        let d = document.getElementById("contenitoreCard");
        let d_nested = document.getElementById(myDiv.id);
        let throwawayNode = d.removeChild(d_nested);
    })

    return myDiv;
}


/* <div id="miaCard" class="card text-white bg-primary mb-3" style="max-width: 20rem; margin-top: 10px;">
<img id="miaImmagine" class="card-img-top" src="https://th.bing.com/th/id/R.01241cea06b096ac90461904353bd688?rik=D8lGtjGtYDfsxg&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f11%2fJavaScript-logo.jpg&ehk=GBk32yNZVy8FPu%2fyJqGP7hJ843CTenl9ocRWZ6KDzVA%3d&risl=&pid=ImgRaw&r=0" alt="Card image cap">
<div class="card-header">Header</div>
<div class="card-body">
  <h4 class="card-title">Primary card title</h4>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div> */

/* const contenutoCard = { //Definisco un oggetto
    idCard: 1,
    idImmagine: 1,
    sorgenteImmagine: "https://th.bing.com/th/id/R.01241cea06b096ac90461904353bd688?rik=D8lGtjGtYDfsxg&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f11%2fJavaScript-logo.jpg&ehk=GBk32yNZVy8FPu%2fyJqGP7hJ843CTenl9ocRWZ6KDzVA%3d&risl=&pid=ImgRaw&r=0",
    titoloHeader: "Header",
    titoloCard: "Primary card title",
    contenutoParagrafo: "Some quick example text to build on the card title and make up the bulk of the card's content."
}*/