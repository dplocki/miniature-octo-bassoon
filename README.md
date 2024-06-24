# 📚🐙 Bookmarklets library

The repository for keeping bookmarklets.

Unfortunetly on Github's markdown you cannot simply add comfortable links, so you have to drag and drop (on the bookmarks' bar) the code by yourself.

## Bookmarklets

### Explain XKCD

If you are on [xkcd](https://xkcd.com), it will redirect you on the proper sub-page on the [explain xkcd wiki](https://www.explainxkcd.com/). Otherwise display the alert informing about the mistake.

```bookmarklet
javascript:(function()%7Blet%20match%3Dwindow.location.href.match(%2Fhttps%3A%5C%2F%5C%2Fxkcd%5C.com%5C%2F(%5Cd%2B)%5C%2F%2F)%3Bmatch%3Fwindow.location.href%3D%22https%3A%2F%2Fwww.explainxkcd.com%2Fwiki%2Findex.php%2F%22%2Bmatch%5B1%5D%3Aalert(%22That%20is%20not%20the%20XKCD%20page%22)%3B%7D)()
```

