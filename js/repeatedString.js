// function repeatedString(s, n) {
//     // Write your code here
//     var x = n / s.length;
//     if(!Number.isInteger(x)) x = parseInt(x) + 1;
//     var newString = "";
//     for(let i=0; i<x;i++){
//         if(i == (x - 1) && ((x*s.length) != n) ) {
//             var letters = s.length - (x*s.length-n);
//             newString += s.substring(letters,0);
//         } else {
//             newString += s;
//         }
        
//     }
//     return newString.split("a").length - 1
// }


function repeatedString(s, n) {
    // Write your code here
    var x = n / s.length;
    if(!Number.isInteger(x)) x = parseInt(x) + 1;
    var newString = "";
    var count = 0;
    count += s.split("a").length - 1;
    if(x*s.length == n){
        count = count*(x);
    } else {
        count = count*(x -1);
        var letters = s.length - (x*s.length-n);
        count += s.substring(letters,0).split("a").length - 1;
    }
    return count;
}

var text = "a";
var size = 1000000000000;

var text = "aba";
var size = 10;

var result = repeatedString(text, size);

console.log(result);