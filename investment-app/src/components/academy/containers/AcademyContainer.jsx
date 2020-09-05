import React from "react";
import StepperComponent from "../components/StepperComponent";
import StepperButtonComponent from "../components/StepperButtonComponent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Modal } from "react-bootstrap";
import ArticleContainer from "./ArticleContainer";


function getSteps() {
    return [
        {
            step: "What are assets, stocks and bonds?",
            substeps: ["Asset Classes", "Stocks", "Bonds"],
        },
        {
            step: "What are indexes and funds?",
            substeps: ["Indexes", "Funds"],
        },
        {
            step: "How do you read financial statements?",
            substeps: ["Income Statement", "Balance Sheet", "Cash Flow"],
        },
        {
            step: "How do you perform fundamental analysis?",
            substeps: ["Financial Ratios", "Relative Valuation "],
        },
        {
            step: "How do you build a portfolio?",
            substeps: ["Goal-setting", "Diversification"],
        },
    ];
}

const AcademyContainer = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [article, setArticle] = React.useState("");

    const steps = getSteps();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setShow(false);
    };

    const handleStep = (article) => {
        setArticle(article)
    }

    return (
        <>
            <StepperComponent
                activeStep={activeStep}
                steps={steps}
                handleStep={handleStep}
            />
            <div className="container">
                <ArticleContainer article={article}/>
                <div className="mt-4">
                    <StepperButtonComponent
                        activeStep={activeStep}
                        steps={steps}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleShow={handleShow}
                    />
                </div>
                <Modal show={show} onHide={handleClose} centered>
                    {activeStep === steps.length - 1 && (
                        <Modal.Body>
                            <Paper square elevation={0}>
                                <Typography>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Button onClick={handleReset}>End Academy</Button>
                            </Paper>
                        </Modal.Body>
                    )}
                </Modal>
            </div>
        </>
    );
};

export default AcademyContainer;
