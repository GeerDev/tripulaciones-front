import { Spin } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdPost, reset } from "../../../../features/post/postSlice";
import { AddComment } from "./AddComment/AddComment";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { like, dislike, deleteComment, getComments } from "../../../../features/comment/commentSlice";

const PostDetail = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);
  const { comments } = useSelector((state) => state.comment);

  useEffect(async () => {
    await dispatch(getByIdPost(_id));
    await dispatch(getComments(_id))
    await dispatch(reset())
  }, []);

  if (isLoading) {
    return <h1><Spin /></h1>;
  }

  const deleteNow = async (comment_id) => {
    await dispatch(deleteComment(comment_id));
  };

  return (
    <div>
      <p>{post.userId?.name}</p>
      <p>{post.description}</p>
      <h2>Comentarios</h2>
      <hr />
      <div>
      {
      comments?.map(comment => 
      <div>
      <span><p>{user?.user.name}</p></span>
      <p>{comment?.comment}</p>
                <div className="likes">
                {comment?.likes.includes(user?.user._id) ? (
                  <HeartFilled
                    style={{ fontSize: "20px", color: "#FF0000" }}
                    onClick={
                      comment?.likes.includes(user?.user._id)
                        ? () => dispatch(dislike(comment._id))
                        : () => dispatch(like(comment._id))
                    }
                  />
                ) : (
                  <HeartOutlined
                    style={{ fontSize: "20px" }}
                    onClick={
                      comment?.likes.includes(user?.user._id)
                        ? () => dispatch(dislike(comment._id))
                        : () => dispatch(like(comment._id))
                    }
                  />
                )}
                </div>
      <button onClick={() => deleteNow(comment._id)}>Borra</button>
      </div>
      )
      }
      </div>
      <AddComment _id = {_id} />
    </div>
  );
};

export default PostDetail;