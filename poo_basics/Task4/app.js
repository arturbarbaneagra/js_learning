function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  let cuv = prompt("Introdu cuvantul");
  alert(ucFirst(cuv));