import { Spin } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostUser = () => {
    const { posts, isLoading } = useSelector((state) => state.post);
    const allPosts = posts || []

    if (isLoading) {
      return (
        <h1>
          <Spin />
        </h1>
      );
    }
  const post = allPosts.map((post) => {
    return (
      <div>
        <Link to={"/user/post/" + post._id}>
        <p>{post.description}</p>
        </Link>
      </div>
    );
  });
  return <div>{post}</div>;

};

export default PostUser;