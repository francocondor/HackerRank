function stripProperty(obj,prop){
    delete obj[prop];
    return obj;
    return {};
}

const obj = {};
obj['foo'] = parseInt(2);
obj['bar'] = parseInt(3);
obj['baz'] = parseInt(3);

console.log(stripProperty(obj,'foo'));
