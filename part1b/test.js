/*
const x = 1
let y = 5

console.log(x, y)
y += 10
console.log(x, y)
y = 'sometext'
console.log(x, y)
*/
/*
const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {
    console.log(value) 
})
*/
//in react it is reccomended that you use concat to preserve both arrays
/*
const t = [1, -1, 3]
const t2 = t.concat(5)

console.log(t)
console.log(t2)
*/
/*
const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1) 
*/
/*
const t = [1, 2, 3]

const m2 = t.map(value => '<li' + value + '</li>')
console.log(m2) 
*/
/*
const t = [1, 2, 3, 4, 5,]
const [first, second, ...rest] = t
console.log(first, second)
console.log(rest) 
*/
/*
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

  console.log(object1.name)         // Arto Hellas is printed
  const fieldName = 'age' 
  console.log(object1[fieldName])   // 35 is printed

//added properties to an object 
object1.address = 'Helsinki'
object1['secret number'] = 12341

console.log(object1.address)
console.log(object1['secret number'])

console.log(object1)
*/

//arrow functions 
/*
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2 
}

const result = sum(1, 5) 
console.log(result) 
*/
/*
const square = p => p * p

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
const tSquared2 = t.map(square)

console.log(tSquared)
console.log(tSquared2)
*/
/*
function product(a, b){
    return a * b 
}

const result = product(a, b)
console.log(result)
*/
/*
const average = function(a, b) {
    return (a + b) / 2
}

const result = average(2, 5)
console.log(result) 
*/

//OBJECT METHODS AND "THIS"
/*
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed
*/
/*
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.growOlder = function() {
  this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed
*/
/*
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
  doAddition: function(a, b) {
    console.log(a + b)
  },
}

arto.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed

arto.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
*/

/*
const arto = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

setTimeout(arto.greet, 1000)
setTimeout(arto.greet.bind(arto), 1000)
*/

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()

