const path = require('path')

console.log('Name file:', path.basename(__filename));
console.log('Name file:', path.extname(__filename));
console.log('Name file:', path.parse(__filename));

console.log(path.join());

