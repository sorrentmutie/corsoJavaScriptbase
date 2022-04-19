import * as ModuloRandomUser from './randomUserMe.js';
import * as Settings from './settings.js';
import * as DisegnaUtenti from './disegnaUtenti.js';

ModuloRandomUser.estraiUtentiArrow(Settings.urlRandomUser)
    .then(dati => {
        // console.log(dati.results);
        const utentiMaschi = ModuloRandomUser.selezionaUtentiPerSessoArrow(dati.results, 'male');
        console.log(utentiMaschi);
        const conteggi = ModuloRandomUser.contaPersone(dati.results);
        // const main = document.getElementById('main');

        // const pMaschi = document.createElement('p');
        // pMaschi.innerText = "Numero maschi: " + conteggi.numeroMaschi;
        // main.appendChild(pMaschi);

        // const pFemmine = document.createElement('p');
        // pFemmine.innerText = "Numero femmine: " + conteggi.numeroFemmine;
        // main.appendChild(pFemmine);

        DisegnaUtenti.disegnaContatore(conteggi);
        const persone = ModuloRandomUser.mappaUtentiInPersone(dati.results);
        //console.log(persone);
        persone.forEach(persona => console.log(persona.stampaNomeCompleto()));

        const personeSpeciali = ModuloRandomUser.mappaUtentiInPersoneSpeciali(dati.results);
        // console.log(personeSpeciali);
        personeSpeciali.forEach(persona => {
            console.log(persona.name.first + ' ' + persona.name.last + ": " + persona.stampaIndirizzo());
            DisegnaUtenti.disegnaCard(persona, 'cards');
        });

    });