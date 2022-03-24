import axios from "axios";

const API_URL = 'http://localhost:4000';

const createPost = async (post) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.post(API_URL + '/posts', post, {
        headers: {
            authorization: user?.token
        }
    })
    if (res.data) {
        getAll()
    }
    return res.data
}

const getAllPost = async () => {
    const res = await axios.get(API_URL + "/posts");
    return res.data
}

const getByIdPost = async (_id) => {
    const res = await axios.get(API_URL + '/posts/_id/' + _id)
    return res.data
}

const updatePost = async (formData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/" + formData._id, formData,{
        headers: {
            authorization: user?.token,
        }
    })
    if (res.data) {
        getById()
    }
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

const postUserService = {
    createPost,
    getByIdPost,
    getAllPost,
    updatePost,
    deletePost,
    like,
    disLike
}

export default postUserService;