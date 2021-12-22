import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './Dialog.css'

function Dialog({
	children,
	isOpen,
	closeHandler,
	hasHeader,
	title,
	preventClosingByClicks,
}) {
	return (
		<Modal
			show={isOpen}
			onHide={closeHandler}
			backdrop={preventClosingByClicks ? 'static' : true}
			scrollable
			dialogClassName="Dialog"
			contentClassName="Dialog__container"
		>
			{hasHeader && (
				<Modal.Header closeButton>
					<Modal.Title as="h1" className="Dialog__title">
						{title}
					</Modal.Title>
				</Modal.Header>
			)}

			<Modal.Body className="Dialog__body">{children}</Modal.Body>
		</Modal>
	)
}

Dialog.defaultProps = {
	hasHeader: true,
	preventClosingByClicks: true,
}

export default Dialog
