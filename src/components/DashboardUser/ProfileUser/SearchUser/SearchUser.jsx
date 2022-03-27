import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByName, resetSearch } from '../../../../features/user/userSlice'

const SearchUser = () => {

    const dispatch = useDispatch()
    const { userSearch } = useSelector( state => state.user )
    const [searchHook, setSearchHook] = useState({
        search : ''
    })

    const { search } = searchHook

    useEffect( () => {
        if (search.length > 0){
        dispatch(searchByName(search))
        }
        if (search.length === 0){
        dispatch(resetSearch())
        }
    }, [search]);

    const onChange = (e)=>{
        setSearchHook((prevState)=> ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

  return (
    <>
    <input type="text" name="search" value={search} onChange={onChange} placeholder='Busqueda...'/>
    {
        (search === '')
            ? <div> Buscar un usuario </div>
            : (userSearch.length === 0) && <div> No hay resultados para: { search } </div>
        }
        <div className="centrateporDIOS">
        {
          userSearch && userSearch.map(user => (
            <div key = {user._id} className='element_search card animate__animated animate__fadeIn'>
                { user.imageUser && <img src={`http://localhost:4000/images/User/` + user.imageUser } alt="Imagen Usuario Buscado" width={320}/>}
                <h3>{ user.name }</h3>
                <p>{ user.email }</p>
            </div>
          ))
        }
        </div>
    </>
  )
}

export default SearchUser