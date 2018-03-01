import React from 'react';
import { Link } from 'react-router-dom';

export function GridItem({item, page}) {
    console.log("GridItem: " , item, page);

    return(
        <div className="griditem__wrapper clearfix">
            <div className="griditem__image clearfix">
                <Link to={`/${page}/${item.id}`}>
                    <img src={item.image.medium}
                        width="185" alt={item.name}>                  
                    </img>
                </Link>
            </div>
            <div className="griditem__headline clearfix">
                <div className="griditem__premiered clearfix">
                    <span>{(item.premiered) ? item.premiered.substr(0,4) : item.airdate.substr(0,4)}</span>
                </div>
                <div className="griditem__title clearfix">
                    <span>{item.name}</span>
                </div>
                
            </div>
            <div className="griditem__genre clearfix">
                    <span>{(item.genres && item.genres.length> 0) ? item.genres.toString() : ""}</span>
                    <span>{(item.season) ? "Season: " + item.season : ""}</span>
            </div>
        </div>
    )
}
