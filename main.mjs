const root                 = document.querySelector(':root');
const rotateXInput         = document.querySelector('.cube-rotateX-range');
const rotateYInput         = document.querySelector('.cube-rotateY-range');
const sizeInput            = document.querySelector('.cube-properties__size');
const cssSourcecodeSection = document.querySelector('.sourcecode__css');
const clearTool            = document.querySelector('.tool-clear-cube-properties');

rotateXInput.addEventListener('input', () => {
    root.style.setProperty('--cube-rotate-degree-X', `${rotateXInput.value}deg`);

    cssSourcecodeSection.innerHTML = `
    body {
        <br>&nbsp&nbsp&nbsp&nbsp perspective: 1000px;
    <br>}<br><br>

    .cube {
        <br>&nbsp&nbsp&nbsp&nbsp transform-style: preserve-3d;
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(${rotateYInput.value}deg) rotateX(${rotateXInput.value}deg);<br>
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .side {
        <br>&nbsp&nbsp&nbsp&nbsp position: absolute;
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .top {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .bottom {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .left {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .right {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .front {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}<br><br>

    .back {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}`;
});

rotateYInput.addEventListener('input', () => {
    root.style.setProperty('--cube-rotate-degree-Y', `${rotateYInput.value}deg`);

    cssSourcecodeSection.innerHTML = `
    body {
        <br>&nbsp&nbsp&nbsp&nbsp perspective: 1000px;
    <br>}<br><br>

    .cube {
        <br>&nbsp&nbsp&nbsp&nbsp transform-style: preserve-3d;
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(${rotateYInput.value}deg) rotateX(${rotateXInput.value}deg);<br>
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .side {
        <br>&nbsp&nbsp&nbsp&nbsp position: absolute;
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .top {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .bottom {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .left {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .right {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .front {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}<br><br>

    .back {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}`;
});

sizeInput.addEventListener('input', () => {
    root.style.setProperty('--cube-size', `${sizeInput.value}px`);

    cssSourcecodeSection.innerHTML = `
    body {
        <br>&nbsp&nbsp&nbsp&nbsp perspective: 1000px;
    <br>}<br><br>

    .cube {
        <br>&nbsp&nbsp&nbsp&nbsp transform-style: preserve-3d;
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(${rotateYInput.value}deg) rotateX(${rotateXInput.value}deg);<br>
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .side {
        <br>&nbsp&nbsp&nbsp&nbsp position: absolute;
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .top {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .bottom {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .left {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .right {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .front {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}<br><br>

    .back {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}`;
});

cssSourcecodeSection.innerHTML = `
    body {
        <br>&nbsp&nbsp&nbsp&nbsp perspective: 1000px;
    <br>}<br><br>

    .cube {
        <br>&nbsp&nbsp&nbsp&nbsp transform-style: preserve-3d;
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(${rotateYInput.value}deg) rotateX(${rotateXInput.value}deg);<br>
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .side {
        <br>&nbsp&nbsp&nbsp&nbsp position: absolute;
        <br>&nbsp&nbsp&nbsp&nbsp width: ${sizeInput.value}px;
        <br>&nbsp&nbsp&nbsp&nbsp height: ${sizeInput.value}px;
    <br>}<br><br>

    .top {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .bottom {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .left {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .right {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .front {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( ${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}<br><br>

    .back {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( -${sizeInput.value / 2}px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}`;

clearTool.addEventListener('click', () => {
    root.style.setProperty('--cube-rotate-degree-X', '0deg');
    rotateXInput.value = '0';
    root.style.setProperty('--cube-rotate-degree-Y', '45deg');
    rotateYInput.value = '45';
    root.style.setProperty('--cube-size', '400px');
    sizeInput.value = 400;

    cssSourcecodeSection.innerHTML = `
    body {
        <br>&nbsp&nbsp&nbsp&nbsp perspective: 1000px;
    <br>}<br><br>

    .cube {
        <br>&nbsp&nbsp&nbsp&nbsp transform-style: preserve-3d;
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(45deg) rotateX(0deg);<br>
        <br>&nbsp&nbsp&nbsp&nbsp width: 400px;
        <br>&nbsp&nbsp&nbsp&nbsp height: 400px;
    <br>}<br><br>

    .side {
        <br>&nbsp&nbsp&nbsp&nbsp position: absolute;
        <br>&nbsp&nbsp&nbsp&nbsp width: 400px;
        <br>&nbsp&nbsp&nbsp&nbsp height: 400px;
    <br>}<br><br>

    .top {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( 200px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .bottom {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateX(90deg) translateZ( -200px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #333;
    <br>}<br><br>

    .left {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( -200px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .right {
        <br>&nbsp&nbsp&nbsp&nbsp transform: rotateY(90deg) translateZ( 200px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #444;
    <br>}<br><br>

    .front {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( 200px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}<br><br>

    .back {
        <br>&nbsp&nbsp&nbsp&nbsp transform: translateZ( -200px );
        <br>&nbsp&nbsp&nbsp&nbsp background-color: #555;
    <br>}`;
});