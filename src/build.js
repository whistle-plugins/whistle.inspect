const fs = require('fs');
const path = require('path');

const values = {};
const SCRIPTS_DIR = path.join(__dirname, 'scripts');

fs.readdirSync(SCRIPTS_DIR).forEach((filename) => {
  const text = fs.readFileSync(path.join(SCRIPTS_DIR, filename), { encoding: 'utf8' });
  values[`whistle.inspect/${filename}`] = text;
});

fs.writeFileSync(path.join(__dirname, '../_values.txt'), JSON.stringify(values, null, '    '));
