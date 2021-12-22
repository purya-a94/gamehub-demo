// Libraries
import React from 'react'
// Components and features
import Spinner from 'react-bootstrap/Spinner'

function PageLoadingFallback() {
	return (
		<div className="d-flex align-items-center justify-content-center w-100 h-100">
			<Spinner animation="border" variant="primary" />
		</div>
	)
}

export default PageLoadingFallback
