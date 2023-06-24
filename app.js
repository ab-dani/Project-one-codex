
alert("Olá");

document.write("Hello World!");

console.log("Bonjour!");


function renderUsername(){
  username = prompt('What is your name?');
  if (username == '') {
  renderUsername();
  }
  console.log(username);
  return document.write('Hello' + username);
  }


let age = prompt("How old are you?");

if (age < 18) {
  alert("You cannot apply");
} else {
  alert("You can apply");
}


let color = prompt("What's my favorite color?");

if (color < blue) {
  alert("You are right!");
} else {
  alert("Nope not it!");
}
