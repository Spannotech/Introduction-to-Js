
const city = "Abuja";

//length property of string returns the number of characters in the string

// variableName.length

console.log(city.length)

const person = "Malvern";

console.log(person.length)

const firstSentence = "I am going for vacation";

console.log(firstSentence.length)

//charAt() string property that allows you to locate the character in a particular string
//indexing count starts from zero in javascript

console.log(firstSentence.charAt(11))
//variableName.charAt(index of the character)
//indexing count starts from zero in javascript

console.log(firstSentence[5])

//Index of
//checks if a character exist in a string and it returns the index of the character if it is there but returns -1 if 
//the character is not in the string 

const country = "portugal"
console.log(country.indexOf('y'))

//lastIndex of
//Just like index of, it checks if a character exist in a strong and returns the index of the character. However, in
//lastIndex of the counting starts in the reverse reverse direction

const action = "Sleeping"
console.log(action.lastIndexOf('e'))
console.log(action.indexOf('e'))

//Uppercase 
//this method is used for capitalizing strings

const firstName = "Tinubu"
console.log(firstName.toUpperCase())

//tolowerCase()
//this method is used for changing strings to small letter

const lastName = "Ahmed"
console.log(lastName.toLowerCase())

//concat()
//concartination method is used for joining stings together

const fullName = firstName.concat(lastName)
console.log(fullName)


//trim()
//This is used to remove unwanted spaces in our string
const spacyString = "    Hello My Name is   "

console.log(spacyString.length)

const noSpacy = spacyString.trim()
console.log(noSpacy.length)

//padStart
//padStart() function allows us to add characters to the start of existing string  
const root = "Alignment"
console.log(root.padStart(13,"Mal-"))

//padEnd()
//padEnd method allows to add characters to the end of existing strings
const base = "beautiful"
console.log(base.padEnd(11, 'ly'))

//repeat
//the repeat method allows us to repeat strings

const word = "follow"
console.log(word.repeat(5))

//replace
//replace method allows us to find and replace either a word, a phrase or a character

const thirdSentence = "I would be travelling to Abuja on Thursday";

console.log(thirdSentence.replace("Abuja", "Atlanta"))

//replaceAll
//replaceAll method allows us to find and replace all distinct words in a sentence

const fourthSentence = "I love going to Abuja. I was in Abuja two (2) weeks ago. There are lots of clubs in Abuja"
console.log(fourthSentence.replaceAll("Abuja", "Atlanta"))

//slice
//slice method allows us to take out a part of the whole string

console.log(thirdSentence.slice(23,31))

//substring

console.log(thirdSentence.substring(-8))

//split()
//split method allows us to split strings
console.log(fourthSentence.split('.'))

//join()
//join method allows us to join strings together

const a = [ 'a', 'b', 'u', 'J', 'a'];

console.log(a.join('**'))


