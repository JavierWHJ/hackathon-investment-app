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
                    <ul class="nav nav-tabs" id="tabContent">
                        <li class="active"><a href="#login" data-toggle="tab">Login</a></li>
                        <li><a href="#signup" data-toggle="tab">Sign Up</a></li>
                    </ul>
                </Modal.Header>
                    
                    <Modal.Body>   
                        <div class='tab-content'>
                            <div class="tab-pane active" id="login">
                                <form>
                                    <div class='form-group'>
                                        <div class='email'><input placeholder='Email Address' name='email' type='email' id='email' class='s2 form-control'></input></div>
                                    </div>
                                    <div class='form-group'>
                                        <div class='name'><input placeholder='Name' name='name' type='text' id='text' class='s2 form-control'></input></div>
                                    </div>
                                    <div class='text-center mb-3'>
                                        <Button class='btn btn-primary btn-block'>Login</Button>
                                    </div>
                                </form>
                            </div>
                              
                            <div class="tab-pane" id="signup">
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
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                
            </Modal>
        </div>
    )
}
export default Loginmodal;