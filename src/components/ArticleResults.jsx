import React from "react";
import { Link } from "react-router-dom";



export default function ArticleResults({articles}){



    return(
        <div className="grid">
            {articles.map((article, index) => {

                const date = new Date(`${article.pub_date}`)
                date.toDateString();
                
                console.log('article', article)
                return(
                    <div key={`${index}`} className='grid_item'>  
                        <div className="article_copy">
                        {/* <Link to={`/blog/${article.id}`}>{article.title}</Link> */}
                            <Link className="link" to={`/search/${article.uri}`}>{article.headline.main}</Link>
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

ArticleResults.defaultProps = {
    articles: []
}