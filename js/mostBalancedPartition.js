function mostBalancedPartition(parent, files_size) {
    // Write your code here
    console.log('parent',parent,'files_size',files_size);
    // var max = 0;
    // var min = 0;
    // max = sumas(0,parent,files_size);
    // min = sumasMin(0,parent,files_size);
    // console.log('min',min);
    // for(let i=0 ; i<parent.length ; i++){
        
    //     console.log(max);
    // }

    var arboles = getArboles();


}

function getArboles(parent,files_size){
    var arbol = [];
    
    for(let p = 0; p<parent.length; p++){
        if(parent[p] == i){
            arbol.push(files_size[i])
        }
    }
    return getArboles(parent,files_size)
}

// function sumas(i,parent,files_size){
//     console.log('i',i);
//     var arrsum = [];
//     var sum = 0;
//     for(let p = 0; p<parent.length; p++){
//         if(parent[p] == i){
//             // console.log('parent[p]',parent[p],'files_size[i]',files_size[i]);
//             sum = sumas(p,parent,files_size) +files_size[i];
//             // console.log('p',p,'sum',sum);
//             arrsum.push(sum);
//         }
//     }
//     // console.log('arrsum',arrsum);
//     return Math.max(Math.max.apply(null,arrsum),0);
// }


var aux_parent = [ -1, 0, 1, 2 ] ;
var aux_files_size = [ 1, 4, 3, 4 ];

mostBalancedPartition(aux_parent,aux_files_size);