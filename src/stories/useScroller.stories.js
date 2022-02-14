import React from 'react';
import {useScroller} from '../useScroller';

export default {
	title: 'useScroller',
};

export const UseScrollerExample = () => {
	const scroller = useScroller({
		y: 200000,
		isSmooth: true,
	});
	return (
		<div
			style={{
				height: 300000,
				background: 'rgb(63,94,251)',
				background:
					'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
			}}>
			<button
				style={{
					cursor: 'pointer',
				}}
				onClick={scroller}>
				Scroll to 200000px
			</button>
		</div>
	);
};
