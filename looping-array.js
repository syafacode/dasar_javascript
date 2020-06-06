var bil = [5, 9, 3, 9, 1, 6];

function withFor() {
    for (var i = 0; i < bil.length; i++) {
        console.log(bil[i]);
    }
}

function withWhile() {
    var i = 0;
    while (i < bil.length) {
        console.log(bil[i]);
        i++
    }
}

withFor();