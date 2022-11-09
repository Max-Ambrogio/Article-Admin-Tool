import React, { useEffect, useState} from "react";
import AdminList from "../components/AdminList";
import { API_SERVER } from "../constants";
import { useSearchParams } from "react-router-dom";
export default function AdminPost(props){

    const [posts, setPosts] = useState([])
    const [rawParams, setRawParams] = useState({
        limit: 10,
        offset: 0,
    })


    const [searchParams, setSearchParams] = useSearchParams();

    
    function fetchPosts(){
        const {limit, offset} = rawParams;

        fetch(`${API_SERVER}/posts?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            console.log('data', data)
            
            setPosts(data)
        })
    }
    

    useEffect(() => { 
        fetchPosts();
    }, [rawParams])

    const handleUpdateList = (key, value) => {
        let newSearchParams = {
            ...rawParams, 
            [key]: value
        }
        setRawParams(newSearchParams)
        setSearchParams(newSearchParams)
    }


    const handleDeleteItem = (itemId) => {
            console.log(itemId)

            fetch(`${API_SERVER}/posts/${itemId}`,
            {
                method: 'delete',
            })
            .then(response => response.json())
            .then(data => {
                console.log('result', data)

                fetchPosts();
    
                // setPosts(data)
            })
    }

    return(
        <AdminList items={posts} {...rawParams} 
                onUpdateList={handleUpdateList} 
                onDeleteItem={handleDeleteItem} />
    )
}