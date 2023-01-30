export default function preloader() {
  const preloader = document.querySelector("#preloader");
  let weekDay = document.querySelector(".calendar-week");
  let calendarLogo = document.querySelector(".calendar-logo");
  let secWrap = document.querySelector(".numbers");
  let secspan = document.querySelector(".numbers .num");
  let secspans = document.querySelectorAll(".num");
  let calHours = document.querySelector(".calendar-hours");
  let calMinutes = document.querySelector(".calendar-minutes");
  let calDay = document.querySelector(".calendar-day");
  let calWeek = document.querySelector(".calendar-week");
  let calYear = document.querySelector(".calendar-year");
  let sec = 1;
  const secspanHeight = secspan.clientHeight;
  while (sec <= 1000) {
    let span = document.createElement("span");
    span.textContent = sec;
    span.setAttribute("class", "num");
    secWrap.appendChild(span);
    sec++;
  }
  var i = 0;
  window.setInterval(function () {
    i = i + 1;
    secWrap.style.transform = `translateY(-${secspanHeight * i}px)`;
  }, 1000);
  setTimeout(calendarLogo.classList.add("active"), 1000);
  // Get Time
  const d = new Date();
  const theYear = d.getFullYear();
  calYear.innerHTML = theYear;
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let week = weekday[d.getDay()];
  calWeek.innerHTML = week;
  let currentDay = d.getDate();
  if (currentDay <= 9) {
    let exactDay = "0" + currentDay;
    calDay.innerHTML = exactDay;
  } else {
    calDay.innerHTML = currentDay;
  }
  function digitalClock() {
    var d = new Date();
    var hours = d.getHours();
    hours = addZero(hours);
    var minutes = d.getMinutes();
    minutes = addZero(minutes);
    calHours.innerHTML = hours;
    calMinutes.innerHTML = minutes;
  }
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  setInterval(digitalClock, 1000);
  setTimeout(function () {
    preloader.style.display = "none";
  }, 3000);
}
