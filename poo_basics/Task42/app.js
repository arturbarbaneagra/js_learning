let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
let salaryValues = Object.values(salaries);
for (i = 0; i < salaryValues.length; i++) {
    sum += salaryValues[i];
}
console.log(sum);
