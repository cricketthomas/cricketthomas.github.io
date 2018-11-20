function main() {

    $(function () {
        $("#rmd").load("finalproject.html");
    });

    $(function () {
        $("#graph").load("LeafLetMaps.html");
    });
    let date = new Date(document.lastModified);
    document.getElementById("modDate").innerHTML = date;

} //onload


function resumeFooter() {
    foot.style.paddingTop = "65vh";
    foot.backgroundColor = "#337ab7";
}


let date = new Date(document.lastModified);
document.getElementById("modDate").innerHTML = date;

function buttonRead(url) {

    //readMe = document.getElementById('readme');
    //readMe.classList.add('scaled')
    //insertDiv = document.getElementById("insertDiv");
    //insertDiv.classList.add("scaled");
    $.get(url, function (data) {
        var rawtext = data;
        console.log(rawtext);
        var converter = new showdown.Converter(),
            //text = '# hello, markdown!',
            html = converter.makeHtml(rawtext);
        insertDiv.innerHTML = '<h1 class="top">Project Description</h1> <br/>' + html;
        //readMe.addCl + "scaled"
    });
}
/*
var GitHub = require('github-api');

// by default all requests are unauthenticated
// unauthenticated clients are limited to 60 request per hour
var noAuth = new GitHub();

// you can authenticate with username and password
var passwordAuth = new GitHub({
  username: 'MY_USERNAME',
  password: 'MY_PASSWORD'
});


var converter = new showdown.Converter();
    var md = '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
        'because:\n\n' +
        ' - it\'s easy to use\n' +
        ' - it\'s extensible\n' +
        ' - works in the server and in the browser';
    var html = converter.makeHtml(md);


// you can also provide an OAuth token to authenticate the requests
var oauthAuth = new GitHub({
  token: 'MY_OAUTH_TOKEN'
});
*/

//https://raw.githubusercontent.com/cricketthomas/vuefinder/master/README.md