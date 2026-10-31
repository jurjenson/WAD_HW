const POSTS_URL = "https://api.jsonbin.io/v3/b/6ae10093ffd5d1605390e7b8";

// "2026-09-23" -> "Sep 23,2026"
function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year:"numeric"
    })
}

function createPost(post) {
    const article = document.createElement("article");
    article.className = "post";

    // Header
    const header = document.createElement("div");
    header.className = "post-header";

    const profilePic = document.createElement("img");
    profilePic.src = post.authorImage;
    profilePic.alt = post.author;
    profilePic.className = "profile-pic";

    const date = document.createElement("span");
    date.className = "date";
    date.textContent = formatDate(post.createTime);

    header.append(profilePic, date);
    article.append(header);

    // Post image if the post has one
    if (post.postImage) {
        const image = document.createElement("img");
        image.src = post.postImage;
        image.alt = "Post image";
        image.className = "post-image";
        article.append(image);
    }

    // Post text
    const text = document.createElement("p");
    text.textContent = post.text;
    article.append(text);

    // Like + Comment
    const reactions = document.createElement("div");
    reactions.className = "post-reactions";

    const likeButton = document.createElement("button");
    likeButton.textContent = "👍 Like";

    const commentButton = document.createElement("button");
    commentButton.textContent = "💬 Comment";

    reactions.append(likeButton, commentButton);
    article.append(reactions);

    return article;

}

// Task 4 
/* fetch(POSTS_URL)
    .then(response => {
      if (!response.ok) {
          throw new Error("HTTP error " + response.status);
      }
      return response.json();
})
    .then(data => {
        const container = document.getElementById("user-posts");
        //JSONBin wraps array in record (thats why data.record)
        data.record.forEach(post => container.append(createPost(post)));
    })
    .catch(error => console.error("Could not load posts:", error));
*/ 

// Task 5
fetch("posts.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(posts => {
        const container = document.getElementById("user-posts");
        // The local file is a plain array, so there's no .record here
        posts.forEach(post => container.append(createPost(post)));
    })
    .catch(error => console.error("Could not load posts:", error));
