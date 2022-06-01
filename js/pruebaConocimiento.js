function suma (matriz) {
    for(let i=0;i<matriz.length;i++){
        let x = i;
        
        let element = matriz[i];
        sum = element[1];
        // search IDS
        for(let j=i+1;j<matriz.length;j++){
            if(element[0] == matriz[j][0]){
                sum += matriz[j][1];
                matriz.splice(j, 1);
                j--;
                i--;
            }
        }
        matriz[x][1] = sum;
    }
    return matriz;
}

// id,valor
let m = [ [0, 20], [3, 80], [2, 50], [0, 30], [3, 20] ];

// conseguir el siguiente resultado: [ [ 0, 50 ], [ 3, 100 ], [ 2, 50 ] ];
var result = suma (m);
console.log('result',result);