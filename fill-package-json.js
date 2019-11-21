const fs = require('fs');
const path = require('path');

const src = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')));
const dest = JSON.parse(fs.readFileSync(path.join(__dirname, 'dist', 'ng2-pack', 'package.json')));

dest.repository = src.repository;
dest.version = src.version;
dest.author = src.author;
dest.license = src.license;
dest.bugs = src.bugs;
dest.homepage = src.homepage;

fs.writeFileSync(path.join(__dirname, 'dist', 'ng2-pack', 'package.json'), JSON.stringify(dest, null, 2));
console.log('package.json modified');
console.log('You can now publish:');
console.log('cd dist/ng2-pack && npm publish --access public');
