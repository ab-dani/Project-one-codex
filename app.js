

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