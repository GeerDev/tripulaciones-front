import axios from "axios";

const API_URL = "http://localhost/4000"

const registerUser = async (userData) => {
    try {
        const res = await axios.post(API_URL + "/users", userData);
        return res.data
    } catch (error) {
        console.error(error)
    }
}

const userService = {
    registerUser,
};

export default userService;