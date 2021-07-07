//Npm module
/*const color = require('cli-color');
const register = require('./auth');
console.log(color.green('Hello Node js'));

//Local Module
const auth=require('./auth')
auth.register("Aroon")
auth.register1("Kumar")

//Core Module: in build in node js

path module => used to get file path, extension name
const path = require('path')

File SYStem Module: for creating file/folder, data read & write

OS Module:

Events Module: used for performing event like after registration we have email (event) add database(event)

*/

const Emitter= require('events')
const myEmitter = new Emitter()
//myEmitter.on('eventname', (data)=>{
//    console.log(data);
//})

//myEmitter.emit('eventname', {
//    name: 'Aroon'
//})

class Auth extends Emitter {
    register(username){
        console.log('Registered Successfully...');
        this.emit('registered', username)
    }

}

const auth = new Auth()

//Listen
//registration
auth.on('registered', (data) =>{
    console.log(`USer ${data} registered successfully`);
})
//Sending email
auth.on('registered', (data) =>{
    console.log(`USer ${data} email added successfully`);
})
auth.register("AKK")