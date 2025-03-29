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
    fetch("https://v2.jokeapi.dev/Programming?safe-mode")
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
});

misc.addEventListener('click', function () {
    console.log("misc joke");
    categoryTitle.textContent = "A Random Miscellaneous Joke 🥸";
    fetch("https://v2.jokeapi.dev/Miscellaneous?safe-mode")
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

pun.addEventListener('click', function() {
    console.log("pun joke");
    categoryTitle.textContent = "A Random Punny Joke 🤓";
    fetch("https://v2.jokeapi.dev/Pun?safe-mode")
    .then(response => response.json())
    .then(date => {
        console.log(data);
        if(date.type === "single"){
            joke.textContent = data.joke;
        }
        else if(date.type === "twopart"){
            joke.textContent = data.setup + "..." + data.delivery;
        }
    });
});

