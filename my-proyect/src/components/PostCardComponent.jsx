import React from 'react'
import { Link } from 'react-router-dom'

const PostCardComponent = (props) => {
    const { post } = props
    return (
        <article>
            <h3>
                <Link to={`/blog/${post.id}`}>
                    <strong>{post.title}</strong>
                </Link>
            </h3>
            <p>{post.body}</p>
        </article>
    )
}

export default PostCardComponent