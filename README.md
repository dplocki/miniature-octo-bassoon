# 📚🐙 Bookmarklets library

The repository for keeping bookmarklets.

Unfortunetly on Github's markdown you cannot simply add comfortable links, so you have to drag and drop (on the bookmarks' bar) the code by yourself.

## Bookmarklets

### Create tag for CodeCrafters stage

If you are on the [CodeCrafters](https://app.codecrafters.io/courses/) stage page, the bookmarklet allows to read the stage's data and suggests the git tag create command for them.

```bookmarklet
javascript:(function()%7Bvar%20e%2Ct%2Ca%0Awindow.location.href.match(%2Fhttps%3A%5C%2F%5C%2Fapp.codecrafters%5C.io%5C%2Fcourses%5C%2F.*%5C%2Fstages%5C%2F.*%2F)%3F(e%3D(t%3Ddocument.getElementById(%22course-page-scrollable-area%22).querySelectorAll(%22div%20%3E%20div%20%3E%20div%20%3E%20span%22))%5B0%5D.textContent%2Ct%3Dt%5B1%5D.querySelectorAll(%22span%22)%5B1%5D.textContent%2Cnull!%3D(a%3Dprompt(%22Please%20give%20the%20commit%22))%26%26alert(%60git%20tag%20-sa%20%22stage-%24%7Bt%7D%22%20-m%20%22%24%7Be%7D%22%20%60%2Ba))%3Aalert(%22That%20works%20only%20on%20the%20CodeCrafters%20page%22)%7D)()
```

### Explain XKCD

If you are on [xkcd](https://xkcd.com), it will redirect you on the proper sub-page on the [explain xkcd wiki](https://www.explainxkcd.com/). Otherwise display the alert informing about the mistake.

```bookmarklet
javascript:(function()%7Bvar%20t%3Dwindow.location.href.match(%2Fhttps%3A%5C%2F%5C%2Fxkcd%5C.com%5C%2F(%5Cd%2B)%5C%2F%2F)%0At%3Fwindow.location.href%3D%22https%3A%2F%2Fwww.explainxkcd.com%2Fwiki%2Findex.php%2F%22%2Bt%5B1%5D%3Aalert(%22That%20is%20not%20the%20XKCD%20page%22)%7D)()
```

