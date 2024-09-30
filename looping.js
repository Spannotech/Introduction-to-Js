//looping functions in javascript allows us to direct certain computer instruction to run continuosly for a specific time.


console.log("Fridaus")
console.log("Fridaus")
console.log("Fridaus")
console.log("Fridaus")

//for loop statement.
//In this case we runa looping fuction using the "for" keyword.

for(let counter=0; counter <4; counter =  counter +1){
        console.log(`I have ${counter} number of balls`)
}
const fruits = ['mango', 'oranges', 'Apples', "Bananas"]

console.log(fruits.length)

for(let i = 0; i<4; i = i +1){
    console.log(fruits[i])
}

for(let counter = 1; counter<13 ;counter = counter + 1){
    console.log(` 2 x ${counter} = ${(2*counter)}`)
}

for(let counter = 1; counter<14 ;counter = counter + 1){
    console.log(` 13 x ${counter} = ${(13*counter)}`)
}

for(let j = 1; j < 10; j = j + 1){
    let star = '*'
    console.log(star.repeat(j))
} 
for(let j =100; j>=50; j = j -10){
    console.log(j)
}

for( let k = 1; J< 10; j = j + 1){
    let m = (10-j)/2
    let star = '*'
    console.log(`${' '.repeat}`)
}