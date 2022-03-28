import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { getCompanyById } from '../../../features/company/companySlice'

const ProfileCompany = () => {

  const { _id } = useParams();
  const dispatch = useDispatch()

  const { companyInfo } = useSelector( state => state.company )

  const { name, nameCEO, phone, email, imageCompany, score, companyType, employees } = companyInfo

  useEffect(() => {
    dispatch(getCompanyById(_id))
  },[])

  return (
    <>
        <img
        src={`http://localhost:4000/images/Company/` + imageCompany}
        alt="Imagen Compañia"
        width={320}
        />
        <Link to={`/company/edit/${_id}`}>
        <button>Edita Perfil</button>
        </Link>
      <h3>{ name }</h3>
      <h3>{ nameCEO }</h3>
      <h3>{ phone }</h3>
      <h3>{ email }</h3>
      <h3>{ score }</h3>
      <h3>{ companyType }</h3>
      {
                        employees && employees.map(employee => (
                            <div key = {employee._id} className='inside card animate__animated animate__fadeIn'>
                                        <p>{ employee.name }</p>
                            </div>
                          ))
                    }
    </>
  )
}

export default ProfileCompany