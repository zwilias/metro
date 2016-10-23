import MetroFullscreenView from '../MetroFullscreenView';
jest.disableAutomock();

describe('MetroFullscreenView', () => {
    describe('constructor', () => {
        it('should set props', () => {
            const props = {};
            const result = new MetroFullscreenView(props);

            expect(result.props).toBe(props);
        });
    });

    describe('renderComponent', () => {
        it('should return a MAF.Class', () => {
            
        });
    });
});
