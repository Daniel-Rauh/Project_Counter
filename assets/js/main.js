let x = 0
function output() {
    if (x == 69) {
        document.getElementById("count").innerHTML = "Nice!"
    }
    else {
        document.getElementById("count").innerHTML = x
    }
}
function plusOne() {
    x++
}
function minusOne() {
    x--
}
function plusTen() {
    x=x+10
}
function minusTen() {
    x=x-10
}
function plusHundred() {
    x=x+100
}
function minusHundred() {
    x=x-100
}
function reset() {
    x=0
}
function timesTwo() {
    x=x*2
}