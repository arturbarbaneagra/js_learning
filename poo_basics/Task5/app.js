function extractCurrencyValue(str) {
  return +str.slice(1);
}

  let val = prompt("Introdu valoarea");
  alert(extractCurrencyValue(val));