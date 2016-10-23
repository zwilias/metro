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
    })
});
