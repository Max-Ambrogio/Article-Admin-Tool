import React from "react";
import { useParams } from "react-router-dom";
import ArticleForm from "../components/ArticleForm";
import { API_SERVER } from "../constants";
import { AdminPost } from "../pages/AdminPosts"
import { AdminList } from "../components/AdminList"

export default function EditArticle(){

    const { articleId } = useParams()

    console.log('editing article id: ', articleId)



    //fetch title and body from api GET rquest into component -> PATCH / PUT


    function getData(values){
    //    e.preventDefault();
        fetch(`${API_SERVER}/posts/${articleId}`,{
            method: "GET",
            body: JSON.stringify(values),
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('result', data)

        })
    }

    // getData()

    function saveEdit(values){
    //    e.preventDefault();
        fetch(`${API_SERVER}/posts/${articleId}`,{
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // console.log('result', data)

        })
    }

    // saveEdit();

    function saveArticle(values){
        fetch(`${API_SERVER}/posts`, {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(results => {
            // console.log(results)
        })
    }


    //Can update as well
    const handleSubmit = (newArticleValues) => {
        // evt.preventDefault()
      console.log(newArticleValues)
      saveArticle(newArticleValues)
    //   console.log()
    }

    // const handleEdit = (newArticleValues) => {
    //     console.log(newArticleValues)
    //     saveEdit(newArticleValues)
    // }

    return(
        <>
            <div>
                <h3>
                    Post: {articleId}
                </h3>
            </div>

            <ArticleForm article={getData} onSubmit={handleSubmit} />
        </>
    )
}