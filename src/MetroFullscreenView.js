import MetroViewMode from './MetroViewMode';

class MetroFullscreenView extends MetroViewMode {
    constructor(props) {
        super(props);
    }

    renderComponent = (renderCallback) => {
        return new MAF.Class({
            id: 'something',
        	ClassName: 'MetroFullscreenView',
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
