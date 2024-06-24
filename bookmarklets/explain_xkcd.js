/*
### Explain XKCD

If you are on [xkcd](https://xkcd.com), it will redirect you on the proper subpage on the [explain xkcd wiki](https://www.explainxkcd.com/). Otherwise display the alert informing about the mistake.
*/
const match = window.location.href.match(/https:\/\/xkcd\.com\/(\d+)\//);

if (match) {
    window.location.href = `https://www.explainxkcd.com/wiki/index.php/${match[1]}`;
} else {
    alert('That is not a XKCD page');
}
