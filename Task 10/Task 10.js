



document.addEventListener('DOMContentLoaded',function() {
  var tiles=document.querySelectorAll('button');
  var countDownDate = new Date("Jan 24, 2022 7:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  tiles[0].innerHTML=days+'\nDays';
  tiles[1].innerHTML=hours+'\nHours';
  tiles[2].innerHTML=minutes+'\nMinutes';
  tiles[3].innerHTML=seconds+'\nSeconds';

  console.log(minutes);
  if (distance < 0) {
    clearInterval(x);
    console.log('closed');
  }
}, 1000);

});