function decryptPassword(s) {
    // Write your code here
    s = s.split('');
    var newString = [];
    for(let i = s.length - 1 ; i >= 0;i--){
        let value = s[i];
        if (value == '0'){
            let first = s.shift();
            i--;
            newString.unshift(first);
        } else if(value == '*'){
            newString.unshift(s[i-2]);
            newString.unshift(s[i-1]);
            i--;
            i--;
        } else {
            newString.unshift(value);
        }
    }
    return newString.join('');
}

decryptPassword

// 51Pa*0Lp*0e
// aP1pL5e

// pTo*Ta*O
// poTaTO
