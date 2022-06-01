function squares(a, b) {
    // Write your code here
    var count = 0;
    var aux = 1;
    for(let i = a; i<=b; i++){
        console.log('i',i);
        var raiz = Math.sqrt(i);
        if (raiz%1 != 0) {
            i = Math.pow(parseInt(raiz) + 1,2) -1;
        } else {
            count++;
        }
        
    }
    return count;
}

function getAux(i,aux){
    if(i<= aux){
        return aux;
    } else {
        var raizAux = Math.sqrt(aux) + 1;
        // console.log('aux',aux,'raizAux',raizAux);
        console.log(aux);
        aux = raizAux * raizAux;
        return getAux(i,aux);
        // return 
    }
}

var inicial = 465868129;
var final = 988379794;
var c = squares(inicial,final);
console.log(c);