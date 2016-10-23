import MetroRenderer from './MetroRenderer';

const createElement = (elementType, props, ...children) => {
    props = props || {};
    children = children || [];

    return new MetroRenderer(elementType, props, children);
}

const render = (element) => {
    element.beforeMount();
    return element.renderContainer();
}

const Metro = {
    render: render,
    createElement: createElement
};

export default Metro;
