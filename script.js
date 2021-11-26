//dom elements
const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const mins_el = document.getElementById("mins");
const seconds_el = document.getElementById("seconds");
const yeartext = document.getElementById("yearText");


console.log(yeartext);
// variables
const newYear = "1 1 2022";

function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    let secondsTotal = Math.floor((newYearDate - currentDate) / 1000);
    let seconds = Math.floor((newYearDate - currentDate) / 1000) % 60;
    let minutes = Math.floor(secondsTotal / 60) % 60;
    let hours = Math.floor(secondsTotal / 3600) % 60 ;
    let days = Math.floor(secondsTotal / (3600*24))

    if(seconds < 0 || hours < 0 || minutes < 0 || days < 0){
        seconds = "00";
        hours = "00";
        minutes = "00";
        days = "00";

        yeartext.innerHTML = "Happy New Year <span>2022</span>"
    }

    seconds_el.innerText = seconds;
    mins_el.innerText = minutes;
    hours_el.innerText = hours;
    days_el.innerText = days;
    

    if(days >= 100){
        days_el.parentElement.style.width = "125px";

    }
    
}



setInterval(countdown, 1000);



