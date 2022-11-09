import React from "react";
import { useParams } from "react-router-dom";
import { ARTICLES } from "./BlogLanding";

export default function BlogArticle(props){

    let { blogId } = useParams()
    console.log('BLogArticle', blogId)

    if(!blogId){
        return(
            <p>Please Slelect an article.</p>
        )
    }

    blogId = parseInt(blogId)

    const article = ARTICLES.find((a) => a.id === blogId) //exact one that matches

    return(
        <div>
            <h1>{article.title}</h1>
            <p>Some Blog Post with content for article #{article.id}</p>
        </div>
    )
}