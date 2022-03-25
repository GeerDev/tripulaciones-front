import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../features/post/postSlice'

import '../../../styles/main.scss';

const AddChallenge = () => {


  return (
    <form onSubmit={onSubmit} className='form card animate__animated animate__fadeIn'>
        <input type="file" name="imagePost"/>
        <input type="text" placeholder="Título..." name="title" />
        <input type="text" placeholder="Descripción..." name="description" />
    <button type="submit">Añade una publicación</button>
    </form>
  )
}

export default AddChallenge