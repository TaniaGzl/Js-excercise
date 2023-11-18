// Declare variables
let firstName = 'Tania';
let lastName = 'Gonzalez';
let country = 'Mexico';
let city = 'Playa del Carmen';
let age = 22; 
let isMarried = false;
let year = 2023;

// Check data type
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Check equality
console.log(typeof '10' === typeof 10); 

// Convert '9.8' to integer and verify equality
console.log(parseInt('9.8') === 10); 

// True statements
let statement1 = 5 > 2; 
let statement2 = 'Hello' !== 'Goodbye'; 
let statement3 = (10 + 5) === 15; 

// false statements
let statement4 = 3 < 1; 
let statement5 = 'apple' === 'orange';
let statement6 = (20 / 2) === 9;

// Calculate the result of each expression
let result1 = 4 > 3;
let result2 = 4 >= 3; 
let result3 = 4 < 3;
let result4 = 4 <= 3;
let result5 = 4 == 4;
let result6 = 4 === 4;
let result7 = 4 != 4;
let result8 = 4 !== 4;
let result9 = 4 != '4';
let result10 = 4 == '4';
let result11 = 4 === '4'; 

// Confirm results using console.log()
console.log(result1);
console.log(result2); 
console.log(result3); 
console.log(result4);   
console.log(result5); 
console.log(result6);
console.log(result7);  
console.log(result8);  
console.log(result9);   
console.log(result10);  
console.log(result11);  

// Date and hour
let today = new Date();

// Year
let currentYear = today.getFullYear();

// month
let currentMonth = today.getMonth() + 1; 

// date
let currentDate = today.getDate();

// day
let currentDay = today.getDay();

// name of the days of the week
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Get the name of the current day of the week
let currentDayName = daysOfWeek[currentDay];

// Hour
let currentHour = today.getHours();

// Minute
let currentMinutes = today.getMinutes();

// seconds
let currentSeconds = today.getSeconds();

// Obtain the number of seconds elapsed from January 1, 1970 to the present.
let secondsSinceEpoch = Math.floor(today.getTime() / 1000);


console.log('Current year:', currentYear);
console.log('CurrentMonth:', currentMonth);
console.log('Current date:', currentDate);
console.log('Current weekday:', currentDayName);
console.log('Current hour:', currentHour);
console.log('Current minutes:', currentMinutes);
console.log('Current seconds:', currentSeconds);
console.log('Elapsed seconds since January 1, 1970:', secondsSinceEpoch);

let base = 20;
let height = 10;


base = parseFloat(base);
height = parseFloat(height);


let area = 0.5 * base * height;

console.log('The area of the triangle is: ' + area);

// prompt the user to enter the sides of the triangle
let sideA = 5;
let sideB = 4;
let sideC = 3;

sideA = parseFloat(sideA);
sideB = parseFloat(sideB);
sideC = parseFloat(sideC);

// Calculate the perimeter of the triangle
let perimeter = sideA + sideB + sideC;

// Display the result in the console
console.log('The perimeter of the triangle is: ' + perimeter);






