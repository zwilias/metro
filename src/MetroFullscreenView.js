// @flow
import MetroViewMode from './MetroViewMode';

class MetroFullscreenView extends MetroViewMode {
    id: string;
    ClassName: string;

    static defaultProps = {
        id: 'randomId',
        ClassName: 'MetroFullscreenView'
    };

    constructor(props: Object) {
        super(props);
    }

    renderComponent = (renderCallback: Function) => {
        return new MAF.Class({
            id: this.props.id,
        	ClassName: this.props.ClassName,
        	Extends: MAF.system.FullscreenView,

        	// Create your view template
        	createView: function () {
                var view = this;
                renderCallback(view);
        	}
        });
    }
}

export default MetroFullscreenView;
