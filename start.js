var slideIndex = 0;
let aut = 0;
let rel = 0;
let com = 0;

var doubling = false;

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
        console.log(aut);
        plusSlides(1);
        window.scrollTo(0, 50);
    }

    var next = document.getElementById('next'); next.addEventListener('click', Next);
    var next_2 = document.getElementById('next_2'); next_2.addEventListener('click', Next);
    var next_3 = document.getElementById('next_3'); next_3.addEventListener('click', Next);
    var next_4 = document.getElementById('next_4'); next_4.addEventListener('click', Next);
    function Next() {
        if(doublecheck()) return;
        clickevent();
    }

    // Page 5 : rel1, m = 2.938, s = 0.666
    var rel1s1 = document.getElementById('rel1s1'); rel1s1.addEventListener('click', Rel1s1);
    var rel1s2 = document.getElementById('rel1s2'); rel1s2.addEventListener('click', Rel1s2);
    var rel1s3 = document.getElementById('rel1s3'); rel1s3.addEventListener('click', Rel1s3);
    var rel1s4 = document.getElementById('rel1s4'); rel1s4.addEventListener('click', Rel1s4);
    function Rel1s1() {if(doublecheck()) return; rel += normalize(1, 2.938, 0.666); clickevent();}
    function Rel1s2() {if(doublecheck()) return; rel += normalize(2, 2.938, 0.666); clickevent();}
    function Rel1s3() {if(doublecheck()) return; rel += normalize(3, 2.938, 0.666); clickevent();}
    function Rel1s4() {if(doublecheck()) return; rel += normalize(4, 2.938, 0.666); clickevent();}

    // Page 6 : com2, m = 3.04, s = 0.642
    var com2s1 = document.getElementById('com2s1'); com2s1.addEventListener('click', Com2s1);
    var com2s2 = document.getElementById('com2s2'); com2s2.addEventListener('click', Com2s2);
    var com2s3 = document.getElementById('com2s3'); com2s3.addEventListener('click', Com2s3);
    var com2s4 = document.getElementById('com2s4'); com2s4.addEventListener('click', Com2s4);
    function Com2s1() {if(doublecheck()) return; com += normalize(1, 3.04, 0.642); clickevent();}
    function Com2s2() {if(doublecheck()) return; com += normalize(2, 3.04, 0.642); clickevent();}
    function Com2s3() {if(doublecheck()) return; com += normalize(3, 3.04, 0.642); clickevent();}
    function Com2s4() {if(doublecheck()) return; com += normalize(4, 3.04, 0.642); clickevent();}

    // Page 7 : com1, m = 2.932, s = 0.696 inverse
    var com1s1 = document.getElementById('com1s1'); com1s1.addEventListener('click', Com1s1);
    var com1s2 = document.getElementById('com1s2'); com1s2.addEventListener('click', Com1s2);
    var com1s3 = document.getElementById('com1s3'); com1s3.addEventListener('click', Com1s3);
    var com1s4 = document.getElementById('com1s4'); com1s4.addEventListener('click', Com1s4);
    function Com1s1() {if(doublecheck()) return; com += normalize(4, 2.932, 0.696); clickevent();}
    function Com1s2() {if(doublecheck()) return; com += normalize(3, 2.932, 0.696); clickevent();}
    function Com1s3() {if(doublecheck()) return; com += normalize(2, 2.932, 0.696); clickevent();}
    function Com1s4() {if(doublecheck()) return; com += normalize(1, 2.932, 0.696); clickevent();}

    // Page 8 : com1, m = 3.118, s = 0.576
    var rel3s1 = document.getElementById('rel3s1'); rel3s1.addEventListener('click', Rel3s1);
    var rel3s2 = document.getElementById('rel3s2'); rel3s2.addEventListener('click', Rel3s2);
    var rel3s3 = document.getElementById('rel3s3'); rel3s3.addEventListener('click', Rel3s3);
    var rel3s4 = document.getElementById('rel3s4'); rel3s4.addEventListener('click', Rel3s4);
    function Rel3s1() {if(doublecheck()) return; rel += normalize(1, 3.118, 0.576); clickevent();}
    function Rel3s2() {if(doublecheck()) return; rel += normalize(2, 3.118, 0.576); clickevent();}
    function Rel3s3() {if(doublecheck()) return; rel += normalize(3, 3.118, 0.576); clickevent();}
    function Rel3s4() {if(doublecheck()) return; rel += normalize(4, 3.118, 0.576); clickevent();}

    // Page 9 : aut2, m = 2.86, s = 0.762
    var aut2s1 = document.getElementById('aut2s1'); aut2s1.addEventListener('click', Aut2s1);
    var aut2s2 = document.getElementById('aut2s2'); aut2s2.addEventListener('click', Aut2s2);
    var aut2s3 = document.getElementById('aut2s3'); aut2s3.addEventListener('click', Aut2s3);
    var aut2s4 = document.getElementById('aut2s4'); aut2s4.addEventListener('click', Aut2s4);
    function Aut2s1() {if(doublecheck()) return; aut += normalize(1, 2.86, 0.762); clickevent();}
    function Aut2s2() {if(doublecheck()) return; aut += normalize(2, 2.86, 0.762); clickevent();}
    function Aut2s3() {if(doublecheck()) return; aut += normalize(3, 2.86, 0.762); clickevent();}
    function Aut2s4() {if(doublecheck()) return; aut += normalize(4, 2.86, 0.762); clickevent();}

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

function clickevent() {
    plusSlides(1); console.log("aut : " + aut + ", com : " + com + ", rel : " + rel);
    doubling = false;
    window.scrollTo(0, 50);
}

function doublecheck() { // 중복 제출 방지 함수
	if(doubling){
		return doubling;
	} else {
		doubling = true;
		return false;
	}
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