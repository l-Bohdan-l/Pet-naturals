const timerEl = document.getElementById('timer');
let count = 7200;
let counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count === 0) {
        clearInterval(counter);
        return timerEl.innerHTML = "00:00:00";;
    }

    let seconds = count % 60;
    let minutes = Math.floor(count / 60);
    let hours = Math.floor(minutes / 60);
    minutes %= 60;
    hours %= 60;

    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    timerEl.innerHTML = hours + ":" + minutes + ":" + seconds; // watch for spelling
}

