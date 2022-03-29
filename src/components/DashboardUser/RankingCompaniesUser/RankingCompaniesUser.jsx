import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRankingCompanies } from "../../../features/company/companySlice";
import RakingCompanyUser from "./RankingCompanyUser/RankingCompanyUser";
import './RankingCompaniesUser.scss'

const RakingCompaniesUser = () => {
    const dispatch = useDispatch();
    useEffect(async () => {
      await dispatch(getRankingCompanies());
    }, []);
  
    return (
        <div>
            <h2 className="ranking-companies-dashboard">Ranking de empresas</h2>
            <RakingCompanyUser/>
        </div>
      )
}

export default RakingCompaniesUser;