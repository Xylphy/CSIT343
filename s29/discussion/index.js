console.log("Hello World");

const deleteAllBtn = document.getElementById("delete-all");
const divPostEntries = document.getElementById("div-post-entries");

const formViewPost = document.getElementById("form-view-post");
const formViewBtn = document.getElementById("btn-view-post");
const formViewTxt = document.getElementById("txt-view-post");
const divPostView = document.getElementById("div-post-view");

const txtEditBody = document.getElementById("txt-edit-body");
const txtEditTitle = document.getElementById("txt-edit-title");
const txtEditId = document.getElementById("txt-edit-id");

const formEditPost = document.getElementById("form-edit-post");
const submitButton = document.getElementById("btn-submit-update");

// [SECTION] Fetch method
// allows us to get, post, update or even delete data in a server

// url is a representative address of accessing a resource
// or data in another machine
fetch("https://jsonplaceholder.typicode.com/posts")
    // allows us to process the data we retrivve using fetch in another
    // function
    .then(function (response) {
        // parse the incoming data as a proper JS Object
        console.log(response);
        return response.json();
    })
    // to do something with the processed server response
    .then(function (data) {
        // this runs later after fetched
        // log the data to the console
        showPosts(data);
    });

// showPosts this will create html elements using our fetched data
const showPosts = (posts) => {
    // loop through the posts
    // console.log(posts);

    // Add each post as a string
    let postEntries = "";

    posts.forEach((post) => {
        // console.log(post);
        // Pass the post id to a delete button
        postEntries += `
        <div id="post-${post.id}" class="post">
            <h3 id="post-title-${post.id}">${post.title}</h3>
            <p id="post-body-${post.id}">${post.body}</p>
            <button onclick="edit('${post.id}')">Edit</button>
            <button onclick="deletePost('${post.id}')">Delete</button>
        </div>
        `;
    });

    // console.log(postEntries);
    // we can add html element to another element as string by
    // updating it using innerHTML property.
    divPostEntries.innerHTML = postEntries;
};

// Add data to our server
document
    .getElementById("form-add-post")
    .addEventListener("submit", function (event) {
        console.log(event);

        event.preventDefault(); // prevent the default action of the form

        // console.log("Hello! The post has been added!");
        let titleInput = document.getElementById("txt-title");
        let bodyInput = document.getElementById("txt-body");

        // console.log(titleInput.value);
        // console.log(bodyInput.value);

        // fetch("url", "{options}")
        // options contains other details to be sent to the server

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // method to be used
            // This contains the main content that we want to send
            // to our server.

            body: JSON.stringify({
                title: titleInput.value,
                body: bodyInput.value,
                userId: 1,
            }),
            // contains other details that we need to send to the server
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            });
    });

function deletePost(id) {
    // delete the post from the server
    alert("Post deleted.");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById(`post-${id}`).remove();
        });
}

formViewPost.addEventListener("submit", function (event) {
    event.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/${formViewTxt.value}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Post not found.");
            }
            return response.json();
        })
        .then((data) => {
            divPostView.innerHTML = `
                <h3 id="post-title-${data.id}">${data.title}</h3>
                <p id="post-body-${data.id}">${data.body}</p>
            `;
        })
        .catch((error) => {
            divPostView.innerHTML = `
                <p>${error.message}</p>
            `;
        });
});

formViewTxt.addEventListener("keyup", function () {
    if (formViewTxt.value.length > 0) {
        formViewBtn.disabled = false;
    } else {
        formViewBtn.disabled = true;
    }
});

/*
    Mini Activity (10 mins):
    1. Create a function called editPost(id) that will:
        a. Get the post title from <post-title-id>
        b. Get the post body from <post-body-id>
        c. Populate the form fields with the retrieved data:
            i. post ID
            ii. post title
            iii. post body
        d. Enable the "Update" button by removing the disable attribute
        e. Take a screenshot of your webpage after the form is pre-filled and send it in the chat.
*/

formEditPost.addEventListener("submit", function (event) {
    event.preventDefault();
    const postId = txtEditId.value;
    const postTitle = document.getElementById(`post-title-${postId}`);
    const postBody = document.getElementById(`post-body-${postId}`);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
            title: txtEditTitle.value,
            body: txtEditBody.value,
            userId: postId,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            alert("Successfully updated.");
            postTitle.innerText = txtEditTitle.value;
            postBody.innerText = txtEditBody.value;

            submitButton.setAttribute("disabled", "true");
            txtEditTitle.value = "";
            txtEditBody.value = "";
        });
});

function edit(id) {
    const postTitle = document.getElementById(`post-title-${id}`);
    const postBody = document.getElementById(`post-body-${id}`);

    txtEditId.value = id;
    txtEditBody.value = postBody.innerText;
    txtEditTitle.value = postTitle.innerText;
    submitButton.removeAttribute("disabled");
}

deleteAllBtn.addEventListener("click", function () {
    alert("All Posts Deleted");
    divPostEntries.innerHTML = "";
});
