import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
    return(
        <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">
                                        netflixroulette
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
