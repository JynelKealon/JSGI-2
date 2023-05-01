// Below is the initial alert, and the prompt for the user to input a number between 1 & 12
alert("Hello");
var number = prompt("Enter a number 1-12");

number = parseInt(number);

// Below is the array for the months of the year
var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novermber",
    "December",
];

// Below is the conditional statement 

if (number >= 1 && number <= 12){
    console.log(month[number-1]);
} else {
    console.log("Only pick a number 1-12")
}