import React from 'react'
import Vars from 'assets/styles/1-settings/_settings.colors.scss'
import './Spinner.scss'

function Spinner({
	height = '100%',
	width = '100%',
	// color = 'var(--color-primary)',
	color = Vars.primary,
	strokeWidth = '7px',
	className = '',
}) {
	return (
		<svg
			viewBox="0 0 100 100"
			className={`${'trinity-loader'} ${className}`}
			height={height}
			width={width}
			stroke={color}
			strokeWidth={strokeWidth}
		>
			<circle cx="50" cy="50" r="45" />
		</svg>
	)
}

export default Spinner
