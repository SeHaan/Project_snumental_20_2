var slideIndex = 1;
let aut = 0;

window.onload = function() {

    slideIndex = 1;
    showSlides(slideIndex);

    var audio = new Audio('Shining Dream.mp3')
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    var start = document.getElementById('start');
    start.addEventListener('click', startTest);
    function startTest() {
        audio.play();
        aut += 1;
        console.log(aut);
        plusSlides(1);
    }

    var next = document.getElementById('next'); next.addEventListener('click', Next);
    var next_2 = document.getElementById('next_2'); next_2.addEventListener('click', Next);
    var next_3 = document.getElementById('next_3'); next_3.addEventListener('click', Next);
    var next_4 = document.getElementById('next_4'); next_4.addEventListener('click', Next);
    function Next() {
        aut += 1; console.log(aut); plusSlides(1);
    }

};


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

function calculate(arr) { // 1차 테스트 결과값 계산 함수
	let point = 0;
	if(arr[0] < arr[1]) {
	    if(arr[0] < arr[2]) {
	        point = 1;
	    } else {
	        point = 3;
	    }
    } else {
        if(arr[1] < arr[2]) {
            point = 2;
        } else {
            point = 3;
        }
	}
	return point;
}

function normalize(x, m, s) { // 정규분포를 통해 누적분포 백분위를 구하는 함수
	let p = (x - m)/(s*Math.sqrt(2));
    let erf =  p;
    for(let i = 1; i < 12; i++ ){
        let cal = Math.pow(-1, i)*Math.pow(p, 2*i + 1)/((2*i + 1)*fac(i));
        erf = erf + cal;
    }

    erf = (2/Math.sqrt(Math.PI))*erf;
	return 0.5*(1 + erf);
}

function fac(n) { // 팩토리얼 값을 구하는 재귀함수
    // normalize 안에 들어가 있습니다. 이런것도 기본 함수로 지원하지 않다니 자바스크립트...
    if (n === 1) {
        return 1;
    } else {
        return n * fac(n - 1);
    }
}
