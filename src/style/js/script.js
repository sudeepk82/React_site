window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if(document.body.scrollTop > 20||document.documentElement.scrollTop > 20) {
        document.getElementById("main-header").style.display = "inline-flex";
    }
    else {
        document.getElementById("main-header").style.display = "none";
    }
}