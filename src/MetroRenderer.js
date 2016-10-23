import MetroComponent from './MetroComponent';

class MetroRenderer {
    constructor (elementType, properties, children) {
        this.elementType = elementType;
        this.properties = properties || {};
        this.children = children || [];

        this.properties.children = this.children;
    }

    beforeMount = () => {
        if (! this.componentInstance) {
            this.componentInstance = new this.elementType(this.properties);
        }
    }

    renderContainer = () => {
        return this.componentInstance.renderComponent(this);
    }

    renderChildrenInto = (container) => {
        this.children.forEach((child) => {
            child.beforeMount();
            child.renderInto(container);
        });
    }

    renderInto = (container) => {
        if (this.componentInstance instanceof MetroComponent) {
            container = this.componentInstance.renderInto(container);
        }

        this.renderChildrenInto(container);
    }
}

export default MetroRenderer;
