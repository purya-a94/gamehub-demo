import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function AsyncDataContainer({ isPending, spinnerClassName, children }) {
	return (
		<>
			{isPending ? (
				<div
					className={`d-flex justify-content-center
								w-100 h-100 ${spinnerClassName ? spinnerClassName : ''}`}
				>
					<Spinner animation="border" variant="primary" />
				</div>
			) : (
				children
			)}
		</>
	)
}

export default AsyncDataContainer
