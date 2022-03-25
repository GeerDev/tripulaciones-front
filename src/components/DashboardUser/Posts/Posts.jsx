import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPost } from "../../../features/post/postSlice";
import AddPost from "./AddPost/AddPost";
import PostUser from "./Post/Post";

const PostsUser = () => {
    const dispatch = useDispatch();
    useEffect(async () => {
      await dispatch(getAllPost());
    }, []);
  
    return (
        <div>
            <h1>Posts</h1>
            <AddPost/>
            {/* <PostUser/> */}
        </div>
      )
    
}

export default PostsUser;