import React from 'react'
import {CardDeck, Card} from 'react-bootstrap'
import {Container, Row} from 'react-bootstrap'
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
    const handleShow = () => setShow(true);

    return (
        
        <div>
            <Container>
                <Row>
                    <h1 className={styles.main_title}>{options}</h1>
                </Row>
            <Row>
                <CardDeck>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <Button href="/academy" block>Not at all</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <Button href="/academy" block>A little</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <Button onClick={() => 
                                {message<3 ? 
                                setOptions(message + 1) : 
                                setShow(true)}} block>Somewhat</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                        <Button onClick={() => 
                            {message<3 ? 
                            setOptions(message + 1) : 
                            setShow(true)}} block>Very</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Congrats!</Modal.Title>
            </Modal.Header>
            <Modal.Body>You know your stuff! Try out our investing simulation to get a feel on actual investing.</Modal.Body>
            <Modal.Footer>
                <Button href='/academy' block>
                Start Investing
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ProfileSelection;