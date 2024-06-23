const fs = require('fs');
const path = require('path');
const uglifyJS = require("uglify-js");

function *loadPartOfFile(startToken, endToken, fileName) {
    const lines = fs.readFileSync(fileName, 'utf8').split('\n');

    let isBlock = !startToken;

    for (const line of lines) {
        if (!isBlock && line === startToken) {
            isBlock = true;
            continue;
        }

        if (isBlock && line === endToken) {
            isBlock = false;
            return;
        }

        if (isBlock) {
            yield line;
        }
    }
}

const README_START_MARKER = '## Bookmarklets';
const bookmarkletsDirectory = '../bookmarklets';

let result = [...loadPartOfFile(null, README_START_MARKER, '../README.md'), README_START_MARKER, '']

for (const fileName of fs.readdirSync(bookmarkletsDirectory)) {
    const bookmarkletFile = path.join(bookmarkletsDirectory, fileName)

    result = result.concat([
        ...loadPartOfFile('/*', '*/', bookmarkletFile),
        '',
        '```js',
        uglifyJS.minify(fs.readFileSync(bookmarkletFile, "utf8")).code,
        '```',
        ''
    ])
}

for (const line of result) {
    console.log(line);
}
