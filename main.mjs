const root = document.querySelector(':root');

const rotateXInput = document.querySelector('.cube-rotateX-range');
const rotateYInput = document.querySelector('.cube-rotateY-range');

const sizeInput = document.querySelector('.cube-properties__size');

const clearTool = document.querySelector('.tool-clear-cube-properties');

rotateXInput.addEventListener('input', () => {
    root.style.setProperty('--cube-rotate-degree-X', `${rotateXInput.value}deg`);
});

rotateYInput.addEventListener('input', () => {
    root.style.setProperty('--cube-rotate-degree-Y', `${rotateYInput.value}deg`);
});

sizeInput.addEventListener('input', () => {
    root.style.setProperty('--cube-size', `${sizeInput.value}px`);
});







clearTool.addEventListener('click', () => {
    root.style.setProperty('--cube-rotate-degree-X', '0deg');
    root.style.setProperty('--cube-rotate-degree-Y', '45deg');
    root.style.setProperty('--cube-size', '400px');
    sizeInput.value = 400;
});