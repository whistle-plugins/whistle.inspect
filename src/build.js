const fs = require('fs');
const path = require('path');

const values = {};
const SCRIPTS_DIR = path.join(__dirname, 'scripts');

['v.js', 'ev.js', 'mv.js'].forEach((filename) => {
  const text = fs.readFileSync(path.join(SCRIPTS_DIR, filename), { encoding: 'utf8' });
  values[`whistle.inspect/${filename}`] = text;
});

fs.writeFileSync(path.join(__dirname, '../_values.txt'), JSON.stringify(values, null, '    '));
