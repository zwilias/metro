// @flow
import type MetroRenderer from './MetroRenderer';

class MetroNode {
    props: Object;
    render: () => MetroRenderer
    renderComponent: () => MAF.Class

    constructor (props: ?Object) {
        this.props = props || {};

        if (this.constructor === MetroNode) {
            throw new TypeError("Cannot construct MetroNode directly");
        }
    }
}

export default MetroNode;
