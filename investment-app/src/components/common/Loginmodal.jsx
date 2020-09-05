import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'

const Loginmodal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Are y'all ready kids?
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                    
                <form>
                    <Modal.Body>   
                        <div><input placeholder='Email Address' name='email' type='email' id='email'></input></div>
                        <div><input placeholder='Name' name='name' type='text' id='text'></input></div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary">Login</Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}
export default Loginmodal;