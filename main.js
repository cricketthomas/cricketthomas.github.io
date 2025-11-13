function readMe(url) {
    $.get(url, function (data) {
        var rawtext = data;
        console.log(rawtext);
        var converter = new showdown.Converter(),
        html = converter.makeHtml(rawtext);
        insertDiv.innerHTML = '<h1 class="top">Project Description</h1> <br/>' + html;
    });
}