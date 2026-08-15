import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useParams } from 'react-router-dom'
import PostCardComponent from '../components/PostCardComponent';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const fetchPostDetail = async (postId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        console.log(data);
        setPost(data);
    }

    useEffect(() => {
        fetchPostDetail(id);
    }, [id]);

    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <h2>Detalles del Post</h2>
            <p>Mostrando detalles del post con ID: {id}</p>
            <br />
            {post && <PostCardComponent post={post} />}
        </div>
    )
}

export default PostDetail