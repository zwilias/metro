// @flow
import MetroComponent from './MetroComponent';

class MetroText extends MetroComponent {
    styles: {[id:string]: mixed};

    constructor (props: {styles: ?Object}) {
        super(props);
        this.styles = props.styles || {};
    }

    renderInto (parent: any) {
        return new MAF.element.Text({
            data: this.props.children.join(''),
            styles: this.styles
        }).appendTo(parent);
    }
}

export default MetroText;
