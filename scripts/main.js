let btn;
let paragraphElement;
let counter = 0;

window.onload = () => {
    btn = document.getElementById('click-btn');
    paragraphElement = document.getElementById('counter-p');

    btn.addEventListener('click', () => {
        onBtnClick();
    })
};

function onBtnClick() {
    counter++;
    paragraphElement.innerText = `Clicked '${counter.toString()}' times!`;
}
