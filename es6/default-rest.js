function f(x,y=12){

	return x+y
}
f(5) //17

function f(x,...y){
	//y is an array
	x=10
	y=[1,2,3,4]
	return x*y.length
}
f(10,1,2,3,4)

function f(x,y,z){
	return x+y+z
}

f(...[1,2,3]) == 6