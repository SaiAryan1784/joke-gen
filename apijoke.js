const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Programming?type=single"

let getJoke = () => {
    jokeContainer.classList.remove("fade")
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.classList.add("fade")
        jokeContainer.textContent = `${item.joke}`
    })
}

btn.addEventListener("click",getJoke);
getJoke();

