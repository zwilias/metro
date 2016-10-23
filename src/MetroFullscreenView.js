import MetroViewMode from './MetroViewMode';
import uuid from './Util/uuid';

class MetroFullscreenView extends MetroViewMode {
    constructor(props) {
        super(props);
        this.$$id = uuid();
    }

    renderComponent = () => {
        const self = this;

        return new MAF.Class({
        	ClassName: self.$$id,
        	Extends: MAF.system.FullscreenView,

        	// Create your view template
        	createView: function () {
        		// Reference to the current view
        		const view = this;
                self.props.children.forEach((child) => {
                    child.beforeMount();
                    child.renderInto(view);
                })
        	},

        	// After create view and when returning to the view
        	// the update view is called
        	updateView: function () {
        		// Reference to the current view
        		const view = this;
        	}
        });
    }
}

export default MetroFullscreenView;
