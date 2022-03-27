import axios from "axios";

const API_URL = "http://localhost:4000";

const register = async(companyData)=>{
    try{
        const res = await axios.post(API_URL + "/companies", companyData);
        return res.data;
    }catch(error){
        console.error(error);
    }
};

const login = async(companyData)=>{
    const res = await axios.post(API_URL + '/companies/login', companyData);
    if(res.data){
        localStorage.setItem('company', JSON.stringify(res.data));
    }
    return res.data;
};

const logout = async() =>{
    const company = JSON.parse(localStorage.getItem('company'));
    console.log(company);
    const res = await axios.delete(API_URL + '/companies/logout', {
        headers:{
            authorization: company?.token, 
        }
    })
    if(res.data){
        localStorage.removeItem("company");
    }
    return res.data;
}

const getAllCompanies = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios(API_URL + "/companies/admin", {
        headers: {
          authorization: user?.token
        },
      });
    return res.data
}

const confirm = async (_id, company) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/companies/confirm/" + _id,company, {
        headers: {
            authorization: user?.token,
        }
    })
    console.log(res.data)
    return res.data;
}

const companyService = {
    register,
    login,
    logout,
    getAllCompanies,
    confirm
}

export default companyService;