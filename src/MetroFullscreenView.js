import MetroViewMode from './MetroViewMode';

class MetroFullscreenView extends MetroViewMode {
    constructor(props) {
        super(props);
    }

    renderComponent = (renderer) => {
        return new MAF.Class({
            id: 'something',
        	ClassName: 'MetroFullscreenView',
        	Extends: MAF.system.FullscreenView,

        	// Create your view template
        	createView: function () {
                var view = this;
                renderer.renderChildrenInto(view);
        	}
        });
    }
}

export default MetroFullscreenView;
