var fs = require('fs');

let ch1info = fs.readFileSync('./challenge1/info.txt', 'utf8');
console.log(ch1info);

fs.appendFileSync('./challenge2/info.txt', 'chris, chelsea, tom');

// fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt');

// fs.mkdirSync('./challenge4/copyfolder');
// fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');

let ch5info = fs.readFileSync('./challenge5/info.txt', 'utf8');
console.log(ch5info);
let newCh5info = ch5info.replace(/-/g, ' ');
console.log(newCh5info);
fs.writeFileSync('./challenge5/info.txt', newCh5info);

let files = fs.readdirSync('./challenge6');
for (let i = 0; i < files.length; i++) {
  if(files[i].endsWith('.txt')) {
    console.log(files[i]);
  }
}
