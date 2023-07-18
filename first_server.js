const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) =>{
	
	

	if(req.url==='/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
			if(err){
				throw err
			}
		
		res.end(data)
		})
	} else if(req.url==='/contact') {
		fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
			if(err){
				throw err
			}
		
		res.end(data)
		})
	}

let filePath = path.join(__dirname, 'public', req.url ==='/'?'index.html' :req.url)
const ext = path.extname(filePath)
if(!ext){
	filePath +='.html'
}


console.log(filePath)
fs.readFile(filePath, (err, data) => {
	if (err){
		fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
			if(err){
				throw err
			}
		
		res.end(data)
		})
	}
})
	res.end(data)
})

server.listen(port=1000, 'localhost', ()=>{
	console.log('Server has been startes...')
})