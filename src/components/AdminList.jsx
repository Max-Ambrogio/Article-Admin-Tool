import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";


const AboveTableActions = styled.div`
    text-align: right;
    width: 90%;
    margin: 0 5%;

`

const ListTable = styled.table`
    width: 90%;
    
    margin: 0 5%;

    border-spacing: 0;

    thead th, tbody td{
        text-align: left;
        padding: 0.25rem;
        border-bottom: 1px solid #444;
    }

`;

const ItemRow = styled.tr`

    > td {
       
    }


`

const ItemAction = styled.div`
    > * {
        margin-right: 0.5rem;
    }
`

export default function AdminList({items, limit, offset, onUpdateList, onDeleteItem}){

    console.log('adminlist', items)


    const handleCLick = (evt) => {
        const{ target: {dataset}} = evt

        if(dataset.action === 'previous-page'){
            onUpdateList('offset', offset - 1);
        } else if (dataset.action === 'next-page'){
            onUpdateList('offset', offset + 1);
        }
    }

    return(
        <div className="admin-lists">
            <h2>items (page: {offset + 1})</h2>
            <AboveTableActions>
                <Link to="_new">Add Post</Link>
            </AboveTableActions>

            <ListTable>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Actions</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {items.map((item) => {
                            return(
                                <ItemRow key={`${item.id}`}>
                                    {/* <h1>{item.id}</h1> */}
                                    <td>{item.title}</td>
                                    <td>{item.isPublished ? 'Published' : 'Draft'}</td>
                                    <td>
                                        <ItemAction>
                                                <Link to={`/admin/posts/${item.id}`}> Edit </Link>
                                                <button type="button" onClick={() => onDeleteItem(item.id)}> Delete </button>
                                        </ItemAction>
                                    </td>
                                </ItemRow>
                            )
                        })}
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <div className="admin_pagination">
                            <button type="button" data-action="previous-page" onClick={handleCLick}>prev</button>
                            <button type="button" data-action="next-page" onClick={handleCLick}>next</button>
                        </div>
                    </tr>
                </tfoot>
            </ListTable>

        </div>
    )
}