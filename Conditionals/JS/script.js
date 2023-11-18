// Get user's age by using prompt
let ageUser = prompt("Enter your age:");

// Convert the input to a number
ageUser = parseInt(ageUser);

// Check the age and display the corresponding message
if (ageUser >= 18) {
    console.log("You are old enough to drive.");
} else {
    let missingyears = 18 - ageUser;
    console.log("You are missing " + missingyears + " years to drive.");
}


// Convert the input to a number
myAge = parseInt(ageUser);

// Reference age (you can change this according to your age).
let yourAge = 25;

// Compare the ages and display the result in the console
if (ageUser > yourAge) {
    let ageDifference = ageUser - yourAge;
    console.log("You are " + differenceAge + " years older than me.");
} else if (ageUser < yourAge) {
    let ageDifference = yourAge - ageUser;
    console.log("You are " + ageDifference + " years younger than me.");
} else {
    console.log("We are the same age.");
}

//Using if...else:
let a = 10;
let b = 5;

if (a > b) {
    console.log('a is greater than b');
} else {
    console.log('a is less than b');
}

//Using the ternary operator:
let result = (a > b) ? 'a is greater than b' : 'a is less than b';
console.log(result);

// Get user input using prompt
let month = prompt("Enter a month:");

// Convert the input to lowercase to make it case insensitive.
month = month.toLowerCase();

// Check the season and display the result in the console using switch
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn.');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter.');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring.');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer.');
        break;
    default:
        console.log('Invalid month. Please enter a valid month.');
        break;
}

// Get the student's score by using prompt
let score = prompt("Enter the student's score:");

// Convert the input to a number
score = parseFloat(score);

// Define the score using switch
let qualification;

switch (true) {
    case score >= 80 && score <= 100:
        qualification = 'A';
        break;
    case score >= 70 && score < 80:
        qualification = 'B';
        break;
    case score >= 60 && score < 70:
        qualification = 'C';
        break;
    case score >= 50 && score < 60:
        qualification = 'D';
        break;
    case score >= 0 && score < 50:
        qualification = 'F';
        break;
    default:
        qualification = 'Invalid score';
}

// Show the result in the console
console.log('Score: ' + qualification);
