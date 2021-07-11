import React from 'react';
import NewsItem from './news-item/news-item';
import './news-row.css';

const NewsRow = () =>{
    return(
        <div className="news-column">
            <NewsItem />
        </div>
    )
}

export default NewsRow;