function sumInputNumbers () {
    let number = prompt("Input number");
    let numbers = [];
    while ((!(isNaN(Number(number))))&&!(number === "")&&(!(number === null))) {
        numbers.push(Number(number));
        number = prompt("Input number");
    }
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}
sumInputNumbers();