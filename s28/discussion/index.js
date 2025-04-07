console.log("Hello World");

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
        postEntries += `
        <div id="post-${post.id}" class="post">
            <h3 id="post-title-${post.id}">${post.title}</h3>
            <p id="post-body-${post.id}">${post.body}</p>
            <button onclick="deletePost('${post.id}')">Delete</button>
        </div>
        `;
    });

    // console.log(postEntries);
    // we can add html element to another element as string by
    // updating it using innerHTML property.
    document.getElementById("div-post-entries").innerHTML = postEntries;
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
