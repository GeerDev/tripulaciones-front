import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './RankingCompanyUser.scss'
const RakingCompanyUser = () => {
    const { companies } = useSelector((state) => state.company);
    const allCompanies = companies || [];

    const company = allCompanies.map((company) => {

        return (
          <div className="ranking-company card animate__animated animate__backInRight">
              {(
                  <div>
              <img src={company.imageCompany ?'http://localhost:4000/images/Company/'+ company.imageCompany : 'https://empleo.camaravalencia.com/tenancy/assets/images/logo-empresa-default.png'} className="img-ranking-company" />
              {company.name}
              <div className='toolbar-ranking'></div>
            <p className="ranking-company-score">Puntuación: {company.score}</p>
                </div>
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