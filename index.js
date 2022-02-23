const fs = require('fs');


const dirName = 'D:\\NodeJs\\node-ta5areef';

fs.readdir(dirName, (req, res) => {
  res.map((s) => {
    if (s === '.git') {
      return 'This is clear'
    } else {
      fs.readFile(`${dirName}\\${s}`, 'utf-8', (req, res) => {
        console.log(res)
      })
    }
  })
})
fs.mkdir(`${dirName}\\done`, { recursive: true }, (err) => {
  fs.writeFile(`${dirName}\\done\\mynewfile3.txt`, 'Hello content2!', function (err) {
    if (err) throw err;
    console.log('Saved!2');
  });
});