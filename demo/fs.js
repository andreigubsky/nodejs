const fs = require('fs');
const path = require('path');

fs.rmdir(path.resolve(__dirname, 'test'), (err) => {
	//if (err) {
		//throw err;
	//}
	console.log('папка удалена');
});


fs.mkdir(path.join(__dirname, 'test'), (err) => {
	//if (err) {
		//throw err;
	//}
	console.log('папка создана');
});

const filePath = path.join(__dirname,'test','test.js')

let content = 'const file = require(&quot;fs&quot;);'

fs.writeFile(filePath, content, (err) =>{
	//if (err){
	//	throw err
	//}

	console.log('файл создан')
})

fs.appendFile(filePath, content, (err) =>{
	//if (err){
	//	throw err
	//}

	console.log('файл дописан')
})

fs.readFile(filePath, 'utf-8', (err,  cont) =>{
	//if (err){
	//	throw err
	//}

	console.log('Cont:', cont)
})