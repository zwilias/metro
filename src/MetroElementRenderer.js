import MetroRenderer from './MetroRenderer';
import MetroComponent from './MetroComponent';

class MetroElementRenderer extends MetroRenderer {
    renderInto (container) {
        if (this.componentInstance instanceof MetroComponent) {
            container = this.componentInstance.renderInto(container);
        }

        this.children.forEach((child) => {
            child.beforeMount();
            child.renderInto(container);
        });
    }
}

export default MetroElementRenderer;
