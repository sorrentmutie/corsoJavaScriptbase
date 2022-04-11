const mammaContenta = true;

const laMammaCompreraUnTelefono = new Promise(
    function(resolve,reject) {
        if(mammaContenta) {
            const telefono = {
                marchio: "Apple",
                modello: "iPhone 13",
                colore: "Nero"
            };
            resolve(telefono);
        } else {
            const motivo = new Error("Sei stato cattivo");
            reject(motivo);
        }
    }
);

const mostraUnTelefonoAgliAmici = function(telefono) {
    console.log(telefono);
    return new Promise(function(resolve,reject){
        if(telefono) {
            const saluto = "Ciao, ragazzi! Ecco il mio telefono nuovo " + telefono.modello;
            resolve(saluto);
        }  else {
            const messaggio = "Che delusione! Non ho ricevuto niente";
            reject(messaggio);
        }
    });
}