function main() {

    $(function () {
        $("#rmd").load("finalproject.html");
    });

    $(function () {
        $("#graph").load("LeafLetMaps.html");
    });


    resumecollapse.onclick = resumeFooter;


} //onload


function resumeFooter() {
    foot.style.paddingTop = "50vh";
    foot.backgroundColor = "#337ab7";
}

$('#res').collapse("toggle");
