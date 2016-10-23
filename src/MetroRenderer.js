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
}

export default MetroRenderer;
