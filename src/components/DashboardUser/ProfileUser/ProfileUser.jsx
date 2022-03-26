import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getById, resetUser } from '../../../features/user/userSlice'

import { Tabs } from 'antd';
const { TabPane } = Tabs;

const ProfileUser = () => {

  const { _id } = useParams();
  const dispatch = useDispatch()
  const { userNow } = useSelector( state => state.user )
  const { name, email, imageUser, postIds, favorites } = userNow

  useEffect(() => {
    dispatch(getById(_id))

    return () => dispatch(resetUser())
  },[])

  return (
    <>
        <img
        src={`http://localhost:4000/images/User/` + imageUser}
        alt="Imagen User"
        width={320}
        />

        <h3>{ name }</h3>
        <h4>{ email }</h4>

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
              
    </>


  )
}

export default ProfileUser