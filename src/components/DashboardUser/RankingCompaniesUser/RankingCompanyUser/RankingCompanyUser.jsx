import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './RankingCompanyUser.scss'
const RakingCompanyUser = () => {
    const { companies } = useSelector((state) => state.company);
    const allCompanies = companies || [];

    const company = allCompanies.map((company) => {

        return (
          <div className="ranking-company">
              {company.imageCompany ? (
                  <>
              <img src={company.imageCompany} className="img-ranking-company" />
                <div className="ranking-company-info">                  
              <p>{company.name}</p>
              <p>{company.score}</p>
                </div>  

              </>
              ) : ( 
            <>
            {company.name}
            <p className="ranking-company-score">score: {company.score}</p>
            </>
            )
            }

          </div>) })
    return (
        <div>
            {company}
        </div>
      )
    
}

export default RakingCompanyUser;