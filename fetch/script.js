const blog = document.getElementById('blog');

function getPosts() {
    blog.innerHTML = 'Loading...';

    // fetch() = Send a request to a server and return a promise
    // fetch() = 1º param = https address | 2 º param = HTTP request methods(GET, POST, PUT, PATCH, DELETE) and others configs.
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // This .then() get the result promise of the fetch request | .jason() = Returns a promise to return a JSON.
        .then(json => buildBlog(json)) // This .then() get the result promise of the .json()
        .catch(error => console.log('Bad request'));
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