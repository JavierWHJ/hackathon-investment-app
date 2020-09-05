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
            />
        </div>
    );
}

export default ArticleContainer;
