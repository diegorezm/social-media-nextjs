"use client";

import { useState, useEffect } from "react"
import PostInput from "../components/PostInput"
import { toast } from "react-hot-toast";
import { toastStyle, toastStyleError } from "@/style/toastStyle";
import PostCard from "../components/PostCard";
import axios from "axios";


export default function homePage() {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);


  const getUserId = async () => {
    const res = await axios.get('/api/users/me');
    setUserId(res.data.data._id);
  }

  const getPost = async () => {
    try {
      await axios.get('/api/posts/getPosts').then(response => {
        setPosts(response.data.data);
      })
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, toastStyleError);
    }
  };

  const displayPosts = () => {
    return posts.map((post, index) => (
      <PostCard
        content={post.post}
        author={post.author}
        author_pfp={post.author_pfp}
        key={index}
        boolean={post.author_id === userId ? true : false}
        onClick={e => deletePost(post.author_id, post._id)} />
    ))
  }


  const handlePost = async (e: any) => {
    try {
      e.preventDefault();
      const formElements = Array.from(e.target);
      let newPost;
      formElements.forEach((el) => {
        if (el.classList.contains("input")) {
          newPost = el.value;
          el.value = "";
        };
      });
      const request = await axios.post('/api/posts/handlePost', { post: newPost, userId });
      const savedPost = request.data.savePost;
      setPosts((post) => [...post, savedPost]);
      toast.success("Post created successfully!", toastStyle);
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, toastStyleError);
    }
  };

  const deletePost = async (authorId, postId) => {
    try {
      await axios.post('/api/posts/deletePost', {
        author: authorId,
        post: postId
      });

      const index = posts.findIndex((post) => post._id === postId);
      if (index !== -1) {
        setPosts((prev) => {
          const updatedPosts = [...prev];
          updatedPosts.splice(index, 1);
          return updatedPosts
        })
      }

      toast.success("Post deleted!", toastStyle)
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message, toastStyleError)
    }
  }

  useEffect(() => {
    getUserId();
    getPost();
  }, []);

  return (
    <div>
      <div>
        <PostInput onSubmit={(e) => handlePost(e)} />
      </div>

      <div>
        {displayPosts()}
      </div>
    </div>
  )
}
