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

$('#res').collapse("toggle");

let date = new Date(document.lastModified);
document.getElementById("modDate").innerHTML = date;

function buttonRead() {
    $.get("https://raw.githubusercontent.com/cricketthomas/vuefinder/master/README.md", function (data) {
        var rawtext = data;
        console.log(rawtext);
        var converter = new showdown.Converter(),
            //text = '# hello, markdown!',
            html = converter.makeHtml(rawtext);

        var vuefinder = document.getElementById('vuefinder').innerHTML = html;

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

// you can also provide an OAuth token to authenticate the requests
var oauthAuth = new GitHub({
  token: 'MY_OAUTH_TOKEN'
});
*/

//https://raw.githubusercontent.com/cricketthomas/vuefinder/master/README.md