{
    var x = 2;
    let y = 3;
    const z = 4;
}

if(true){
    console.log(x);
    // console.log(y);
    //console.log(z);    
}


let a = 5;
a = a + 1;
console.log(a);
// let a = 5;

const b = {
    a: 4,
    b: 5
};

b.a = 14;
console.log(b);

var miaFunzione = function(){
    console.log('facciamo qualcosa');
}

// setTimeout(miaFunzione, 5000);
// setTimeout( function(){
//     console.log('facciamo qualcosa in forma anonima');
// }, 10000);

// setInterval(miaFunzione, 1000);

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log("i=" +  i);
    }, 3000);
}