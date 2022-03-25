import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../features/challenge/challengeSlice'

import Challenge from './Challenge/Challenge'

const Challenges = () => {

  const dispatch = useDispatch()
  const { challenges } = useSelector( state => state.challenge)

  const arrayChallenges = challenges || []

  useEffect(() => {
    dispatch(getAll())
  },[])

  return (
    <>
    <h2>Retos</h2>
    {
      arrayChallenges.map(challenge => (
        <Challenge 
            key= { challenge._id } 
            {...challenge}
            />
      ))
    }
    </>
  )
}

export default Challenges