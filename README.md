# 📚🐙 Bookmarklets library

The repository for keeping bookmarklets.

Unfortunetly on Github's markdown you cannot simply add comfortable links, so you have to drag and drop (on the bookmarks' bar) the code by yourself.

## Explain XKCD

```
javascript:(function()%7Bconst%20url%20%3D%20window.location.href%3B%0A%20%20%20%20const%20regex%20%3D%20%2Fhttps%3A%5C%2F%5C%2Fxkcd%5C.com%5C%2F(%5Cd%2B)%5C%2F%2F%3B%0A%20%20%20%20const%20match%20%3D%20url.match(regex)%3B%0A%0A%20%20%20%20if%20(match)%20%7B%0A%20%20%20%20%20%20%20%20window.location.href%20%3D%20%60https%3A%2F%2Fwww.explainxkcd.com%2Fwiki%2Findex.php%2F%24%7Bmatch%5B1%5D%7D%60%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20alert('That%20is%20not%20a%20XKCD%20page')%3B%0A%20%20%20%20%7D%7D)()%3B
```
