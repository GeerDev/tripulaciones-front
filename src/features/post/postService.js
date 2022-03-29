import axios from "axios";

const API_URL = 'http://localhost:4000';

const createPost = async (post) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.post(API_URL + '/posts', post, {
        headers: {
            authorization: user?.token
        }
    })
    return res.data 
}

const getAllPost = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios(API_URL + "/posts", {
        headers: {
          authorization: user?.token
        },
      });
    return res.data.posts
}

const getByIdPost = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(API_URL + '/posts/id/' + _id, {
        headers: {
          authorization: user?.token
        },
    })
    return res.data
}

const updatePost = async (post) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/" + post._id , post ,{
        headers: {
            authorization: user?.token,
        }
    })
    return res.data;
}

const deletePost = async (_id) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.delete(API_URL + '/posts/' + _id, {
        headers: {
            authorization: user?.token
        }
    })
    return res.data
}

const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/like/" + _id, {}, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
};

const disLike = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/disLike/" + _id, {}, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
};

const getByDescriptionPost = async (postDescription) => {
    const res = await axios.get(API_URL + "/posts/description/" + postDescription);
    return res.data;
  };

const postUserService = {
    createPost,
    getByIdPost,
    getAllPost,
    getByDescriptionPost,
    updatePost,
    deletePost,
    like,
    disLike,
}

export default postUserService;