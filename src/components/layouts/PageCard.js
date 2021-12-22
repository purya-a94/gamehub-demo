import React from 'react'
import './PageCard.css'

function PageCard({ children }) {
	return (
		<div className="container-fluid PageCard">
			<div className="row h-100">
				<div className="col">{children}</div>
			</div>
		</div>
	)
}

export default PageCard
