let n = prompt("Input length of array ");
let numbers = [];
    for (let i = 0; i < n; i++) {
        number = prompt("Input number");
        if ((!(isNaN(Number(number))))&&!(number === "")&&(!(number === null))) {
            numbers.push(Number(number));
        }
    }
    for (let i = 0; i < n; i++) {      //first method
        console.log(numbers[i])
    }

    let i = 0;
    while (i < n) {                    //second method
        console.log(numbers[i])
        i++;
    }

    i = 0;
    do {                              // third method
        console.log(numbers[i])
        i++;
    } while (i < n)

    for (let value of numbers) {      //fourth method
        value +=0;
        console.log(value)
    }

    console.log(numbers.map((num) => num))    //fifth method