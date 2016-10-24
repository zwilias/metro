// @flow
import MetroNode from './MetroNode';
import MetroRenderer from './MetroRenderer';

class MetroComponent extends MetroNode {
    render: () => MetroRenderer
    renderComponent: () => MAF.Class

    constructor(props: Object) {
        super(props);

        if (this.constructor === MetroComponent) {
            throw new TypeError("Cannot construct MetroComponent");
        }
    }

    renderInto (parent: any) {
        return this.render().beforeMount().renderInto(parent);
    }
}

export default MetroComponent;
