import React, { useState } from "react";
import styled from "styled-components";


const Field = styled.div`
    > label{
        font-weight: bold;
        display:block;
    }
    > input{

    }
`

export default function ArticleForm({article, onSubmit}){


    const { id: articleId, ...articleFields} = article;
    const [changes, setChanges] = useState(articleFields)



    const handleChange = (evt) => {
        setChanges({
            ...changes,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = (newArticleValues) => {
        // evt.preventDefault()
        newArticleValues.preventDefault()
        onSubmit(changes)
    }

    const {title, body} = changes

    console.log('article fields', changes)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Field>
                    <label>Title</label>
                    <input name="title" value={title} onChange={handleChange} />
                </Field>
                <Field>
                    <label>Body</label>
                    <textarea name="body" onChange={handleChange}>{body}</textarea>
                </Field>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}

ArticleForm.defaultProps = {
    article: {}
}