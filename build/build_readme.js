import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { minify } from "uglify-js";

function* loadPartOfFile(startToken, endToken, fileName) {
    const lines = readFileSync(fileName, 'utf8').split('\n');

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

function bookmarklet(bookmarkletFilePath) {
    const minifyResult = minify(readFileSync(bookmarkletFilePath, "utf8"));

    if (minifyResult.error) {
        throw new Error(`Minification error: ${minifyResult.error}`);
    }

    return 'javascript:' + encodeURIComponent(minifyResult.code.trim());
}

const README_START_MARKER = '## Bookmarklets';
const bookmarkletsDirectory = '../bookmarklets';

let result = [...loadPartOfFile(null, README_START_MARKER, '../README.md'), README_START_MARKER, ''];

for (const fileName of readdirSync(bookmarkletsDirectory)) {
    const bookmarkletFilePath = join(bookmarkletsDirectory, fileName);

    result = result.concat([
        ...loadPartOfFile('/*', '*/', bookmarkletFilePath),
        '',
        '```bookmarklet',
        bookmarklet(bookmarkletFilePath),
        '```',
        ''
    ]);
}

for (const line of result) {
    console.log(line);
}
