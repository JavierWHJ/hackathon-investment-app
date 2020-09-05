import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const StepperComponent = (props) => {

    return (
        <div>
            <Stepper activeStep={props.activeStep} orientation="vertical">
                {props.steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <ul className="pl-4">
                                <li>
                                    <a href="" onClick={(e) => e.preventDefault()}>hello</a>
                                </li>
                                <li>
                                    <a href="" onClick={(e) => e.preventDefault()}>hello</a>
                                </li>
                                <li>
                                    <a href="" onClick={(e) => e.preventDefault()}>hello</a>
                                </li>
                            </ul>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {props.activeStep === props.steps.length && (
                <Paper square elevation={0}>
                    <Typography>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={props.handleReset}>Reset</Button>
                </Paper>
            )}
        </div>
    );
};

export default StepperComponent;
