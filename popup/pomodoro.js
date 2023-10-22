const startTimerButton = document.getElementById("startTimer");
const h1Text = document.getElementById("title");


startTimerButton.addEventListener("click",() => {
    h1Text.innerText = "Click";
    document.querySelector("#timer").classList.remove("hidden");
})