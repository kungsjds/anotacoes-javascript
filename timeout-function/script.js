let timer;

function run() {

    // setTimeout() = Run a function only once after X milliseconds.
    timer = setTimeout(function() {
        document.getElementById('ex').innerHTML = 'Awake';
    }, 2000);

};

function stop() {
    // clearTimeout() = Stop the timer before it runs
    clearTimeout(timer);
};