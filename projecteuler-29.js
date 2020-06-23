var main = function() {

    var arr = [];

    for (var a = 2; a <= 100; a++) {
        for (var b = 2; b <= 100; b++) {
            arr.push(BigInt(Math.pow(a, b)));
        }
    }
    //arr.sort((a, b) => a - b);

    return arr.filter(function(elem, pos) {
        return arr.indexOf(elem) == pos;
    }).length;
}

console.log(main());