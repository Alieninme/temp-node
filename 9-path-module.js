const path = require('path')

console.log(path.sep);

const filePath = path.join('/contents', 'subfolder', 'text.txt')

console.log(filePath);

const absolute = path.resolve(__dirname, 'contents', 'subfolder', 'text.txt');
console.log(absolute);