import MetroRenderer from './MetroRenderer';

class MetroViewRenderer extends MetroRenderer {
    render = () => {
        return this.componentInstance.renderComponent();
    }
}

export default MetroViewRenderer;
