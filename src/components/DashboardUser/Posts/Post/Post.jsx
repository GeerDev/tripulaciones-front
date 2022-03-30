import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, disLike, getByIdPost, like, reset } from "../../../../features/post/postSlice";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";
import EditModal from "./EditModal/EditModal";
import { useState } from "react";
import './Post.scss'


const PostUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { posts, isLoading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);
  const allPosts = posts || [];
  const dispatch = useDispatch();

  const author = user?.user?.postIds

  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }

  const showModal = (_id) => {
    dispatch(getByIdPost(_id));
    setIsModalVisible(true);
    dispatch(reset())
  };

  const deleteHere = async (_id) => {
    await dispatch(deletePost(_id));
  };

  const post = allPosts.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user?._id);
    const isLiked = post.likes?.length;
    return (
      <div className="post card animate__animated animate__fadeInleft">
        <div className="post-author">
          <Link to={"/user/post/" + post._id}>
            {post.userId?.name && (<span><strong>{post.userId?.name}</strong><p>de {post.userId.company?.name}</p></span>)}
          </Link>
        </div>
        <div className="post-content">
          {post.imagePost ? (        
            <>
            <p>{post.description}</p>
          <img
              src={`http://localhost:4000/images/Post/` + post.imagePost}
              alt="Imagen Post"
              width={320}
          />
          <p>{post.challengeId?.title}</p>
           </>
           ) : (  
             <>
         <p>{post.description}</p>
         <p>{post.challengeId?.title}</p>
           </>)
           
          }

        </div>
        <div className="toolbar">
        <span className="interactions">
          {isLiked > 0 ? (
            <span >
              <span>Likes: {post.likes?.length} </span>
              {isAlreadyLiked ? (
                <>
                  <span>
                    <LikeFilled
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(disLike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <LikeOutlined
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(disLike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              )}
            </span>
          ) : (
            <>
              {isAlreadyLiked ? (
                <>
                  <span>
                    <LikeFilled
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(disLike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              ) : (
                <>
                  <span>
                    <LikeOutlined
                      onClick={
                        isAlreadyLiked
                          ? () => dispatch(disLike(post._id))
                          : () => dispatch(like(post._id))
                      }
                    />
                  </span>
                </>
              )}
            </>
          )}
          <span className="comment-length">{post.comments.length} comentarios</span>
        </span>
        {
          author.includes(post._id) ?
          <>
                  <button onClick={() => showModal(post._id)}>Edita</button>
                  <button onClick={() => deleteHere(post._id)}>Eliminar</button>
          </> :
          null
        }
      </div>
        </div>
    );
  });
  return <div>
          {post}
          <EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
        </div>;

};

export default PostUser;