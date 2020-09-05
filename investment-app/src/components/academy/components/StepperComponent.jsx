import React from 'react';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

function getSteps() {
    return [
        "What are assets, stocks and bonds?",
        "What are indexes and funds?",
        "How do you read financial statements?",
        "How do you perform fundamental analysis?",
        "How do you build a portfolio?",
    ];
}

const StepperComponent = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return (
        <>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepButton onClick={handleStep(index)}>
                            {label}
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </>
    );
}

export default StepperComponent;
