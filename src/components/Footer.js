import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return(
        <div className="component-outer">
            <div className="component-wrapper">
                <div className="footer">
                    <p>
                        <Link to="/">
                            netflixroulette
                        </Link>
                        </p>
                </div>
            </div>
        </div>
    )
}
