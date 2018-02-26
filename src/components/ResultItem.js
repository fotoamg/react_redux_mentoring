import React from 'react';
import { Link } from 'react-router-dom';

export function ResultItem({item}) {
    console.log("ResultItem: " , item);
    return(
        <div className="resultgrid__resultitem__wrapper clearfix">
            <div className="resultgrid__resultitem__wrapper__image clearfix">
                <Link to={`/result/${item.id}`}>
                    <img src={item.image.medium}
                        width="185" alt={item.name}>                  
                    </img>
                </Link>
            </div>
            <div className="resultgrid__resultitem__wrapper__headline clearfix">
                <div className="resultgrid__resultitem__wrapper__title clearfix">
                    <span>{item.name}</span>
                </div>
                <div className="resultgrid__resultitem__wrapper__premiered clearfix">
                    <span>{(item.premiered) ? item.premiered.substr(0,4) : ""}</span>
                </div>
            </div>
            <div className="resultgrid__resultitem__wrapper__genre clearfix">
                    <span>{(item.genres && item.genres.length> 0) ? item.genres.toString() : ""}</span>
            </div>
        </div>
    )
}
