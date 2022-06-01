// var arr = [3, 3, 2, 1, 3];
const masRepetido = ar => ar.reduce((acum, el, i, ar) => {
    const count = ar.filter(e => e == el).length;
    return count > acum[1] ? [el, count] : acum;
}, ["", 0]
)

console.log('masRepetido', masRepetido([3, 3, 2, 1, 3]));