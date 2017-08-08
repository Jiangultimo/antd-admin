import React from 'react';
import {connect} from 'dva';
import Slider from '../components/Navigation';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import articleStyle from '../style/article.css';
// import slider from ''

const Article = () => {
    return (
        <div>
            <Header username="guest"/>
            <div className={articleStyle.article__container}>
                <Slider />
                <ArticleList />
            </div>
        </div>
    );
}

export default Article;
