const blog = document.getElementById('blog');

// async to arrow functions
// let getPosts = async () => {

// }

// fetch() with async-await and without async-await
// Defines "async" before "function" to use async-await method
async function getPosts() {
    blog.innerHTML = 'Loading...';

    // await = Wait for the request result before going to the next line
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json() ;
    buildBlog(json);
    // Using async-await the process will be slower because it only run one promise at a time. 
    // But it's more readable and better to do a query a database -> read line 27

    // fetch() = Send a request to a server and return a promise
    // fetch() = 1º param = https address | 2 º param = HTTP request methods(GET, POST, PUT, PATCH, DELETE) and others configs.
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // This .then() get the result promise of the fetch request | .jason() = Returns a promise to return a JSON.
        .then(json => buildBlog(json)) // This .then() get the result promise of the .json()
        .catch(error => console.log('Bad request'));
    // Using .then() the promises will be processed in parallel so this method is faster. But if you need to query a database, async-await is most recommended 
    // because if have a lot of records the .then() can cause performance problems or even shut down the service because of the simultaneous requests.
}

function buildBlog(json) {
    let html = '';

    for(let i in json) {
        html += `<div class='posts-area'>`;
        html += `<h3>${json[i].title}</h3>`;
        html += `${json[i].body} <br/>`;
        html += `</div>`;
    };

    blog.innerHTML = html;
}