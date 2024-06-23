const fs = require('fs');

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
