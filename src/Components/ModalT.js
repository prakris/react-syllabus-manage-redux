import React from 'react';
import { Modal, Button } from 'react-bootstrap';


export const ModalT = props =>
{
    console.log(props)
    return (
        <div>
            <Modal show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Please Add/Edit Your Topic</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input value={props.value} onChange={props.handleTopValue} placeholder='enter' />
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.handleHide} >Cancle</Button>
                <Button variant='primary' onClick={props.handleTopSubmit} disabled={props.value ===''}>Submit</Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}