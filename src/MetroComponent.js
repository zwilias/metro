// @flow
import MetroNode from './MetroNode';

class MetroComponent extends MetroNode {
    constructor(props: Object) {
        super(props);

        if (this.constructor === MetroComponent) {
            throw new TypeError("Cannot construct MetroComponent");
        }
    }
    renderInto (parent: any) {
        throw new TypeError("Musn't call renderInto on MetroComponent");
    }
}

export default MetroComponent;
