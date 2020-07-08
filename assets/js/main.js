let x = 0
function plusOne() {
    x++
    document.getElementById("count").innerHTML = x
}
function minusOne() {
    x--
    document.getElementById("count").innerHTML = x
}
function plusTen() {
    x=x+10
    document.getElementById("count").innerHTML = x
}
function minusTen() {
    x=x-10
    document.getElementById("count").innerHTML = x
}
function plusHundred() {
    x=x+100
    document.getElementById("count").innerHTML = x
}
function minusHundred() {
    x=x-100
    document.getElementById("count").innerHTML = x
}
function reset() {
    x=0
    document.getElementById("count").innerHTML = x
}
function timesTwo() {
    x=x*2
    document.getElementById("count").innerHTML = x
}