import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RakingCompanyUser = () => {
    const { companies } = useSelector((state) => state.company);
    const allCompanies = companies || [];

    const company = allCompanies.map((company) => {

        return (
          <div>
              {company.imageCompany ? (
                  <>
              <img src={company.imageCompany} />
              {company.name}
              {company.score}
              </>
              ) : ( 
            <>
            {company.name}
            <p>score: {company.score}</p>
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