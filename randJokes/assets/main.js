const CHUCK_URL = "https://api.chucknorris.io/jokes/random";
const container = document.getElementById("container")
const clicked = document.getElementById("clicked");
const coolors =["#c1cad6","#d4adcf","#856084","#84e296","#dde1e4"]

function randomJokes(){
    fetch(CHUCK_URL)
    .then((response) => response.json())
    .then((data)=>{
        const jokes = data.value
        container.innerText= jokes;

        document.body.style.backgroundColor=coolors[Math.ceil(Math.random()*coolors.length)]
    })    
}
randomJokes()

clicked.addEventListener("click",randomJokes);
const clickMe =document.querySelector("#click-me");
clickMe.addEventListener("click",(e)=>{
    console.log(e)
    console.log(e.target)
})
