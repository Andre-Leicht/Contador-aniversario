const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const dateOfBirthDay = document.querySelector("#birthday");

let year = new Date()
let newDate = "28 Oct "+ (year.getFullYear()+1) ;
let birthday = (year.getFullYear()+1) - 2002;

function countdown(){

    const newYerasDate = new Date(newDate);
    const currentDate = new Date();

    const totalSeconds = (newYerasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    dateOfBirthDay.innerHTML = birthday + " anos em";

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }
}
countdown();

setInterval(countdown, 1000);