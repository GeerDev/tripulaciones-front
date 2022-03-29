import axios from "axios";

const API_URL = "http://localhost:4000";

const getAll = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios(API_URL + "/challenges", {
      headers: {
        authorization: user?.token
      },
    });
  return res.data.challenges;
};

const getById = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios(API_URL + "/challenges/" + id, {
      headers: {
        authorization: user?.token
      },
    });
  return res.data;
};

const addChallenge = async (challenge) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.post(API_URL + "/challenges", challenge, {
      headers: {
        authorization: user?.token
      },
    });
  return res.data;
};

const challengeService = {
  getAll,
  getById,
  addChallenge
};

export default challengeService;