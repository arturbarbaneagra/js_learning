let username = prompt("Please register your new username");
let password = prompt("Please register your new password");
/*
let un = prompt("Please input your username");
let pw = prompt("Please input your password");
if (!((un === "null")||(pw === "null"))) {
  if (username === un) {
    if (password === pw) {
      alert("Hello")
    } else {
      alert("Wrong password")
    }
  } else { 
    alert("Wrong username")
  }
}
*/


let un = prompt("Please input your username");
if ((username === un)&&!(un === null)) {
  let pw = prompt("Please input your password");
  if ((password === pw)&&!(pw === null)) {
    alert("Hello", username)
  } else if (pw === null) {
    alert ("Validation error")
  } else {
    alert ("Wrong password")
  }
} else if (un === null) {
  alert ("Validation error")
} else {
  alert ("Wrong username")
}