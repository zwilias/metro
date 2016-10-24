//@flow
import MetroNode from './MetroNode';

type MetroElement = Class<MetroNode> | string
type MetroChild = MetroRenderer | string;

class MetroRenderer {
    elementType: MetroElement;
    properties: Object;
    componentInstance: MetroNode;

    constructor (elementType: MetroElement, properties: Object, children: Array<MetroChild>) {
        this.elementType = elementType;
        this.properties = properties;
        this.properties.children = children;
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
