import React, {useState} from 'react'
import {Modal, Button, Tabs} from 'react-bootstrap'
import axios from 'axios';

const Loginmodal = () => {
    const [show, setShow] = useState(false);
    const [login, setStatus] = useState(false);
    const [namefield, setName] = useState("");
    const [emailfield, setEmail] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const postSignup = async () => {
        await axios({
            method: 'post',
            url: 'http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/user', 
            headers: {},
            data: { 
                email:{emailfield},
                name:{namefield},
            }
        }).then(res => console.log(res)).then(window.location.href = "http://localhost:3000/profile");
    }

    const getLogin = async () => {
            await axios.get('http://flask-env.eba-za7sxm6n.ap-southeast-1.elasticbeanstalk.com/user/' + emailfield)
            .then(res => console.log(res)).then(handleClose)
    };

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
                                        <div class='email'><input placeholder='Email Address' name='email' type='email' id='email' class='s2 form-control' onChange={e =>setEmail(e.target.value)}></input></div>
                                    </div>
                                    <div class='form-group'>
                                        <div class='name'><input placeholder='Name' name='name' type='text' id='text' class='s2 form-control' onChange={e =>setName(e.target.value)}></input></div>
                                    </div>
                                    <div class='text-center mb-3'>
                                        <Button class='btn btn-primary btn-block'  onClick={postSignup}>Sign Up</Button>
                                    </div>
                                    <div class='text-center mb-3'>
                                    <Button class='btn btn-primary btn-block' onClick={getLogin} >Log In</Button>
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