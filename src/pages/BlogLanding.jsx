import React from "react";
import {Link, Outlet, useParams} from 'react-router-dom'
import BlogArticle from "./BlogArticle";

export const ARTICLES = [
    {id: 1, title: 'my first article'},
    {id: 2, title: 'my Second article'},
    {id: 3, title: 'my Third article'},
]
export default function BlogLanding(props){

    const { blogId } = useParams()
    console.log('BlogLanding', blogId)

    if(blogId){
        return <Outlet />
    }
    return(
        <>

            <p>Some Blog content</p>
            <ul>
                {ARTICLES.map((article) => <li key={`${article.id}`}><Link to={`/blog/${article.id}`}>{article.title}</Link></li>)}
            </ul>
        </>
    )
}