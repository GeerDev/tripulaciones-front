import { Spin } from "antd";
import { useSelector } from "react-redux";

const PostUser = () => {
    const { posts, isLoading } = useSelector((state) => state.post);
    const allPosts = posts.posts || []

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
        <p>{post.description}</p>
      </div>
    );
  });
  return <div>{post}</div>;

};

export default PostUser;