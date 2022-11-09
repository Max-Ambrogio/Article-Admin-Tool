import React from "react";

export default function SearchResults({articles}){
    //needs its own fetch results

    return(
        <div className="grid">
            {articles.map((article, index) => {

                const date = new Date(`${article.pub_date}`)
                date.toDateString();
                
                console.log('article', article)
                return(
                    <div key={`${index}`} className='grid_item'>  
                        <div className="article_copy">
                            <h1>{article.headline.main}</h1>
                            <p>{article.abstract}</p>
                            <p className="byline">{article.byline.original}</p>
                            <div className="tags">
                                <a href="">{article.section_name}</a>
                            </div>
                            {/* <p className="date">{article.pub_date}</p> */}
                            <p className="date">{date.toDateString()}</p>
                        </div>
                        <img className="grid-img" src={`http://www.nytimes.com/${article.multimedia[0].url}`} alt="article image" />
                    </div>
                )
            })}
        </div>
    )
}

SearchResults.defaultProps = {
    articles: []
}