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
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form>
                            <div><input placeholder='Email Address' name='email' type='email' id='email'></input></div>
                            <div><input placeholder='Name' name='name' type='text' id='text'></input></div>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary">Login</Button>
                    </Modal.Footer>
                </Modal.Dialog> 
            </Modal>
        </div>
    )
}
export default Loginmodal;