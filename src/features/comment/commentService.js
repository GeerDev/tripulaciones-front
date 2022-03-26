import axios from "axios";

const API_URL = "http://localhost:4000";

const createComment = async (data) => {
        const { _id, ...rest } = data
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await axios.post(API_URL + `/comments/${data._id}`, rest, {
            headers: {
              authorization: user?.token
            },
          });
        return res.data
}

const getComments = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.get(API_URL + '/comments/' + _id, {
        headers: {
          authorization: user?.token
        },
    })
    return res.data.comments.comments
}

const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + `/comments/like/${_id}`,{}, {
        headers: {
          authorization: user?.token
        },
      } );
    return res.data;
  };
  
  const dislike = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + `/comments/dislike/${_id}`,{}, {
        headers: {
          authorization: user?.token
        },
      } );
    return res.data;
  };

  const deleteComment = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + `/comments/${_id}`,{
      headers: {
        authorization: user?.token,
      },
    });
    return res.data;
  };

const userService = {
    createComment,
    like,
    dislike,
    deleteComment,
    getComments
};

export default userService;