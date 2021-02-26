var secretNumber = 5;

var guess = prompt("Guess a Number");

if(Number(guess) === secretNumber) {
	alert("You Got It Right !!!");
}

else if(Number(guess) > secretNumber){
	alert("You Guess Too High. Try Again !!");
}

else{
	alert("You Guess Too Low. Try Again !!");
}