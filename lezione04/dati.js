function generaDati(idCard, idImmagine){
    const contenutoCard = { //Definisco un oggetto
        idCard: idCard,
        idImmagine: idImmagine,
        sorgenteImmagine: "https://th.bing.com/th/id/R.01241cea06b096ac90461904353bd688?rik=D8lGtjGtYDfsxg&riu=http%3a%2f%2f1000marcas.net%2fwp-content%2fuploads%2f2020%2f11%2fJavaScript-logo.jpg&ehk=GBk32yNZVy8FPu%2fyJqGP7hJ843CTenl9ocRWZ6KDzVA%3d&risl=&pid=ImgRaw&r=0",
        titoloHeader: "Header",
        titoloCard: "Primary card title",
        contenutoParagrafo: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    return contenutoCard;
}