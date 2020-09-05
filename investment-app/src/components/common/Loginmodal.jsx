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
                        <div class='email'><input placeholder='Email Address' name='email' type='email' id='email' class='s2 form-control'></input></div>
                        <div class='name'><input placeholder='Name' name='name' type='text' id='text' class='s2 form-control'></input></div>
                        <Button variant="primary" class='btn btn-primary btn-block'>Login</Button>
                    </Modal.Body>
                        <p class='text-center'>Don't have an account? Sign up</p>
                </form>
            </Modal>
        </div>
    )
}
export default Loginmodal;