function appendAndDelete1(s, t, k) {
    // Write your code here
    
    var del = 0;
    var app = 0;
    
    if(s == t){
        del = s.length+1;
        app = t.length;
        console.log('del+app',del+app);
        return (k >= del+app) ? 'Yes' : 'No' ;
    }
    
    var index = -1;
    var s = s.split('');
    s.every((val)=>{
        index++;
        return val != t[index] || (val == t[index] && s[index+1] != t[index+1]) ?  false : true;
    })
    
    del = s.length - (index+1);
    app = t.length - (index+1);
    console.log('del+app',del+app);
    
    return (k >= del+app) ? 'Yes' : 'No' ;
}

function appendAndDelete(s, t, k) {
    for (var i=0; i < s.length; i++) {
        if (s[i] != t[i]) {
            break;
        }
        console.log('i',i);
    }
    
    var deletesRequired = s.length - i;
    var addsRequired = t.length - i;
    var minRequired = deletesRequired + addsRequired;
    var max = s.length + t.length;
    console.log("deletesRequired",deletesRequired,"addsRequired",addsRequired,'minRequired',minRequired,"max",max,"k",k);
    
    if (k < minRequired || ((k % 2 != minRequired % 2) && k < max)) {
        return "No";
    } else {
        return "Yes";
    }
}

var start = 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv';
var desired = 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv';

var start = 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv';
var desired = 'bsdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv';
var k_operations = 10;

// var start = 'y';
// var desired = 'yu';
// var k_operations = 2;

// var start = 'abcd';
// var desired = 'abcdert';
// var k_operations = 5;

// var start = 'aba';
// var desired = 'aba';
// var k_operations = 39;

// console.log('SOLUCION 1:',appendAndDelete1(start, desired, k_operations));
console.log('SOLUCION:',appendAndDelete(start, desired, k_operations));