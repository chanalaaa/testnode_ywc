
function add(a,b){
	return a+b;
}

function sub(a,b){
	return a-b;
}
function mul(a,b){
	return a*b;
}
function div(a,b){
	return a/b;
}

// choose one type of code style
// module.exports.add = add;

module.exports ={
	add: add,
	mul: mul,
	minus: sub,
	div: div
}
// exports.div = div;