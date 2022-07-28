async function sendFile() {
    // const file = document.getElementById('file').files; //.files = Returns an array of file objects

    const file = document.getElementById('file').files[0]; // .files[0] = Returns a file object at position 0

    // When the request has a file, needs to set a FormData class.
    let body = new FormData();
    body.append('title', 'Title test');
    body.append('file', file);

    let req = await fetch('https://someexamplesite.com/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data' // Needs this content type for the requisition server to receive the file
        }
    });

    console.log(file);
}