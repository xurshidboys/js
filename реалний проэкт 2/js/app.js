const items = document.querySelectorAll(".coundown-item > h4");
const coundownElement = document.querySelector(".coundown")
let countdownDate = new Date(2022, 17, 22, 25, 0, 0).getTime();

function getCountdownTime() {
    const now = new Date().getTime();
    const distance = countdownDate - now


    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;


    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
    console.log(values);
    items.forEach(function(item, index) {
        item.textContent = values[index];
    });
    if (distance < 0) {
        crearInterval(coundown)
        coundownElement.innerHTML = "<h4 class='expired'>Время вышло</h4>"
    }
}
let coundown = setInterval(getCountdownTime, 1000);

getCountdownTime();