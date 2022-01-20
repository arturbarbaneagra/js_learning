let a = Number(prompt("Introdu a"));
let b = Number(prompt("Introdu b"));
let s = 0;

if ((a < b) && (a >= 0) && (b > 0)) {
    for ( a; a < b; a++) {
        if (a % 2 == 0) {
            s += a;
        }
    }
    console.log("Suma: ", s);
} else {
    console.log("Error");
}