const sec_hand = document.querySelector('.sec-hand');
const hour_hand = document.querySelector('.hour-hand');
const min_hand = document.querySelector('.min-hand');

function runTime() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    console.log(hours);
    sec_position = ((seconds / 60) * 360) + 90;
    sec_hand.style.transform = `rotate(${sec_position}deg)`;

    min_position = ((minutes / 60) * 360) + 90;
    min_hand.style.transform = `rotate(${min_position}deg)`;

    hour_position = ((hours / 12) * 360) + 90;
    hour_hand.style.transform = `rotate(${hour_position}deg)  scaleX(0.7)`;
}

setInterval(
    runTime,
    1000
)