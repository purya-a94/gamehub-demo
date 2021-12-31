import React from 'react'
import Spinner from 'components/spinner/Spinner'

function AsyncDataContainer({ isPending, spinnerClassName, children }) {
	return (
		<>
			{isPending ? (
				<div
					className={`d-flex justify-content-center
								w-100 h-100 ${spinnerClassName ? spinnerClassName : ''}`}
				>
					<Spinner height='25' width='25' />
				</div>
			) : (
				children
			)}
		</>
	)
}

export default AsyncDataContainer
