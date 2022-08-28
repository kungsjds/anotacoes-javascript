// 1 <
// Promise() = Check whether the request was successful or not and then return a response function. 
// If successful, it will return a >resolve< function, otherwise it will return a >reject< function.
function getDegrees() {
    return new Promise(function(resolve, reject) {
        console.log("Getting degrees...");

        setTimeout(function() {
            resolve('40 degrees in the shade')
        }, 2000);
    });
};

// 2 <
// The promises function doesn't wait for the requested result to keep reading the code, it calls back the (resolve) or (reject) function when the requested is over
// It's like "I promise that I will return a result later"
console.log(`Before promises`);

let temp = getDegrees();
console.log(`During promises`);

// 3 <
// If successful, run this function, getting (resolve) function return
temp.then(function(result) {
    console.log(`Temperature: ${result}`);
});

// 4 <
// Otherwise run this function, getting (reject) function return
temp.catch(function(error) {
    console.log(`Something wrong!`);
});

// 5 <
// If the request has not yet completed, this code will be runned before the request result
console.log(`After promises`);