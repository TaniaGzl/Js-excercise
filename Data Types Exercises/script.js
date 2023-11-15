 //variable named challenge and assign it an initial value
 let challenge = '30 Days Of JavaScript';

 // Print the string on the browser console using console.log()
 console.log(challenge);

 // Print the length of the string on the browser console using console.log()
 console.log(challenge.length);

 // Change all the string characters to capital letters using toUpperCase() method
 console.log(challenge.toUpperCase());

 // Change all the string characters to lowercase letters using toLowerCase() method
 console.log(challenge.toLowerCase());

 // Cut (slice) out the first word of the string using substr() or substring() method
 console.log(challenge.substring(0, challenge.indexOf(' ')));

 // Slice out the phrase 'Days Of JavaScript' from '30 Days Of JavaScript'
 console.log(challenge.slice(challenge.indexOf('Days'), challenge.length));

 // Check if the string contains a word 'Script' using includes() method
 console.log(challenge.includes('Script'));

 // Split the string into an array using split() method
 console.log(challenge.split(' '));

 // Split the string '30 Days Of JavaScript' at the space using split() method
 console.log(challenge.split(' '));

 // Split the string 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' at the comma and change it to an array
 let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
 console.log(companies.split(', '));

 // Change '30 Days Of JavaScript' to '30 Days Of Node' using replace() method
 console.log(challenge.replace('JavaScript', 'Node'));

 // What is the character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
 console.log(challenge.charAt(15));

 // What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
 console.log(challenge.charCodeAt(challenge.indexOf('J')));

 //indexOf to determine the position of the first occurrence of 'a' in '30 Days Of JavaScript'
 console.log(challenge.indexOf('a'));

 //lastIndexOf to determine the position of the last occurrence of 'a' in '30 Days Of JavaScript'
 console.log(challenge.lastIndexOf('a'));

 //indexOf to find the position of the first occurrence of the word 'because' in a sentence
 let sentence = 'You cannot end a sentence with because because because is a conjunction';
 console.log(sentence.indexOf('because'));

 //lastIndexOf to find the position of the last occurrence of the word 'because' in a sentence
 console.log(sentence.lastIndexOf('because'));

 //search to find the position of the first occurrence of the word 'because' in a sentence
 console.log(sentence.search('because'));

 //trim() to remove any trailing whitespace at the beginning and the end of a string
 let stringWithWhitespace = ' 30 Days Of JavaScript ';
 console.log(stringWithWhitespace.trim());

 //startsWith() method with the string '30 Days Of JavaScript' and make the result true
 console.log(challenge.startsWith('30'));

 //endsWith() method with the string '30 Days Of JavaScript' and make the result true
 console.log(challenge.endsWith('JavaScript'));

 //match() method to find all the 'a’s in '30 Days Of JavaScript'
 console.log(challenge.match(/a/g));

 //concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
 let firstPart = '30 Days of';
 let secondPart = ' JavaScript';
 console.log(firstPart.concat(secondPart));

 // repeat() method to print '30 Days Of JavaScript' 2 times
 console.log(challenge.repeat(2)); 