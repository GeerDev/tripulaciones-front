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

const logoutUser = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.delete(API_URL + '/users/logout', {
        headers: {
            authorization: user?.token,
        }
    })
    if (res.data) {
        localStorage.removeItem('user')
    }
    return res.data
}

const getById = async (_id) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.get(API_URL + '/users/id/'+ _id,{
        headers: {
            authorization: user?.token
        }
    })
    return res.data
}

const searchByName = async (name) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios(API_URL + `/users/name/${name}`,{
        headers: {
            authorization: user?.token
        }
    });
    return res.data;
};

const updateUser = async (userData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + `/users/`, userData, {
      headers: {
        authorization: user?.token,
      },
    });
    return res.data;
  };

  const deleteMySelf = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.delete(API_URL + '/users/', {
        headers: {
            authorization: user?.token
        }
    })
    return res.data
}

const userService = {
    registerUser,
    loginUser,
    logoutUser,
    getById,
    searchByName,
    updateUser,
    deleteMySelf
};

export default userService;