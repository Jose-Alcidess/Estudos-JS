const container = document.querySelector('.container');
const color = document.querySelector("input");

const defaultColor = '#f0f0f0';
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg(){
    container.style.backgroundColor = `${color.value}`;
}