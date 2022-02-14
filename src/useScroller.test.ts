import { useScroller } from './useScroller';

test('should scrollTo a position', () => {
	// Arrange
	const spy = jest.spyOn(window, 'scrollTo').mockImplementation();

	const scroller = useScroller({
		x: 20,
		y: 30,
	});
	if (!scroller) {
		throw 'Invalid window Object';
	}
	// Act
	scroller();

	// Assert
	expect(spy).toBeCalledWith({
		left: 20,
		top: 30,
		behavior: 'auto',
	});
	spy.mockRestore();
});
