import React from 'react'

function ErrorFallback({ error, resetErrorBoundary, customText }) {
	return (
		<div
			className="d-flex flex-column align-items-center
						justify-content-center w-100 h-100 fs-5"
		>
			<p className="mb-3">{customText}</p>

			<button
				onClick={resetErrorBoundary}
				className="btn c-btn-primary px-4"
			>
				Try again
			</button>
		</div>
	)
}

ErrorFallback.defaultProps = {
	customText: 'App has run into some issues!',
}

export default ErrorFallback
