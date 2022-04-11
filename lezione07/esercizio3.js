const sommaOld = function (a,b) {
    return a + b;
}

const somma = (a,b) => a + b;
const speciale = () => Math.random();
const unicoArgomento = a => a * 2;

function Person() {
    this.eta = 0;
    // const that = this;
    // console.log(this);
    // setInterval( function(){
    //     //console.log(this);
    //     //console.log(that.eta);
    //     this.eta++;
    //     console.log(this.eta);
    // }, 1000)
    setInterval( () => {
        //console.log(this);
        //console.log(that.eta);
        this.eta++;
        console.log(this.eta);
    }, 1000)
}