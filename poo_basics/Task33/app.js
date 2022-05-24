styles = ["Jazz", "Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.round(styles.length/2)] = "Classic";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap");
styles.unshift("Raggy");
console.log(styles);
//splice