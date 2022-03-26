import axios from "axios";

const API_URL = "http://localhost:4000";

const createComment = async (data) => {
    try {
        const { _id, ...rest } = data
        const user = JSON.parse(localStorage.getItem("user"));
        const res = await axios.post(API_URL + `/comments/${data._id}`, rest, {
            headers: {
              authorization: user?.token
            },
          });
        return res.data
    } catch (error) {
        console.error(error)
    }
}

const userService = {
    createComment,
};

export default userService;