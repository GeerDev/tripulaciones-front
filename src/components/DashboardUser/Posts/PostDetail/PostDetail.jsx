import { Spin } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdPost, reset } from "../../../../features/post/postSlice";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.post);

  useEffect(async () => {
    await dispatch(getByIdPost(_id));
    await dispatch(reset())
  }, []);

  if (isLoading) {
    return <h1><Spin /></h1>;
  }

  return (
    <div>
      <p>{post.userId?.name}</p>
      <p>{post.description}</p>
    </div>
  );
};

export default PostDetail;