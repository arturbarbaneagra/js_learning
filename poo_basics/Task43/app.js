function multiplyNumeric(obj) {
  menu.width = menu.width * 2;
  menu.height = menu.height * 2;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

multiplyNumeric(menu);
console.log(menu);