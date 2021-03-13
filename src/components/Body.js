import React from 'react'
import {PostMainContainer,PostContainer,PostTitle,PostBody} from './Posts'


export default function Body({posts}) {
    return (
        <PostMainContainer>
            {
                posts!==undefined && posts.map((post,index)=>{
                    return(
                        <PostContainer key={index}>
                            <PostTitle>{post.title} </PostTitle>
                            <PostBody>{post.body} </PostBody>
                        </PostContainer>
                    )
                })
            }
        </PostMainContainer>
    )
}
