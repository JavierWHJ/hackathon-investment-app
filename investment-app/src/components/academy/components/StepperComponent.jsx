import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

const StepperComponent = (props) => {

    return (
        <div>
            <Stepper activeStep={props.activeStep} orientation="vertical">
                {props.steps.map((steps, index) => (
                    <Step key={steps.step}>
                        <StepLabel>{steps.step}</StepLabel>
                        <StepContent>
                            <ul className="pl-4">
                                {steps.substeps.map((sub) => {
                                    return (
                                        <li>
                                            <a href="" onClick={(e) => e.preventDefault()}>
                                                {sub}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};

export default StepperComponent;
