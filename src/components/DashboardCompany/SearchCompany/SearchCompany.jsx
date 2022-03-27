import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByCompanyName, resetSearchCompany } from '../../../features/company/companySlice'

const SearchCompany = () => {

  const dispatch = useDispatch()
  const { companySearch } = useSelector( state => state.company )
  const [searchHookCompany, setSearchHookCompany] = useState({
      search : ''
  })

  const { search } = searchHookCompany

  useEffect( () => {
      if (search.length > 0){
      dispatch(searchByCompanyName(search))
      }
      if (search.length === 0){
      dispatch(resetSearchCompany())
      }
  }, [search]);

  const onChange = (e)=>{
      setSearchHookCompany((prevState)=> ({
          ...prevState,
          [e.target.name]:e.target.value,
      }))
  }

  return (
    <>
    <input type="text" name="search" value={search} onChange={onChange} placeholder='Busqueda...'/>
    {
        (search === '')
            ? <div> Buscar un empresa </div>
            : (companySearch.length === 0) && <div> No hay resultados para: { search } </div>
        }
        <div className="centrateporDIOS">
        {
          companySearch && companySearch.map(company => (
            <div key = {company._id} className='element_search card animate__animated animate__fadeIn'>
                { company.imageUser && <img src={`http://localhost:4000/images/Challenge/` + company.imageCompany } alt="Imagen Empresa Buscada" width={320}/>}
                <h3>{ company.name }</h3>
                <p>{ company.email }</p>
            </div>
          ))
        }
        </div>
    </>
  )
}

export default SearchCompany