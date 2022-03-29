import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { deleteMySelf, getById } from '../../../features/user/userSlice'
import './ProfileUser.scss'

import { Tabs } from 'antd';
import SearchUser from './SearchUser/SearchUser';
const { TabPane } = Tabs;

const ProfileUser = () => {

  const { _id } = useParams();
  const dispatch = useDispatch()

  const { userNow } = useSelector( state => state.user )
  const { name, email, imageUser, postIds, favorites } = userNow

  useEffect(() => {
    dispatch(getById(_id))
  },[])

  const deleteUser = (async ()=> {
    await dispatch(deleteMySelf(userNow._id));
  })

  return (
    <>
      <div className="container-1 card animate__animated animate__backInRight">
        <main className="profile-info">
	      <div id="profil-container">
		      <h1 id="profile">Perfil</h1>
	      </div>
      {imageUser ? (
	  <img id="profile-picture" src={`http://localhost:4000/images/User/` + imageUser}  alt="Imagen User"/>
    ) : (<img id="profile-picture" src={`https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg`} onError="this.src='tripulaciones-front\src\img\profile-default.png'" alt="Imagen User"/>)
    }
    <div id="container-info">
		  <ul>
			<li><h3 id="name">{ name }</h3></li>
			<li id="mail">{ email }</li>
			<li className="line"></li>
      <div id="button">
    <Link to={`/`}>
    <button id="save" className="button" onClick={() =>deleteUser(userNow._id)} >Borra Tu Cuenta</button>
    </Link>
	</div>
      <li>
        <h2 className="info" id="link-edit"><Link to={`/user/edit/${_id}`}>
        Editar perfil
        </Link></h2>
      </li>
		</ul>
	</div>
    </main>
    </div>
      <div className="container-2 card animate__animated animate__fadeInRight">
        <div className="posts-favs">
      <Tabs defaultActiveKey="1">
                  <TabPane tab="Tus publicaciones" key="1">
                    <div className="tabs">
                    {
                        postIds && postIds.map(post => (
                            <div key = {post._id} className='inside card animate__animated animate__fadeIn'>
                              <div>
                                <p className="post-book">{ post.description }</p>
                              </div>
                            </div>
                          ))
                    }
                    </div>
                  </TabPane>
                  <TabPane tab="Tus favoritos" key="2">
                  <div className="tabs">
                    {
                        favorites && favorites.map(post => (
                            <div key = {post._id} className='inside card animate__animated animate__fadeIn'>
                                        <p className="post-book">{ post.description }</p>
                            </div>
                          ))
                    }
                    </div>
                  </TabPane>
              </Tabs>
        </div>
              <div className="search-user">
          <SearchUser />
              </div>
    </div>
    </>
  )
}

export default ProfileUser