import MetroComponent from './MetroComponent';

//@flow
class MetroElementCollection extends MetroComponent {
    renderInto = (container) => {
        this.props.children.forEach((child) => {
            child.beforeMount().renderInto(container);
        });
    }
}
export default MetroElementCollection;
