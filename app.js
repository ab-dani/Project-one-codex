

alert("Olá");

document.write("Hello World!");

function username() {
  let name = prompt("What's your name?");

  while (name !== "Antonio") {
    name = prompt("What is your name?");
   
  }
  alert("Welcome" + name)
}

username();


function guessColor(){
let color = prompt("What's my favorite color?");

if (color == "blue") {
  alert("You are right!");
} else {
  alert("Nope not it!");
}
}

guessColor();





function guessAge() {
  let age = prompt('How old are you?');
  
  let message;
  if(age == ''){
      usersAge();
  } else if (age < 18) {
      message = 'You are a minor';
  } else if (age >= 18) {
      message = 'You are an adult';
  } else if (age >= 65) {
      message = 'You qualify for our senior discount';
  } else {
      message = 'That is not a valid entry. Please enter your age in numbers';
  }

  console.log(message);
  return document.write(message);

}

function displayRating(){
  let output = "";
  let rating = prompt('Rate my page on a scale of 1-5');
  for (let i = 0; i < rating; i++){
    output += "<img class = 'phto' src='data:https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80'/>"
  }
document.write(output)
}