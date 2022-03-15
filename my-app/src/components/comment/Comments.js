import React, { useEffect } from 'react'
import { useState } from 'react'
import { getComments as getCommentsApi } from './commentapi'
import { Comment } from './Comment'

export const Comments = ( {currentUserId} ) => {
    const [ commentBackEnd, setCommentBackEnd ] = useState([])
    const baseComments = commentBackEnd.filter( commentBackEnd => commentBackEnd.parentId === null )
    console.log('backendComments', commentBackEnd)

    useEffect( () => {
        getCommentsApi().then( (data) => {
            setCommentBackEnd(data);
        } );
    }, [] );

  return (
    <div className='comments'>
        <h3 className='comments-title'>Comments</h3>
        <div className='comments-container'>
            { baseComments.map( baseComment=>(
                <Comment key={baseComment.id} comment={baseComment}/>
                    
                
            ) ) }
        </div>            
    </div>
  )
}
