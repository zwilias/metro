class MAFElementMock {
    constructor (...args) {
        this.args = args;
        this.invocations = {
            appendTo: []
        };
    }

    appendTo = (args) => {
        this.invocations.appendTo.push({args: args});
        return this;
    }
}

class MAFClassMock {
    constructor (settings) {
        this.settings = settings;
    }

    renderView = () => {
        this.settings.createView();
    }
}

const MAF = {
    element: {
        Text: MAFElementMock
    },
    system: {
        FullscreenView: 'FullscreenView'
    },
    Class: MAFClassMock
};

window.MAF = MAF;
