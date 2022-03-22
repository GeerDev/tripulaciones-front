import axios from "axios";

const API_URL = "http://localhost:4000";

const registerUser = async (userData) => {
    try {
        const res = await axios.post(API_URL + "/users", userData);
        return res.data
    } catch (error) {
        console.error(error)
    }
}

const loginUser = async(userData)=>{
    const res = await axios.post(API_URL + '/users/login', userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    return res.data
}
const userService = {
    registerUser,
    loginUser
};

export default userService;