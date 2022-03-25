import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../../../../features/post/postSlice";

const PostUser = () => {
    const { posts, isLoading } = useSelector((state) => state.post);
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
    return (
      <div>
        <Link to={"/user/post/" + post._id}>
        <p>{post.description}</p>
        </Link>
        <button onClick={() => deleteHere(post._id)}>Eliminar</button>
      </div>
    );
  });
  return <div>{post}</div>;

};

export default PostUser;