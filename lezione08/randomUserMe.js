const estraiUtenti = function(url) {
//    const x =  fetch(url).json().then( 
//        dati => console.log(dati)
//    );
//console.log(x);
   const response = fetch(url).then(response => response.json());
   return response;
};


//const estraiUtentiArrow = (url) => fetch(url).then(resp => resp.json());
const estraiUtentiArrow = (url) => fetch(url).then(function(response) {
    return response.json();
});


const selezionaUtentiPerSesso = function(utenti, sesso) {
    const utentiSelezionati = utenti.filter( function(utente) { return utente.gender ===  sesso; });
    return utentiSelezionati;
};

const selezionaUtentiPerSessoArrow = (utenti, sesso) => utenti.filter( utente =>  utente.gender ===  sesso);
    
const contaPersone = function(utenti) {
    const maschi = selezionaUtentiPerSesso(utenti,'male');
    const femmine = selezionaUtentiPerSesso(utenti,'female');
    return {
        numeroMaschi:  maschi.length,
        numeroFemmine: femmine.length
    };
};

class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
    stampaNomeCompleto() {
        return this.nome + " " + this.cognome;
    }
}

class PersonaSpeciale {
    constructor(utente) {
        const {gender, name, location, phone, picture} = utente;
        // const {city} = utente.location;
        this.gender = gender;
        this.name = name;
        this.location = location;
        this.phone = phone;
        this.picture = picture;
    }
    stampaIndirizzo() {
        const {street, city, state, country} = this.location;
        return street.name + " " + street.number + " - " + city + 
          ", " + state + ", " + country;
    }
}


const mappaUtentiInPersone = function (utenti) {
    const persone = utenti.map( function(utente) {
        return new Persona(utente.name.first, utente.name.last);
    });
    return persone;
};

const mappaUtentiInPersoneSpeciali = function(utenti) {
    const personeSpeciali = utenti.map (function(utente) {
        return new PersonaSpeciale(utente);
    });
    return personeSpeciali;
};


export {estraiUtenti, contaPersone, estraiUtentiArrow, selezionaUtentiPerSesso, 
    selezionaUtentiPerSessoArrow, mappaUtentiInPersone, mappaUtentiInPersoneSpeciali};