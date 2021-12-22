import React from 'react'
import './Spinner.css'

function Spinner({
	height = '100%',
	width = '100%',
	stroke = 'var(--color-primary)',
	strokeWidth = '7px',
}) {
	return (
		<svg
			viewBox="0 0 100 100"
			className="trinity-loader"
			height={height}
			width={width}
			stroke={stroke}
			strokeWidth={strokeWidth}
		>
			<circle cx="50" cy="50" r="45" />
		</svg>
	)
}

export default Spinner
