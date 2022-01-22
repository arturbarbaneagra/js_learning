const dividers = (number) => {
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
        console.log(i);
      }
    }
  } else {
    alert("Please input an positive number")
  }
}

dividers(prompt("Input the number"));