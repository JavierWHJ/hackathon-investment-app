import React from 'react';
import ArticleComponent from '../components/ArticleComponent';
import Articles from "../../../data/articles";

const ArticleContainer = (props) => {

    const selectedArticle = (article) => {
        switch (article) {
            case "asset":
                return Articles.asset;
            case "stocks":
                return Articles.stocks;
            case "bonds":
                return Articles.bonds;
            case "indexes":
                return Articles.indexes;
            case "funds":
                return Articles.funds;
            case "income":
                return Articles.income;
            case "balance":
                return Articles.balance;
            case "cash":
                return Articles.cash;
            case "financial":
                return Articles.financial;
            case "relative":
                return Articles.relative;
            case "goal-setting":
                return Articles.goal;
            case "diversification":
                return Articles.diversification;
            default:
                return Articles.asset;
        }
    }

    const article = selectedArticle(props.article)

    return (
        <div>
            <ArticleComponent
                title={article.title}
                preface={article.preface}
                content={article.content}
                video={article.video}
            />
        </div>
    );
}

export default ArticleContainer;
