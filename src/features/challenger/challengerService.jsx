import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async () => {
  const res = await axios.get(API_URL + "/challengers");
  return res.data;
};

const getById = async (id) => {
  const res = await axios.get(API_URL + "/challengers/" + id);
  return res.data;
};

const deleteChallenger = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const res = await axios.delete(API_URL + "/challengers/" + id, {
    headers: {
      authorization: user?.token,
    },
  });
  return res.data;
};

const getChallengerByName = async (pregunta) => {
  const res = await axios.get(API_URL + "/challengers/preguntas/" + pregunta);
  return res.data;
};


const challengerService = {
  getAll,
  getById,
  deleteChallenger,
  getChallengerByName
};

export default challengerService;