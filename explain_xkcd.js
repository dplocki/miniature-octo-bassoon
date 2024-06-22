const url = window.location.href;
const regex = /https:\/\/xkcd\.com\/(\d+)\//;
const match = url.match(regex);

if (match) {
    window.location.href = `https://www.explainxkcd.com/wiki/index.php/${match[1]}`;
} else {
    alert('That is not a XKCD page');
}
