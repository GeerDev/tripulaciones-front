import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { getById, resetUser } from '../../../features/user/userSlice'
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

  return (
    <>
    <div className="main-container">
    <div className="container-1">
    <main className="profile-info">
	<div id="profil-container">
		<h1 id="profile">Profile</h1>
	</div>
	<img id="profile-picture" src={`http://localhost:4000/images/User/` + imageUser} alt="Imagen User"/>
	<div id="container-info">
		<ul>
			<li><h3 id="name">{ name }</h3></li>
			<li id="mail">{ email }</li>
			<li className="line"></li>
			<li>
				<h2 className="info">My Project</h2>
			</li>
			<li>
				<h2 className="info">Account</h2>
			</li>
      <li>
        <h2 className="info" id="link-edit"><Link to={`/user/edit/${_id}`}>
        Editar perfil
        </Link></h2>
      </li>
		</ul>
	</div>
	<div id="button">
		<div id="save" className="button">save</div>
    <div id="save" className="button">Borra Tu Cuenta</div>
	</div>
	<div id="home-bar"></div>
</main>
    </div>
    <div className="container-2">

    </div>
    </div>
      {/* <div className='user-profile'>
        <img
        src={`http://localhost:4000/images/User/` + imageUser}
        alt="Imagen User"
        width={320}
        />
        <div className="profile-info">
          <h3>{ name }</h3>
          <h4>{ email }</h4>
        <Link to={`/user/edit/${_id}`}>
        <button>Edita Perfil</button>
        </Link>

        <button onClick={() => console.log("Hola")}>Borra Tu Cuenta</button>
        </div>
        <div>
        <Tabs defaultActiveKey="1">
                  <TabPane tab="Tus publicaciones" key="1">
                    <div className="tabs">
                    {
                        postIds && postIds.map(post => (
                            <div key = {post._id} className='inside card animate__animated animate__fadeIn'>
                                        <p>{ post.description }</p>
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
                                        <p>{ post.description }</p>
                            </div>
                          ))
                    }
                    </div>
                  </TabPane>
              </Tabs>
        </div>
        <SearchUser />
        </div> */}
    </>


  )
}

export default ProfileUser