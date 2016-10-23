import MetroViewMode from './MetroViewMode';
import MetroViewRenderer from './MetroViewRenderer';
import MetroElementRenderer from './MetroElementRenderer';

const createElement = (elementType, props, ...children) => {
    props = props || {};
    children = children || [];

    if (elementType.prototype instanceof MetroViewMode) {
        return new MetroViewRenderer(elementType, props, children);
    }

    return new MetroElementRenderer(elementType, props, children);
}

const render = (element) => {
    element.beforeMount();
    return element.render();
}

const Metro = {
    render: render,
    createElement: createElement
};

export default Metro;
