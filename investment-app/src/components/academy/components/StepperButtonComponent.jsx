import React from 'react';
import Button from "@material-ui/core/Button";

const StepperButtonComponent = (props) => {
    return (
        <div className="ml-4">
            <Button
                disabled={props.activeStep === 0}
                onClick={props.handleBack}
            >
                Back
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={
                    props.activeStep === props.steps.length - 1
                        ? props.handleShow
                        : props.handleNext
                }
                disabled={props.activeStep === props.steps.length}
            >
                {props.activeStep === props.steps.length - 1
                    ? "Start Quiz"
                    : "Next"}
            </Button>
        </div>
    );
}

export default StepperButtonComponent;
