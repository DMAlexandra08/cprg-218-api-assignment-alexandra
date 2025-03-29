const categoryTitle =document.getElementById('title');
const joke =document.getElementById('joke');

fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    if(data.type === "single") {
        joke.textContent = data.joke;
    }
    else if(data.type === "twopart") {
        joke.textContent = data.setup + "..." + data.delivery;
    }
});

programming.addEventListener('click', function () {
    console.log("programming joke");
    categoryTitle.textContent = "A Random Programming Joke 🖥️";
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke;
        }
        else if(data.type === "twopart") {
            joke.textContent = data.setup + "..." + data.delivery;
        }
    });
});

misc.addEventListener('click', function () {
    console.log("misc joke");
    categoryTitle.textContent = "A Random Miscellaneous Joke 🥸";
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke;
        }
        else if(data.type === "twopart") {
            joke.textContent = data.setup + "..." + data.delivery;
        }
    });
});

pun.addEventListener('click', function () {
    console.log("pun joke");
    categoryTitle.textContent = "A Random Punny Joke 🤓";
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke;
        }
        else if(data.type === "twopart") {
            joke.textContent = data.setup + "..." + data.delivery;
        }
    });
});

spooky.addEventListener('click', function () {
    console.log("spooky joke");
    categoryTitle.textContent = "A Random Spooooky Joke 🎃";
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke;
        }
        else if(data.type === "twopart") {
            joke.textContent = data.setup + "..." + data.delivery;
        }
    });
});

christmas.addEventListener('click', function () {
    console.log("christmas joke");
    categoryTitle.textContent = "A Random Christmas Joke 🎅";
    fetch("https://v2.jokeapi.dev/joke/Christmas/safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.type === "single"){
            joke.textContent = data.joke;
        }
        else if(data.type === "twopart") {
            joke.textContent = data.setup + "..." + data.delivery;
        }
    });
});