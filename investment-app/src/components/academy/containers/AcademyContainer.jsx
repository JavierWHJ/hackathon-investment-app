import React from "react";
import StepperComponent from "../components/StepperComponent";
import StepperButtonComponent from "../components/StepperButtonComponent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Modal, Button } from "react-bootstrap";
import ArticleContainer from "./ArticleContainer";
import { useRouter } from "next/router";
import QuizComponent from "../components/QuizComponent";

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
    const router = useRouter();

    const [activeStep, setActiveStep] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [showEnd, setShowEnd] = React.useState(false);
    const [article, setArticle] = React.useState("");

    const steps = getSteps();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNext = () => {
        window.scrollTo(0, 0)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        window.scrollTo(0, 0)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setShow(false);
        router.push("/portfolio");
    };

    const handleStep = (article) => {
        setArticle(article);
    };

    const handleQuizEnd = () => {
        setShowEnd(true);
    }

    return (
        <>  
            <div>
                <StepperComponent
                    activeStep={activeStep}
                    steps={steps}
                    handleStep={handleStep}
                />
                <StepperButtonComponent
                    activeStep={activeStep}
                    steps={steps}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    handleShow={handleShow}
                />
            </div>
            <div className="container mb-5">
                <ArticleContainer article={article} />
                <Modal show={show} onHide={handleClose} centered>
                    {activeStep === steps.length - 1 && (
                        <Modal.Body className="p-5">
                            <div className={showEnd ? "d-none" : "d-block"}>
                                <QuizComponent handleQuizEnd={handleQuizEnd} />
                            </div>
                            <div className={showEnd ? "d-block" : "d-none"}>
                                <Paper square elevation={0}>
                                    <Typography>
                                        Congratulations on completing P.E.A.R
                                        Academy! Practice what you learn in our
                                        Virtual Portfolio!
                                    </Typography>
                                    <Button
                                        className="mt-5"
                                        onClick={handleReset}
                                    >
                                        End Academy
                                    </Button>
                                </Paper>
                            </div>
                        </Modal.Body>
                    )}
                </Modal>
            </div>
        </>
    );
};

export default AcademyContainer;
