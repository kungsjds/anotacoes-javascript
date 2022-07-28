const blog = document.getElementById('blog');

async function setPost() {
    blog.innerHTML = 'Loading...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ // body: Here are the data to send in the post. Need to convert an object to a string
            title: 'Title Test',
            body: 'Body Test',
            userId: 4
        }),
        headers: { // headers: Here are the data to authenticate/config.
            'Content-type': 'application/json'
        }
    });

    let json = await req.json();

    console.log(json);
}