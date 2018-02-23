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
            <div className="resultgrid__resultitem__wrapper__title clearfix">
                <p>{item.name}</p>
            </div>
            <div className="resultgrid__resultitem__wrapper__genre clearfix">
                <p>{item.premiered}</p>
            </div>
        </div>
    )
}
