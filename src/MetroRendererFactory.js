//@flow
import MetroRenderer from './MetroRenderer';
import type MetroNode from './MetroNode';

declare type MetroElement = Class<MetroNode>;
declare type MetroChild = MetroRenderer | string;

const MetroRendererFactory = {
    create: (elementType: MetroElement, props: ?{[id:string]: any}, ...children: Array<MetroChild>): MetroRenderer => {
        props = props || elementType.defaultProps || {};
        children = children || [];
        return new MetroRenderer(elementType, props, children);
    }
}

export default MetroRendererFactory;
