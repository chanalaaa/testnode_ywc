'use strict'
var util = require('util')
var EventEmitter = require('events').EventEmitter
    /*
    ee.once('hello',() => { //function in es6
    	console.log('event has occured')
    })

    ee.on('new-user',(user) => {
    	console.log(`Found new user: ${user.username} email: ${user.email}`)
    })

    ee.on('new-user',{username:'chanala',email:'email.mail.com'})
    ee.emit('hello')
    */

var id = 1
var database = {
    users: [
        { id: id++, name: 'John Doe', job: 'Design' },
        { id: id++, name: 'Mary Doe', job: 'coding' },
    ]
}
console.log(database)

class UserList extends EventEmitter{
	constructor(){
		super() //use extend must call super
	}
	save(obj){
		obj.id = id++
        database.users.push(obj)
    	this.emit('saved-user', obj)
	}
	all(){
		return database.users
	}

}


//util.inherits(UserList, EventEmitter)
var users = new UserList()
users.on('saved-user', (user) => {
    console.log(user)
})

users.save({ name: 'bbbb', job: 'aaa' })
/*
UserList.prototype.save = function(obj) { //class in javascript
    obj.id = id++
        database.users.push(obj)
    this.emit('saved-user', obj)
}

UserList.prototype.all = function() {
    return database.users
}
//UserList.prototype.__proto__=EventEmitter.prototype




*/