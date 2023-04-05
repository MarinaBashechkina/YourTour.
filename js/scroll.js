'use strict';
var header = document.querySelector('.head1__header1');
var first = document.querySelector('.first');
var head= document.querySelector('.head1__container1');
var firstHeight = first.offsetHeight;
var headerHeight = header.offsetHeight;
window.addEventListener('scroll', function () {
    var scrdis = window.scrollY;
    if (scrdis >= firstHeight) {
        header.classList.add('hdscrl');
        head.style.marginTop=`${headerHeight}px`;
    } else {
        header.classList.remove('hdscrl');
        head.style.marginTop=null;
    }
});