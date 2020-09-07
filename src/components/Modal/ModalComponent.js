// @flow
import React from 'react';
import { Modal } from 'react-bootstrap';
import './modal.scss';

const ModalComponent = (props) => {
    return (
		<div>
			{props.open && (
				<Modal
					show={true}
					onHide={() => props.handleClose()}
					centered
					dialogClassName={props.className ? props.className : 'setting-modals'}
					keyboard
				>
					{props.header && <Modal.Header>{props.header}</Modal.Header>}
					<Modal.Body>{props.content}</Modal.Body>
					<Modal.Footer>{props.footer}</Modal.Footer>
				</Modal>
			)}
		</div>
	);
};

export default ModalComponent;
