var fs = require('fs')
var option = {
	encoding: 'utf8',
	highWaterMark: 1
}
var readStream = fs.createReadStream('lowercase.txt',option)
var writeStream = fs.createWriteStream('uppercase.txt')
fs.writeFile('uppercase.txt',"") //del old data
readStream.on('data',(chunk) => {
	//console.log(chunk.toString())
	var upper = chunk.toUpperCase()
	console.log(upper)
	//fs.writeFile('uppercase.txt',upper,{flag:'a'}) //flag is += not del before data
	writeStream.write(upper) //stream method
}) 