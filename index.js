function submitPost() {
    let imageInput = document.getElementById("addimage"); // Get the file input element
    let imageFile = imageInput.files[0]; // Get the selected file
    let title = document.getElementById("Title-card").value;
    let content = document.getElementById("Post-card").value;

    // Check if fields are empty
    if (title.trim() === "" || content.trim() === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Create a new blog post  
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    // Use FileReader to read the image
    if (imageFile) {
        let reader = new FileReader();
        reader.onload = function (e){
            postDiv.innerHTML = `
                <img src="${e.target.result}" alt="Uploaded Image" style="width:400px; height:200px;">
                <h2>${title}</h2>
                <p>${content}</p>
                <button onclick="deletePost(this)">Delete</button>
            `;
        };
        reader.readAsDataURL(imageFile);
    } else {
        // If no image is uploaded
        postDiv.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
            <button onclick="deletePost(this)">Delete</button>
        `;
    }

    // Append post to the page
    document.getElementById("postsContainer").appendChild(postDiv);

    // Clear input fields after adding the post
    document.getElementById("Title-card").value =" ";
    document.getElementById("Post-card").value =" ";
    imageInput.value =" ";
}

// Function to delete a post
function deletePost(button) {
    button.parentElement.remove();
}
