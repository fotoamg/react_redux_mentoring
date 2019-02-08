import React from 'react';
import { Link } from 'react-router-dom';

export function GridItem({item, page}) {
    console.log("GridItem: " , item, page);

    return(
        <div className="griditem__wrapper">
            <div className="griditem__image">
                <Link to={`/${page}/${item.id}`}>
                    <img src={item.image.medium}
                        width="185" alt={item.name}>                  
                    </img>
                </Link>
            </div>
            <div className="griditem__headline clearfix">
                <div className="griditem__premiered">
                    <span>{(item.premiered) ? item.premiered.substr(0,4) : item.airdate.substr(0,4)}</span>
                </div>
                <div className="griditem__title">
                    <span>{item.name}</span>
                </div>
                
            </div>
            <div className="griditem__genre">
                    <span>{(item.genres && item.genres.length> 0) ? item.genres.toString() : ""}</span>
                    <span>{(item.season) ? "Season: " + item.season : ""}</span>
            </div>
        </div>
    )
}
