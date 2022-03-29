import { Spin } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdPost, reset } from "../../../../features/post/postSlice";
import { AddComment } from "./AddComment/AddComment";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { like, dislike, deleteComment, getComments } from "../../../../features/comment/commentSlice";
import './PostDetail.scss'

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
    <div className="comments">
      <div className="posts">
      <p className="user-name-comment"> {post?.userId?.name} de {post?.userId?.company?.name}</p>
      <p className="comment-user">{post.description}</p>
      <img className = "postdetail-image" src={`http://localhost:4000/images/Post/` + post?.imagePost} alt="Imagen Post"/>
      <p>{post.challengeId?.title}</p>
      </div>
      <div className="map-coment">
      <h2 className="title-map-comments">Comentarios de la publicación</h2>
        {
          comments?.map(comment =>
            <div className="coments-content">
              <p className="name-coment">{user?.user.name}</p>
              <div className="toolbar-detail"></div>
              <p className="text-comment">{comment?.comment}</p>
              <div className="toolbar">
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
              </div>
          )
        }
      </div>
      <AddComment _id={_id} />
    </div>
  );
};

export default PostDetail;