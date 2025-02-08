const fs = require('fs');
const path = require('path');
const terser = require('terser');

function* loadPartOfFile(startToken, endToken, fileName) {
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

async function bookmarklet(bookmarkletFilePath) {
    const minifyResult = await terser.minify(
        fs.readFileSync(bookmarkletFilePath, "utf8"), {
        compress: {
            negate_iife: false,
        },
        output: {
            semicolons: false,
        },
    });

    if (minifyResult.error) {
        throw new Error(`Minification error: ${minifyResult.error}`);
    }

    return 'javascript:' + encodeURIComponent(minifyResult.code.trim());
}

async function buildReadme() {
    const README_START_MARKER = '## Bookmarklets';
    const bookmarkletsDirectory = '../bookmarklets';

    let result = [...loadPartOfFile(null, README_START_MARKER, '../README.md'), README_START_MARKER, ''];

    for (const fileName of fs.readdirSync(bookmarkletsDirectory)) {
        const bookmarkletFilePath = path.join(bookmarkletsDirectory, fileName);

        result = result.concat([
            ...loadPartOfFile('/*', '*/', bookmarkletFilePath),
            '',
            '```bookmarklet',
            await bookmarklet(bookmarkletFilePath),
            '```',
            ''
        ]);
    }

    for (const line of result) {
        console.log(line);
    }
}

buildReadme()
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
