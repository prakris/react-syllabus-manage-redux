import React  from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ModalC = props =>
{
    console.log(props)
    return (
        <div>
            <Modal show={props.show}  onHide={props.handleHide}>
            <Modal.Header closeButton>
              <Modal.Title>Please Add/Edit Your Chapter</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input value={props.value} onChange={props.handleChapValue} placeholder='enter'>
              </input>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={props.handleHide} >cancle</Button>
              <Button variant='primary' onClick={props.handleChapSubmit} disabled= {props.value ===''}>Submit</Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}
   
