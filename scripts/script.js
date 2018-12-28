var playbar;
var window1;
var window2;
var window3;
var window4;
var window5;
var window6;
var window7;
var window8;
var window9;
var window10;
var window11;
var window12;
var window13;
var window14;
var window15;
var window16;

function openPlaybar() {
    playbar = window.open("playbar.html", "playbar", "width=window.screen.Width height=window.screen.Height");
}

function open1() {
    window1 = window.open("one.html", "one", "width=150, height=150");
}

function open2() {
    window2 = window.open("two.html", "two", "width=150, height=150");
}

function open3() {
    window3 = window.open("three.html", "three", "width=150, height=150");
}

function open4() {
    window4 = window.open("four.html", "four", "width=150, height=150");
}

function open5() {
    window5 = window.open("five.html", "five", "width=150, height=150");
}

function open6() {
    window6 = window.open("six.html", "six", "width=150, height=150");
}

function open7() {
    window7 = window.open("seven.html", "seven", "width=150, height=150");
}

function open8() {
    window8 = window.open("eight.html", "eight", "width=150, height=150");
}

function open9() {
    window9 = window.open("nine.html", "nine", "width=150, height=150");
}

function open10() {
    window10 = window.open("ten.html", "ten", "width=150, height=150");
}

function open11() {
    window11 = window.open("eleven.html", "eleven", "width=150, height=150");
}

function open12() {
    window12 = window.open("twelve.html", "twelve", "width=150, height=150");
}

function open13() {
    window13 = window.open("thirteen.html", "thirteen", "width=150, height=150");
}

function open14() {
    window14 = window.open("fourteen.html", "fourteen", "width=150, height=150");
}

function open15() {
    window15 = window.open("fifteen.html", "fifteen", "width=150, height=150");
}

function open16() {
    window16 = window.open("sixteen.html", "sixteen", "width=150, height=150");
}

function closeall() {
    alert("closeAllWindows called!");
    window1.close();
    window2.close();
    window3.close();
    window4.close();
    window5.close();
    window6.close();
    window7.close();
    window8.close();
    window9.close();
    window10.close();
    window11.close();
    window12.close();
    window13.close();
    window14.close();
    window15.close();
    playbar.close();
}

function init() {
    sound.play();
    sound.fadeIn(0.5, 600);
}
function delayedClose() {
    timeoutID = window.setTimeout(closeWindow, 200);
    sound.fade(0.5, 0.0, 200);
}
function closeWindow() {
    window.close();
}
function randomX() {
    var randomX = Math.ceil(Math.random() * window.screen.availWidth);
    return randomX;
}
function randomY() {
    var randomY = Math.ceil(Math.random() * window.screen.availHeight-400);
    return randomY;
}