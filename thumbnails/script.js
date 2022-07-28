function showImage() {
    const file = document.getElementById('image').files[0];
    const imageArea = document.getElementById('image-area');    

    // First way to do (Synchronous)
    let img = document.createElement('img'); // Create an image element
    img.src = URL.createObjectURL(file); // Generate an URL to show the image
    img.width = 200;

    imageArea.appendChild(img); // Place the image element inside the other element
    //


    // Second way to do (Asynchronous)    
    // FileReader = run a call back after reading the file
    const reader = new FileReader();

    reader.onloadend = img2 => { // Call back
        img2 = document.createElement('img');
        img2.src = reader.result;
        img2.width = 200;

        imageArea.appendChild(img2); 
    };

    reader.readAsDataURL(file); // Read the file
    // end FileReader    
}