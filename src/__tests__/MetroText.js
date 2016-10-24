import MetroText from '../MetroText';

describe('MetroText', () => {
    it('Should construct properly', () => {
        const props = {
            styles: {},
            children: []
        };

        const text = new MetroText(props);

        expect(text.styles).toBe(props.styles);
    });

    it('Should render into its parent with the correct data and styles', () => {
        const props = {
            children: ['testData'],
            styles: {}
        };

        const text = new MetroText(props);
        const parent = {};

        const result = text.renderInto(parent);

        expect(result.args[0]).toEqual({
            styles: {},
            data: 'testData'
        });

        expect(result.invocations.appendTo[0].args).toBe(parent);
    });
});
