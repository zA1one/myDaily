let input = document.querySelector("input");
let btn = document.querySelector('input[type="submit"]');
let posts = document.querySelector(".posts")
let postsInLocal = []


if (localStorage.length != 0) {
    let arr = localStorage.getItem("posts").split(",")
    let re = /:"\w+"/ig;
    for (let i = 0; i < arr.length; i++) {
        let post = document.createElement("div");
        let postHeader = document.createElement("div");
        let author = document.createElement("span");
        author.innerHTML = "Mazen Ahmed";
        let dateNow = new Date();
        let date = document.createElement("span");
        date.innerHTML = `${dateNow.getDate()}/${dateNow.getMonth()+1}/${dateNow.getFullYear()}`
        postHeader.append(author, date);
        let speech = document.createElement("span");
        speech.innerHTML = arr[i].match(re)[0].slice(2,-1)
        post.style.cssText = "margin-top: 50px;background-color: #242526;color: #eee;padding: 10px;text-align: center;border-radius: 5px;margin: 50px auto;"
        postHeader.style.cssText = "display: flex;justify-content: center;flex-direction: column;border-bottom: 1px solid #393a3b;text-align: center;padding: 5px;margin-bottom: 5px;"
        post.appendChild(postHeader);
        post.appendChild(speech);
        posts.appendChild(post)
    }
}

btn.addEventListener("click", function (e) {
    e.preventDefault()
    if (input.value == " " || input.value.includes("  ") || input.value == "") {
        return;
    }
    let post = document.createElement("div");
    let postHeader = document.createElement("div");
    let author = document.createElement("span");
    author.innerHTML = "Mazen Ahmed";
    let dateNow = new Date();
    let date = document.createElement("span");
    date.innerHTML = `${dateNow.getDate()}/${dateNow.getMonth()+1}/${dateNow.getFullYear()}`
    postHeader.append(author, date);
    let speech = document.createElement("span");
    speech.innerHTML = input.value;
    post.style.cssText = "margin-top: 50px;background-color: #242526;color: #eee;padding: 10px;text-align: center;border-radius: 5px;margin: 50px auto;"
    postHeader.style.cssText = "display: flex;justify-content: center;flex-direction: column;border-bottom: 1px solid #393a3b;text-align: center;padding: 5px;margin-bottom: 5px;"
    post.appendChild(postHeader);
    post.appendChild(speech);
    posts.appendChild(post)
    postsInLocal.push({post: input.value});
    localStorage.setItem("posts", JSON.stringify(postsInLocal))
});

