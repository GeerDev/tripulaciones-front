import axios from "axios";

const API_URL = "http://localhost:4000";

const register = async(companyData)=>{
    try{
        const res = await axios.post(API_URL + "/companies/register", companyData);
    }catch(error){
        console.error(error);
    }
};

const login = async(companyData)=>{
    const res = await axios.post(API_URL + '/companies/login', companyData);
    if(res.data){
        localStorage.getItem('user', JSON.stringify(res.data));
    }
    return res.data;
};

const logout = async() =>{
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.delete(API_URL + '/companies/logout', {
        headers:{
            authorization: company?.token, 
        }
    })
    if(res.data){
        localStorage.removeItem('company');
    }
    return res.data;
}

const companyService = {
    register,
    login,
    logout
}

export default companyService;