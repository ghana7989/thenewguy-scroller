export interface IuseScroller {
	x: number;
	y: number;
	isSmooth?: boolean;
}
export function useScroller({ x, y, isSmooth = false }: IuseScroller) {
	if (!window) {
		return;
	}
	// eslint-disable-next-line consistent-return
	return function scroller() {
		window.scrollTo({
			top: y,
			left: x,
			behavior: isSmooth ? 'smooth' : 'auto',
		});
	};
}
