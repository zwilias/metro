import MetroRenderer from './MetroRenderer';
import MetroRendererFactory from './MetroRendererFactory';

const createElement = MetroRendererFactory.create;

const render = (element, container) => {
    return container.renderContainer((container) => {
        element.renderInto(container)
    });
}

const Metro = {
    render: render,
    createElement: createElement
};

export default Metro;
