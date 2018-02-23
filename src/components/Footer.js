import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return(
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <nav className="resultpanel clearfix">
                    <div className="footer">
                        <p>
                            <Link to="/">
                                netflixroulette
                            </Link>
                            </p>
                    </div>
                </nav>
            </div>
        </div>
    )
}
