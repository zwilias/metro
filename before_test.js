
(function (globals) {
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

    const MAF = {
        element: {
            Text: MAFElementMock
        }
    };

    globals.MAF = MAF;
})(window);
