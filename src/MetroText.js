// @flow
import MetroComponent from './MetroComponent';

class MetroText extends MetroComponent {
    data: string;
    styles: {[id:string]: mixed};

    constructor (props: {data: ?string, styles: ?Object}) {
        super(props);

        this.data = props.data || "";
        this.styles = props.styles || {};
    }

    renderInto (parent: any) {
        return new MAF.element.Text({
            data: this.data,
            styles: this.styles
        }).appendTo(parent);
    }
}

export default MetroText;
