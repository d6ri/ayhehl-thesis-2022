import React from 'react';

const IndexImg = props => {
	return (
		<div>
			<img
				src={props.src}
				alt={props.alt}
				style={{
					width: props.width,
					height: props.height,
				}}
			/>
		</div>
	);
};

export default IndexImg;
