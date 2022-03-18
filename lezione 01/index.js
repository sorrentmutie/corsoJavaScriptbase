SortArray();
// console.log('Hello da index.js');

function SortArray() {
    var c= [7,1,3,12,24,5,9];
    console.log(typeof(c));
    console.log(c.sort(function(a,b){
        console.log(a);
        console.log(b);
        return a-b;
    }));
    console.log(c);
}

function HelloFunction(){
    console.log('Hello  da function');
}

function SestaDemoNull(){
    var a = null;
    console.log(a);
    a = {esempio : 12};
    a.esempiobis = 13;
    console.log(a.esempiobis);

    var a = 12;
    var b = 1;
    var c = a +b;
    var confronto = c === "13";

    // == va sostituito il ===
    // != va sostituito con !==
    // !==
    console.log(confronto);
}

function QuintaDemoArray(){
    var a = [];
    a.push("a");
    a.push("b");
    a.push(12);
    a.push({ a: 12, b: 13});
    console.log(a.length);
    console.log (a[3]);
    
    var b = ["a","b","c", {e: 1, f: { g: 2, h: 3}}];
    console.log(b.length);
   // delete b[0];
   // console.log(b[0]);
    b.splice(0,1);
    console.log(b);

    var c = [1,43,3,56,8, 41];
    // c.sort();
    
    c.sort(function(a,b){
        return a-b;
    })
    console.log(c);
}

function QuartaDemo(){
// int a = 5;
// a = "topolino";
   var a = 5;
   var b = "pippo";
   // var c = a+ b;
   var d = true;

//    a = "topolino";
//    console.log(a);
    var c = a * b;
    var f = c + 1;
    var controllo = f == NaN;
   // console.log(isNaN(controllo));

   // var p1 = new Boolean(0);
    var p1 = new Boolean({});
    var p2 = new Boolean("0");
console.log(p1);

}


function TerzaDemoOggetto(){
    var persona = {
        nome: "Mario",
        cognome: 'Rossi',
        indiceJavaScript : 20,
        stipendio: 20000,
        sposato: true
    };

    var studente = {
        matricola: "A1234"
    };

    Object.setPrototypeOf(studente, persona);
    // console.log(studente);
    // for(var property in studente){
    //     var value = studente[property];
    //     console.log(property, value);
    // }

   var essereumano = new Object();
   // var essereumano = {};
   // var essereumano = Object.create(null);

   var marioRossi = new Persona("Mario", "Rossi");
   var luigiBianchi =  new Persona("Luigi", "Bianchi");
   console.log(luigiBianchi.stampaNomeCompleto());

}

function Persona(nome, cognome) {
    console.log(this);
    this.nome = nome;
    this.cognome = cognome;
    this.stampaNomeCompleto = function() {
        return this.nome + " " + this.cognome;
    }
}

function SecondaDemoOggetto(){
    var righello = {
        mm: 150
    }

    Object.defineProperty(righello, "inch", {
        get: function(){
            console.log("sto invocando il get");
            return this.mm / 25.4;
        },
        set: function(valore){
            console.log("sto invocando il set");
            this.mm = valore * 25.4;
        }
    });

    console.log(righello.inch);
    righello.inch = 200;
    console.log(righello.mm);

  //  var x = righello.inch;
  //  righello.inch = 150;
}




function PrimaDemoOggetto(){
    var persona = {
        nome: "Mario",
        cognome: 'Rossi',
        indiceJavaScript : 20,
        stipendio: 20000,
        sposato: true
    };

    console.log(Object.keys(persona));

  //  persona.mianuovaproprieta = 240;

    Object.defineProperty(persona, "mianuovaproprieta", {
        value: 240,
        writable: true
    });

    console.log(persona);
    // console.log(persona.cognome);
    // console.log(persona["cognome"]);

    // persona.indiceVisualBasic = -30;
    // console.log(persona);
    // // delete persona.indiceJavaScript;
    // console.log(persona);

    // " "  ' '
 }