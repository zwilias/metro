const MAF = {};

(function (MAF) {
    class MAFElementMock {
        constructor (...args) {
            this.args = args;
            this.invocations = {
                appendTo: []
            };
        }

        appendTo = (args) => {
            this.invocations.appendTo.push({args: args});
        }
    }

    MAF.element = {
        Text: MAFElementMock
    };
})(MAF);

export default MAF;
