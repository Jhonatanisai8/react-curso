import React from 'react'

const PostCardComponent = (props) => {
    const { post } = props
    return (
        <article>
            <h3><strong>{post.title}</strong></h3>
            <p>{post.body}</p>
        </article>
    )
}

export default PostCardComponent