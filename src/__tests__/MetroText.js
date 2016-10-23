import MetroText from '../MetroText';

describe('MetroText', () => {
    it('Should construct properly', () => {
        const props = {
            data: 'testData',
            styles: {}
        };

        const text = new MetroText(props);

        expect(text.data).toBe(props.data);
        expect(text.styles).toBe(props.styles);
    });

    it('Should render into its parent with the correct data and styles', () => {
        const props = {
            data: 'testData',
            styles: {}
        };

        const text = new MetroText(props);
        const parent = {};

        const result = text.renderInto(parent);

        console.log(result);
    });
});
