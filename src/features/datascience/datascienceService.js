import axios from "axios";

const API_URL = "https://data-bridge-2022.herokuapp.com";

const getStats = async () => {
    const res = await axios.get(API_URL + '/getStats/')
    return res.data
}

const getRanking = async () => {
    const res = await axios.get(API_URL + '/getRanking/')
    return res.data
}

const getForm = async () => {
    const res = await axios.get(API_URL + '/getForm/')
    return res.data
}

const postForm = async (dataForm) => {
    try {
        const res = await axios.post(API_URL + "/postAnswers/", dataForm);
        return res.data
    } catch (error) {
        console.error(error)
    }
}

const userService = {
    getStats,
    getRanking,
    getForm,
    postForm
};

export default userService;