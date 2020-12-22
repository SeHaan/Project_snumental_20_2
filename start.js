var slideIndex = 0;
let aut = 0;
let rel = 0;
let com = 0;

let des = 0;

// 중복 제출 방지 플래그
var doubling = false;

// 실행부
window.onload = function() {

    slideIndex = 1;
    showSlides(slideIndex);

    var audio = new Audio('Shining Dream.mp3')
    //audio.addEventListener('ended', function() {
    //    this.currentTime = 0;
    //    this.play();
    //}, false);

    var start = document.getElementById('start');
    start.addEventListener('click', startTest);
    function startTest() {
        audio.play();
        console.log('start!');
        plusSlides(1);
        window.scrollTo(0, 50);
    }

    var next = document.getElementById('next'); next.addEventListener('click', Next);
    var next_2 = document.getElementById('next_2'); next_2.addEventListener('click', Next);
    var next_3 = document.getElementById('next_3'); next_3.addEventListener('click', Next);
    var next_4 = document.getElementById('next_4'); next_4.addEventListener('click', Next);
    var next_5 = document.getElementById('next_5'); next_5.addEventListener('click', Next);
    var next_6 = document.getElementById('next_6'); next_6.addEventListener('click', Next);
    var next_7 = document.getElementById('next_7'); next_7.addEventListener('click', Next);
    var next_8 = document.getElementById('next_8'); next_8.addEventListener('click', Next);
    var next_9 = document.getElementById('next_9'); next_9.addEventListener('click', Next);
    function Next() {if(doublecheck()) return; clickevent();}

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

    // Page 10 : com3, m = 2.554, s = 0.726
    var com3s1 = document.getElementById('com3s1'); com3s1.addEventListener('click', Com3s1);
    var com3s2 = document.getElementById('com3s2'); com3s2.addEventListener('click', Com3s2);
    var com3s3 = document.getElementById('com3s3'); com3s3.addEventListener('click', Com3s3);
    var com3s4 = document.getElementById('com3s4'); com3s4.addEventListener('click', Com3s4);
    function Com3s1() {if(doublecheck()) return; com += normalize(1, 2.86, 0.762); clickevent();}
    function Com3s2() {if(doublecheck()) return; com += normalize(2, 2.86, 0.762); clickevent();}
    function Com3s3() {if(doublecheck()) return; com += normalize(3, 2.86, 0.762); clickevent();}
    function Com3s4() {if(doublecheck()) return; com += normalize(4, 2.86, 0.762); clickevent();}

    // Page 11 : rel2, m = 3.208, s = 0.684
    var rel2s1 = document.getElementById('rel2s1'); rel2s1.addEventListener('click', Rel2s1);
    var rel2s2 = document.getElementById('rel2s2'); rel2s2.addEventListener('click', Rel2s2);
    var rel2s3 = document.getElementById('rel2s3'); rel2s3.addEventListener('click', Rel2s3);
    var rel2s4 = document.getElementById('rel2s4'); rel2s4.addEventListener('click', Rel2s4);
    function Rel2s1() {if(doublecheck()) return; rel += normalize(1, 3.208, 0.684); clickevent();}
    function Rel2s2() {if(doublecheck()) return; rel += normalize(2, 3.208, 0.684); clickevent();}
    function Rel2s3() {if(doublecheck()) return; rel += normalize(3, 3.208, 0.684); clickevent();}
    function Rel2s4() {if(doublecheck()) return; rel += normalize(4, 3.208, 0.684); clickevent();}

    // Page 12 : aut1, m = 2.884, s = 0.786 inverse
    var aut1s1 = document.getElementById('aut1s1'); aut1s1.addEventListener('click', Aut1s1);
    var aut1s2 = document.getElementById('aut1s2'); aut1s2.addEventListener('click', Aut1s2);
    var aut1s3 = document.getElementById('aut1s3'); aut1s3.addEventListener('click', Aut1s3);
    var aut1s4 = document.getElementById('aut1s4'); aut1s4.addEventListener('click', Aut1s4);
    function Aut1s1() {if(doublecheck()) return; aut += normalize(4, 2.884, 0.786); clickevent();}
    function Aut1s2() {if(doublecheck()) return; aut += normalize(3, 2.884, 0.786); clickevent();}
    function Aut1s3() {if(doublecheck()) return; aut += normalize(2, 2.884, 0.786); clickevent();}
    function Aut1s4() {if(doublecheck()) return; aut += normalize(1, 2.884, 0.786); clickevent();}

    // Page 13 : aut3, m = 2.788, s = 0.78 inverse
    var aut3s1 = document.getElementById('aut3s1'); aut3s1.addEventListener('click', Aut3s1);
    var aut3s2 = document.getElementById('aut3s2'); aut3s2.addEventListener('click', Aut3s2);
    var aut3s3 = document.getElementById('aut3s3'); aut3s3.addEventListener('click', Aut3s3);
    var aut3s4 = document.getElementById('aut3s4'); aut3s4.addEventListener('click', Aut3s4);
    function Aut3s1() {if(doublecheck()) return; aut += normalize(4, 2.788, 0.78); clickevent();}
    function Aut3s2() {if(doublecheck()) return; aut += normalize(3, 2.788, 0.78); clickevent();}
    function Aut3s3() {if(doublecheck()) return; aut += normalize(2, 2.788, 0.78); clickevent();}
    function Aut3s4() {if(doublecheck()) return; aut += normalize(1, 2.788, 0.78); clickevent();}

    // First Result : aut. com. rel.
    var giftresult = document.getElementById('giftresult'); giftresult.addEventListener('click', FirstResult);
    function FirstResult() {
        if(doublecheck()) return;
        var score = [aut, com, rel];
        var page = calculate(score);
        plusSlides(page);
        semiclickevent(page);
    }

    // Gift
    var resaut1 = document.getElementById('resaut1'); resaut1.addEventListener('click', Resaut1);
    var resaut2 = document.getElementById('resaut2'); resaut2.addEventListener('click', Resaut2);
    var resaut3 = document.getElementById('resaut3'); resaut3.addEventListener('click', Resaut3);
    var resaut4 = document.getElementById('resaut4'); resaut4.addEventListener('click', Resaut4);
    var resaut5 = document.getElementById('resaut5'); resaut5.addEventListener('click', Resaut5);

    var rescom1 = document.getElementById('rescom1'); rescom1.addEventListener('click', Rescom1);
    var rescom2 = document.getElementById('rescom2'); rescom2.addEventListener('click', Rescom2);
    var rescom3 = document.getElementById('rescom3'); rescom3.addEventListener('click', Rescom3);
    var rescom4 = document.getElementById('rescom4'); rescom4.addEventListener('click', Rescom4);
    var rescom5 = document.getElementById('rescom5'); rescom5.addEventListener('click', Rescom5);

    var resrel1 = document.getElementById('resrel1'); resrel1.addEventListener('click', Resrel1);
    var resrel2 = document.getElementById('resrel2'); resrel2.addEventListener('click', Resrel2);
    var resrel3 = document.getElementById('resrel3'); resrel3.addEventListener('click', Resrel3);
    var resrel4 = document.getElementById('resrel4'); resrel4.addEventListener('click', Resrel4);
    var resrel5 = document.getElementById('resrel5'); resrel5.addEventListener('click', Resrel5);

    function Resaut1() {if(doublecheck()) return; des = 12; ending();}
    function Resaut2() {if(doublecheck()) return; des = 14; ending();}
    function Resaut3() {if(doublecheck()) return; des = 13; ending();}
    function Resaut4() {if(doublecheck()) return; des = 2; ending();}
    function Resaut5() {if(doublecheck()) return; des = 11; ending();}

    function Rescom1() {if(doublecheck()) return; des = 10; ending();}
    function Rescom2() {if(doublecheck()) return; des = 4; ending();}
    function Rescom3() {if(doublecheck()) return; des = 7; ending();}
    function Rescom4() {if(doublecheck()) return; des = 15; ending();}
    function Rescom5() {if(doublecheck()) return; des = 1; ending();}

    function Resrel1() {if(doublecheck()) return; des = 3; ending();}
    function Resrel2() {if(doublecheck()) return; des = 5; ending();}
    function Resrel3() {if(doublecheck()) return; des = 6; ending();}
    function Resrel4() {if(doublecheck()) return; des = 8; ending();}
    function Resrel5() {if(doublecheck()) return; des = 9; ending();}

    var resultbutton = document.getElementById('resultbutton'); resultbutton.addEventListener('click', Next);

    var resultbutton_2 = document.getElementById('resultbutton_2'); resultbutton_2.addEventListener('click', Result);
    function Result() {
        console.log("ending, des : " + des);
        resulting(des);
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

function clickevent() {
    plusSlides(1); console.log("aut : " + aut + ", com : " + com + ", rel : " + rel);
    doubling = false;
    window.scrollTo(0, 50);
}

function semiclickevent(res) {
    console.log("result of test 1 : " + res);
    doubling = false;
    window.scrollTo(0, 50);
}

function ending() {
    var score = [aut, com, rel];
    var page = calculate(score);
    plusSlides(4-page)
    console.log("ending, des : " + des);
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

function resulting(des) {
    switch(des) {
        case 1:
            location.replace("test/res_1.html");
            break;
        case 2:
            location.replace("test/res_2.html");
            break;
        case 3:
            location.replace("test/res_3.html");
            break;
        case 4:
            location.replace("test/res_4.html");
            break;
        case 5:
            location.replace("test/res_5.html");
            break;
        case 6:
            location.replace("test/res_6.html");
            break;
        case 7:
            location.replace("test/res_7.html");
            break;
        case 8:
            location.replace("test/res_8.html");
            break;
        case 9:
            location.replace("test/res_9.html");
            break;
        case 10:
            location.replace("test/res_10.html");
            break;
        case 11:
            location.replace("test/res_11.html");
            break;
        case 12:
            location.replace("test/res_12.html");
            break;
        case 13:
            location.replace("test/res_13.html");
            break;
        case 14:
            location.replace("test/res_14.html");
            break;
        case 15:
            location.replace("test/res_15.html");
            break;
    }

    //location.replace("test/result.html");
}