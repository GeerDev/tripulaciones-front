import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRankingCompanies } from "../../../features/company/companySlice";
import RakingCompanyUser from "./RankingCompanyUser/RankingCompanyUser";


const RakingCompaniesUser = () => {
    const dispatch = useDispatch();
    useEffect(async () => {
      await dispatch(getRankingCompanies());
    }, []);
  
    return (
        <div>
            <RakingCompanyUser/>
        </div>
      )
}

export default RakingCompaniesUser;