import React, { useEffect, useState } from 'react';
import TopNewsData from '../../api/topNews.json';
import './TopNews.css';
import TopNewsDetail from './TopNewsData';
const TopNews = () => {
    const [topNews, setTopNews] = useState([]);
    useEffect(() => {
        setTopNews(TopNewsData)
    }, [topNews])
    // console.log(TopNewsData)
    return (
        <div>
            {
                TopNewsData.map(topNews => <TopNewsDetail  topNews={topNews} />)
            }
        </div>
    );
};

export default TopNews;