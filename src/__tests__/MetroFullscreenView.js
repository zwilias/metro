import MetroFullscreenView from '../MetroFullscreenView';
import Metro from '../Metro';
jest.disableAutomock();

describe('MetroFullscreenView', () => {
    describe('constructor', () => {
        it('should set props', () => {
            const props = {};
            const result = new MetroFullscreenView(props);

            expect(result.props).toBe(props);
        });
    });

    describe('e2e', () => {
        it('should return a MAF.Class', () => {
            const mafMock = (<MetroFullscreenView />).renderContainer();
            expect(mafMock.settings).toMatchSnapshot();
        });
    });
});
