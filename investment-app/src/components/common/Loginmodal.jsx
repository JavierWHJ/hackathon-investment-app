import React, {useState} from 'react'
import {Modal, Button, Tabs} from 'react-bootstrap'

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
                    Get Started
                </Modal.Header>
                    <Modal.Body>   
                        <div>
                            <div>
                                <form>
                                    <div class='form-group'>
                                        <div class='email'><input placeholder='Email Address' name='email' type='email' id='email' class='s2 form-control'></input></div>
                                    </div>
                                    <div class='form-group'>
                                        <div class='name'><input placeholder='Name' name='name' type='text' id='text' class='s2 form-control'></input></div>
                                    </div>
                                    <div class='text-center mb-3'>
                                        <Button class='btn btn-primary btn-block'>Sign Up</Button>
                                    </div>
                                    <div class='text-center mb-3'>
                                    <Button class='btn btn-primary btn-block'>Log In</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                
            </Modal>
        </div>
    )
}
export default Loginmodal;