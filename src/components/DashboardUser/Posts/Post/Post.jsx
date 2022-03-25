import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, disLike, like } from "../../../../features/post/postSlice";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";


const PostUser = () => {
    const { posts, isLoading } = useSelector((state) => state.post);
    const { user } = useSelector((state) => state.user);
    const allPosts = posts || [];
    const dispatch = useDispatch();

    if (isLoading) {
      return (
        <h1>
          <Spin />
        </h1>
      );
    }
    
    const deleteHere = async (_id) => {
      await dispatch(deletePost(_id));
    };

  const post = allPosts.map((post) => {
    const isAlreadyLiked = post.likes?.includes(user?.user?._id);
    const isLiked = post.likes?.length;

    return (
      <div>
        <Link to={"/user/post/" + post._id}>
        <p>{post.description}</p>
        </Link>
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
          <span>{post.comments.length} comentarios</span>
          </span>
        <button onClick={() => deleteHere(post._id)}>Eliminar</button>
      </div>
    );
  });
  return <div>{post}</div>;

};

export default PostUser;