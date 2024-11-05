const createElement = (attributes, context) => {

    const scene = document.querySelector(".scene");

    let element = document.createElement('div');
    element.id = attributes.id;
    element.className = attributes.class;

    context ? context.append(element) : scene.append(element);

    return element;
}

export default createElement;