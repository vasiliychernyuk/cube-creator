import createElement from "./element.mjs";

let contextCounter = 0;

const addCubeButton = document.querySelector('.tool-add-cube');
const removeCubeButton = document.querySelector('.tool-remove-cube');

const navigator = document.querySelector('.navigator');

const createCube = () => {

    const contextId = `context-${contextCounter}`;

    const context = createElement({
        id: contextId,
        class: 'context'
    });

    const cube = createElement({
        id:`cube__${contextId}`,
        class: 'cube'
    }, context);

    const topSide    = createElement({
        id:`top-side__${contextId}`,
        class: 'top'
    }, cube);

    const bottomSide = createElement({
        id:`bottom-side__${contextId}`,
        class: 'bottom'
    }, cube);

    const leftSide   = createElement({
        id: `left-side__${contextId}`,
        class: 'left'
    }, cube);

    const rightSide  = createElement({
        id: `right-side__${contextId}`,
        class: 'right'
    }, cube);

    const frontSide  = createElement({
        id: `front-side__${contextId}`,
        class: 'front'
    }, cube);

    const backSide   = createElement({
        id: `back left-side__${contextId}`,
        class: 'back'
    }, cube);

    contextCounter += 1;
}

const removeCube = () => {
    const element = document.querySelector('.context');
    element.remove();
}

let createToggler = true;

const createHandler = () => {
    if (createToggler) {
        createCube();
        addCubeButton.removeEventListener('click', createHandler);
        removeCubeButton.addEventListener('click', removeHandler);

        createToggler = !createToggler;
    }
}

const removeHandler = () => {
    if(!createToggler) {
        removeCube();
        addCubeButton.addEventListener('click', createHandler);
        removeCubeButton.addEventListener('click', removeHandler);

        createToggler = !createToggler;
    }
}

addCubeButton.addEventListener('click', createHandler);

removeCubeButton.addEventListener('click', removeHandler);

// const root = document.querySelector(':root');
// const rootStyles = getComputedStyle(root);
// const size = rootStyles.getPropertyValue('--cube-side_size');

// root.style.setProperty('--cube-side_size', '600px');
// console.info(size)
