import React from 'react';
import ArticleComponent from '../components/ArticleComponent';
import Articles from "../../../data/articles";

const ArticleContainer = () => {
    return (
        <div>
            <ArticleComponent
                title={Articles.asset.title}
                preface={Articles.asset.preface}
                content={Articles.asset.content}
            />
        </div>
    );
}

export default ArticleContainer;
