const spiderRelease = '12 aug 2022';

function countdown() {
    const newSpiderReleaseDate = new Date(spiderRelease);
    const currentDate = new Date();

    const totalSeconds = (newSpiderReleaseDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

   document.getElementById('days').innerHTML=days
   document.getElementById('hours').innerHTML=hours
   document.getElementById('minutes').innerHTML=minutes
   document.getElementById('seconds').innerHTML=seconds
}

countdown();

setInterval(countdown, 1000);