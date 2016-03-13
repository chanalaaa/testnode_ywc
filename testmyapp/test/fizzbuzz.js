/*
fizzbuzz(3) 'fizz'
fizzbuzz(5) 'buzz'
fizzbuzz(3 && 5) 'fizzbuzz'
fizzbuzz(7) //7
*/
var expect = require('chai').expect
var fizzbuzz = require('../fizzbuzz')

describe('fizzbuzz',() =>{
	it('Should return `fizz` when divisible by 3',() =>{
		expect(fizzbuzz(3)).eql('fizz')
	})

	it('Should return `buzz` when divisible by 5',() =>{
		expect(fizzbuzz(5)).eql('buzz')
	})
}) 