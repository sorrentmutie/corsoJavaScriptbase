export const messaggio = "Messaggio proveniente da un modulo";

function cubo(x) {
    return x * x* x;
}

const piGreco = Math.PI;

const mioOggetto = {
    opzioni: { 
        colore: 'nero',
        dimensione: '10px'
    },
    disegna: function() {
        console.log('Sono nella funzione disegna');
    }
};


export {cubo, piGreco, mioOggetto};