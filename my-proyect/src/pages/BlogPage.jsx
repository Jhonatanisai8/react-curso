import React, { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent"
import PostCardComponent from "../components/PostCardComponent";

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
    console.log(
      data
    );
  }
  useEffect(() => {
    getPosts();
  }, [])

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCardComponent post={post} ></PostCardComponent>
      </li>)
  })

  return <div>
    <HeaderComponent></HeaderComponent>
    <p>Este es la pagina de blog</p>
    <h2>Blogs</h2>
    <ul>
      {postCards}
    </ul>
  </div>;
};


export default BlogPage;
