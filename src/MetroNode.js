// @flow

class MetroNode {
    props: Object;
    context: Object;

    constructor (props: ?Object, context: ?Object) {
        this.props = props || {};
        this.context = context || {};
    }
}

export default MetroNode;
