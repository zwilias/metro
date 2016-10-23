declare class MAFElement {
    constructor(settings: {[id:string]: any}): this;
    appendTo(element: any): MAFElement;
}

declare var MAF: {
    element: {
        Text: typeof MAFElement
    }
};
