declare class MAFElement {
    constructor(settings: {[id:string]: any}): this;
    appendTo(element: any): MAFElement;
}

declare class MAFClass {}

declare var MAF: {
    element: {
        Text: typeof MAFElement
    },
    system: {
        FullscreenView: typeof MAFClass
    },
    Class: typeof MAFClass
};
