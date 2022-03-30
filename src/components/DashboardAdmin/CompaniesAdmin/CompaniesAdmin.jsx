import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompanies, reset } from '../../../features/company/companySlice';
import CompanyAdmin from './CompanyAdmin/CompanyAdmin'

const CompaniesAdmin = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.company);

    useEffect(async () => {
      await dispatch(getAllCompanies());
      await dispatch(reset());
    }, []);

    if (isLoading) {
        return <h1>Cargando companies...</h1>;
      }    
  
  return (
    <div>
        <h1>Empresas</h1>
        <CompanyAdmin/>
    </div>
  )
}

export default CompaniesAdmin