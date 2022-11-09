import React, {useState} from "react";

export default function ArticleSearchForm(props){
    const [query , setQuery] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.onSubmit(query)
    }

    //use state variables

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input className="search-form" type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
            <div className="date-search">
                <input type="date" name="start-date" id="start-date" />
                <p> - </p>
                <input type="date" name="end-date" id="end-date" />
            </div>
            <button className="submit" type="submit">Search</button>
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <div className="dropdown-content">
                    <a href="#">Newest</a>
                    <a href="#">Oldest</a>
                    <a href="#">Relevance</a>
                </div>
            </div>
        </form>
    )
}