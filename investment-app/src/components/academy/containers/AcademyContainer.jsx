import React from "react";
import StepperComponent from "../components/StepperComponent";
import StepperButtonComponent from "../components/StepperButtonComponent";

function getSteps() {
    return [
        "What are assets, stocks and bonds?",
        "What are indexes and funds?",
        "How do you read financial statements?",
        "How do you perform fundamental analysis?",
        "How do you build a portfolio?",
    ];
}

const AcademyContainer = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <StepperComponent
                activeStep={activeStep}
                steps={steps}
                handleReset={handleReset}
            />
            <div className="container">
                Finance is a broad term that describes activities associated
                with banking, leverage or debt, credit, capital markets, money,
                and investments. Basically, finance represents money management
                and the process of acquiring needed funds. Finance also
                encompasses the oversight, creation, and study of money,
                banking, credit, investments, assets, and liabilities that make
                up financial systems. The time value of money is one of the most
                fundamental theories in finance. It states that a dollar today
                is worth more than a dollar in the future. Many of the basic
                concepts in finance originate from micro and macroeconomic
                theories. One of the most fundamental theories is the time value
                of money, which essentially states that a dollar today is worth
                more than a dollar in the future. Since individuals, businesses,
                and government entities all need funding to operate, the finance
                field includes three main sub-categories: personal finance,
                corporate finance, and public (government) finance. Personal
                Finance Financial planning involves analyzing the current
                financial position of individuals to formulate strategies for
                future needs within financial constraints. Personal finance is
                specific to every individual's situation and activity;
                therefore, financial strategies depend largely on the person's
                earnings, living requirements, goals, and desires. For example,
                individuals must save for retirement, which requires saving or
                investing enough money during their working lives to fund their
                long-term plans. This type of financial management decision
                falls under personal finance. Personal finance includes the
                purchasing of financial products such as credit cards,
                insurance, mortgages, and various types of investments. Banking
                is also considered a component of personal finance including
                checking and savings accounts and online or mobile payment
                services like PayPal and Venmo.
                <div>
                    <StepperButtonComponent
                        activeStep={activeStep}
                        steps={steps}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                </div>
            </div>
        </>
    );
};

export default AcademyContainer;
