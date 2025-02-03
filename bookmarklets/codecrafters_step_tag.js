/*
### Create tag for CodeCrafters stage

If you are on the [CodeCrafters](https://app.codecrafters.io/courses/) stage page, the bookmarklet allows to read the stage's data and suggests the git tag create command for them.
*/
(function () {
    const match = window.location.href.match(/https:\/\/app.codecrafters\.io\/courses\/.*\/stages\/.*/);
    if (!match) {
        alert('That works only on the CodeCrafters page');
        return;
    }

    const mainArea = document.getElementById('course-page-scrollable-area');
    const stageNameLine = mainArea.querySelectorAll('div > div > div > span');
    const stageName = stageNameLine[0].textContent;
    const stageId = stageNameLine[1].querySelectorAll('span')[1].textContent;
    const commit = prompt("Please give the commit");
    if (commit != null) {
        alert(`git tag -sa "stage-${stageId}" -m "${stageName}" ${commit}`);
    }
})();
