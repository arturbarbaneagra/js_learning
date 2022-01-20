let a = Number(prompt("Introdu a"));
let b = Number(prompt("Introdu b"));
let c = Number(prompt("Introdu c"));

alert((a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c));