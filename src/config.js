const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

let doc;

try {
    doc = yaml.safeLoad(fs.readFileSync(path.resolve('config.yml'), 'utf8'));
    console.log(doc);
} catch (e) {
    console.log(e);
}

module.exports.config = doc;