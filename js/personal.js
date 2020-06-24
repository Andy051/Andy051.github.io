// Change displayed contents
var contentSection = document.querySelectorAll(".contentSection");


var navSection = $(".nav-item");

navSection.on("click", function() {
    index = $(this).index();

    for (var i = 0; i < contentSection.length; i++) {

        if (i === index) {
            contentSection[i].style.display = "block";
            contentSection[i].style.opacity = 1;
            if (i === 2 || i == 1) {
                $(".jumbotron").css("margin-top", "10%");
            } else {
                $(".jumbotron").css("margin-top", "15%");
            }
        } else {
            contentSection[i].style.opacity = 0;
            contentSection[i].style.display = "none";
        }
    }

})