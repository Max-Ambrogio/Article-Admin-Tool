import React from "react";
import { Link } from 'react-router-dom'

function Header(props){
    return(
        <header className="header">
                <a href="/"><img src="/logoMAIN.png" alt="" /></a>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>                
                    <li><Link to="/contact">Contact</Link></li>     
                    <li><Link to="/admin/posts">Admin</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/search">Search</Link></li>
                </ul>
            </nav>
            <h1>New York Times Article Searcher</h1>
        </header>
    )
}

export default Header