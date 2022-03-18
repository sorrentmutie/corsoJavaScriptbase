var myFunction = function (a,b) {
    console.log('myFunction');
    return a + b;
};

var sommaquadrati = function(a,b) {
    return a*a + b*b;
}

var concatenatore = function(a,b) {
    return a + "---" + b;
}



var funzioneSpeciale = function(a,b, funzione) {
    return funzione(a,b);
}


// var c = myFunction(3,4);
// console.log(c);
// myFunction(12,13);
var d = funzioneSpeciale(10,20, myFunction);
console.log(d);
var e = funzioneSpeciale(10,20,sommaquadrati);
console.log(e);
var f = funzioneSpeciale(10,20,concatenatore);
console.log(f);
console.log(typeof(myFunction));
console.log(myFunction);
console.log(myFunction.toString());


// var x = undefined;


// x = 

function bellaFunzione(a,b){
    console.log(this);
    // console.log(arguments);
    // if(arguments.length == 1) {
    //     return a + 12;
    // }
   // console.log(a);
    return a+ b;
}

var n = function funzioneStrana(){
    console.log(this);
    var random =  Math.random(1,300);
    console.log(random);
    return random;
    // return 5;
}

//console.log(bellaFunzione(10,23));
//var h = bellaFunzione(1,2);
//console.log(h);
// var i = bellaFunzione(1,2,3,4,5,6);
//var l = bellaFunzione(1);
// var m = bellaFunzione(1, {a: 3, b:5});
// console.log(m);
//n();

function Persona (nome, cognome) {
    this.nome = nome;
    this.cognome = cognome;
    console.log(this);
}

var p = new Persona('mario','rossi');

var q = {
    a: 1,
    b: "ciao",
    c: true,
    d: function(a) {
        console.log('arrivederci');
        console.log(this);
    }
}

q.d();

var z= {a: 1, b: 2};
var z1 = q.d.apply(z,[]);
