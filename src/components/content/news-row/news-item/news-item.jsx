import React from 'react';
import './news-item.css';

const NewsItem = () =>{
    return(
        <div className="news-item">
            <h4 className="news-item__title">Заголовок</h4>
            <p className="news-item__text">Lorem ipsum</p>
        </div>
    )
}

export default NewsItem;