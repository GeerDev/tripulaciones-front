import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { getCompanyById, deleteCompany } from '../../../features/company/companySlice'
import './ProfileCompany'
const ProfileCompany = () => {

  const { _id } = useParams();
  const dispatch = useDispatch()

  const { companyInfo } = useSelector( state => state.company )

  const { name, nameCEO, phone, email, imageCompany, score, companyType, employees } = companyInfo

  useEffect(() => {
    dispatch(getCompanyById(_id))
  },[])

  const deleteCompanies = (async ()=> {
    await dispatch(deleteCompany(companyInfo._id));
  })

  return (
    <>
    <main className="profile-info card animate__animated animate__backInRight">
	      <div id="profil-container">
		      <h1 id="profile">Perfil de empresa</h1>
	      </div>
        { imageCompany ?  (
          	  <img id="profile-picture" src={`http://localhost:4000/images/Company/` + imageCompany} alt="Imagen Empresa"/>
        ) : (
          <img id="profile-picture" src={`https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg`} alt="Imagen Empresa"/>
        )      
        }
	  <div id="container-info">
		  <ul>
			<li><h3 id="name">{ name }</h3></li>
			<li id="mail">{ email }</li>
      <li><h3 id="mail">Puntuación de tu empresa: { score }</h3></li>
			<li className="line"></li>
      <div id="button">
      <Link to={`/`}>

    <div id="save" className="button" onClick={() =>deleteCompanies(companyInfo._id)}>Borra Tu Cuenta</div>
    </Link>
	</div>
      <li>
        <h2 className="info" id="link-edit"><Link to={`/company/edit/${_id}`}>
        Edita Perfil
        </Link></h2>
      </li>
		</ul>
	  </div>
  </main>
       {/*  
        
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
*/}     
    </>
  )
}

export default ProfileCompany