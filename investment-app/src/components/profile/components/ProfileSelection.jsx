import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'
import {Container, Row, Col} from 'react-bootstrap'
import {Modal, Button} from 'react-bootstrap'
import styles from '../../../../styles/Home.module.scss'

function getOptions(questionList, message) {
    if (message<4)
        return questionList[message];
    else
        return message;
}

const ProfileSelection = () => {
    const questionList = ["How confident are you about investing in general?", "How proficient are you in assets such as stock, bonds or ETFs?", 
    "How proficient are you at reading financial statements?", "How proficient are you at analysing potential investments?"];
    const [message, setOptions] = React.useState(0);
    const options = getOptions(questionList, message);

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);

    const [knowledge, setKnowledge] = React.useState(false);

    return (
        <div>
            <Container >
                <Row>
                    <Col style={{display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                        <h1 className={styles.main_title} >{options}</h1></Col>
                </Row>
            <Row>
                <CardDeck>
                    <Card style={{ width: '15rem' , height:'15rem'}}>
                        <Card.Body style={{display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                            <img src='/forbidden.png'/> <br />
                            <Button onClick={() => setShow(true) } block>Not at all</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body style={{display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                            <img src='/emoji.png'/> <br />
                            <Button onClick={() => setShow(true)} block>A little</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body style={{display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                            <img src='/confusion.png'/> <br />
                            <Button onClick={() => 
                                {message<3 ? 
                                setOptions(message + 1) : 
                                (setShow(true), setKnowledge(true))}} block>Somewhat</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body style={{display: 'flex', alignItems: 'center',justifyContent: 'center', flexDirection:'column'}}>
                            <img src='/smile.png'/> <br />
                            <Button onClick={() => 
                            {message<3 ? 
                            setOptions(message + 1) : 
                            (setShow(true), setKnowledge(true))}} block>Very</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                {message<3
                ? <Modal.Title>No Worries!</Modal.Title>
                : knowledge == false 
                ? <Modal.Title>No Worries!</Modal.Title>
                : <Modal.Title>Congrats!</Modal.Title>}
            </Modal.Header>

            {message<3
                ? <Modal.Body>Learn more about investing in our Academy.</Modal.Body>
                : knowledge == false 
                ? <Modal.Body>Learn more about investing in our Academy.</Modal.Body>
                : <Modal.Body>You know your stuff! Try out our investing simulation to get a feel on actual investing.</Modal.Body>}
            
            <Modal.Footer>

                {/* TO CHANGE */}

                {message<3
                ? <Button href='/academy' block>Start Learning</Button>
                : knowledge == false 
                ? <Button href='/academy' block>Start Learning</Button>
                : <Button href='/portfolio' block>Start Investing</Button>
            }

            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProfileSelection;