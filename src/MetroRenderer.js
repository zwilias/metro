//@flow
import MetroComponent from './MetroComponent';

type MetroElement = Class<MetroComponent> | string

class MetroRenderer {
    elementType: MetroElement;
    properties: Object;
    componentInstance: MetroComponent

    constructor (elementType: MetroElement, properties: ?Object, children: ?Array<MetroRenderer>) {
        this.elementType = elementType;
        this.properties = properties || {};
        this.properties.children = children || [];
    }

    beforeMount = () => {
        if (! this.componentInstance) {
            // $FlowFixMe - ensure, somehow, that we don't reach here if elementType is a string
            this.componentInstance = new this.elementType(this.properties);
        }

        return this;
    }

    renderContainer = (renderCallback: (MAF.Class)) => {
        return this.beforeMount().componentInstance.renderComponent(renderCallback);
    }

    renderInto = (container: MAF.Class) => {
        return this.beforeMount().componentInstance.renderInto(container);
    }
}

export default MetroRenderer;
