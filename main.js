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
