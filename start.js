var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";
}

window.onload = function() {

    slideIndex = 1;
    showSlides(slideIndex);
    var start = document.getElementById('start');

    start.addEventListener('click', startTest);

    var audio = new Audio('Shining Dream.mp3')
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    function startTest() {
        audio.play();

    }
};
