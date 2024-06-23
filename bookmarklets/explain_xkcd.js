/*
### Explain XKCD

If you are on [xkcd](https://xkcd.com), it will redirect you on the proper subpage on the [explain xkcd wiki](https://www.explainxkcd.com/). Otherwise display the alert.
*/
const url = window.location.href;
const regex = /https:\/\/xkcd\.com\/(\d+)\//;
const match = url.match(regex);

if (match) {
    window.location.href = `https://www.explainxkcd.com/wiki/index.php/${match[1]}`;
} else {
    alert('That is not a XKCD page');
}
