import React, { useState } from "react";
import styles from "./QuizComponent.module.scss";
import { Button } from "react-bootstrap";

const QuizComponent = (props) => {
    const questions = [
        {
            questionText:
                "Which asset class tends to have higher risk, but also offer higher returns?",
            answerOptions: [
                { answerText: "Stocks", isCorrect: true },
                { answerText: "Bonds", isCorrect: false },
            ],
        },
        {
            questionText:
                "What are general stock market indexes such as the S&P 500 often used for?",
            answerOptions: [
                {
                    answerText: "Deciding on which specific stock to buy",
                    isCorrect: false,
                },
                {
                    answerText: "Deciding on which specific bond to buy",
                    isCorrect: false,
                },
                {
                    answerText:
                        "Measuring the general performance of stocks in a certain geography or category",
                    isCorrect: true,
                },
                {
                    answerText:
                        "Calculating the performance of your personal portfolio",
                    isCorrect: false,
                },
            ],
        },
        {
            questionText:
                "Which financial statement tells you about what the company owns or owes to others?",
            answerOptions: [
                { answerText: "Income Statement", isCorrect: false },
                { answerText: "Balance Sheet", isCorrect: true },
                { answerText: "Cash Flow Statement", isCorrect: false },
            ],
        },
        {
            questionText:
                "Which category of financial ratios would you need share price information to calculate?",
            answerOptions: [
                { answerText: "Liquidity", isCorrect: false },
                { answerText: "Leverage", isCorrect: false },
                { answerText: "Efficiency", isCorrect: false },
                { answerText: "Market Value", isCorrect: true },
                { answerText: "Profitability", isCorrect: false },
            ],
        },
        {
            questionText:
                "What is diversification often used for in a portfolio?",
            answerOptions: [
                {
                    answerText: "To maximize potential returns",
                    isCorrect: false,
                },
                {
                    answerText: "To reduce risk and volatility",
                    isCorrect: true,
                },
                {
                    answerText: "To make it easier to track portfolio holdings",
                    isCorrect: false,
                },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className={styles.app}>
            {showScore ? (
                <>
                    <div className={styles.score}>
                        You scored {score} out of {questions.length}
                        <Button className="mt-4" onClick={props.handleQuizEnd}>
                            End Quiz
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.question}>
                        <div className={styles.counter}>
                            <span>Question {currentQuestion + 1}</span>/
                            {questions.length}
                        </div>
                        <div className={styles.qtext}>
                            {questions[currentQuestion].questionText}
                        </div>
                    </div>
                    <div className={styles.answer}>
                        {questions[currentQuestion].answerOptions.map(
                            (answerOption) => (
                                <button
                                    onClick={() =>
                                        handleAnswerOptionClick(
                                            answerOption.isCorrect
                                        )
                                    }
                                    className={styles.button}
                                >
                                    {answerOption.answerText}
                                </button>
                            )
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizComponent;
