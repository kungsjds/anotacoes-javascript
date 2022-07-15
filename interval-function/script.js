let timer;

function start() {

    // setInterval() = Set a function to be executed every defined milliseconds.
    timer = setInterval(showHours, 1000);

};

function stop() {

    // clearInterval() = Stop the interval loop
    clearInterval(timer);

};

function showHours() {

    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hours = h +':'+ m +':'+ s;

    document.querySelector('.example').innerHTML = hours;

};