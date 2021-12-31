// Libraries
import React from 'react'
// Components and features
import Spinner from 'components/spinner/Spinner'

function PageLoadingFallback() {
	return (
		<div className="d-flex align-items-center justify-content-center w-100 h-100">
			<Spinner height='45' width='45' />
		</div>
	)
}

export default PageLoadingFallback
