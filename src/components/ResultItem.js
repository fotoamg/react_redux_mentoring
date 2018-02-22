import React from 'react';
import { Link } from 'react-router-dom';

export function ResultItem({item}) {
    return(
        <div className="resultgrid__resultitem__wrapper clearfix">
            <div className="resultgrid__resultitem__wrapper__image clearfix">
                <Link to={`/result/${item.id}`}>
                    <img src={"http://image.tmdb.org/t/p/w185/" + item.poster_path}
                        width="185" alt={item.title}>                  
                    </img>
                </Link>
            </div>
            <div className="resultgrid__resultitem__wrapper__title clearfix">
                <p>{item.title}</p>
            </div>
            <div className="resultgrid__resultitem__wrapper__genre clearfix">
                <p>{item.release_date}</p>
            </div>
        </div>
    )
}
