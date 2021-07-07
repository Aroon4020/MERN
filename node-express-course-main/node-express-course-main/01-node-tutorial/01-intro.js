const amount = 9

if (amount < 10) {
  console.log('small number')
} else {
  console.log('large number')
}

console.log(`hey it's my first node app!!!`)

//Node is asynchro(Non Blocking) single threaded, 
//how node work=> NodeJS event loop is single threaded. ... NodeJS receives these requests and places them into the EventQueue . 
//NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them.


//callback function: (passed as an argument to other code) 
//Where callbacks really shine are in asynchronous functions, 
//where one function has to wait for another function (like waiting for a file to load).

//"I will call back later!"

//A callback is a function passed as an argument to another function

//This technique allows a function to call another function

//A callback function can run after another function has finished


// JavaScript Promise Object
//"I Promise a Result!"

//"Producing code" is code that can take some time

//"Consuming code" is code that must wait for the result

//A Promise is a JavaScript object that links producing code and consuming code

//Functions running in parallel with other functions are called asynchronous

//"async and await make promises easier to write"

//async makes a function return a Promise

//await makes a function wait for a Promise
