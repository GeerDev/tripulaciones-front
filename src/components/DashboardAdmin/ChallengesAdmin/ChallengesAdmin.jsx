import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../features/challenge/challengeSlice'

import ChallengeAdmin from './ChallengeAdmin/ChallengeAdmin'

const ChallengesAdmin = () => {

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
        <ChallengeAdmin 
            key= { challenge._id } 
            {...challenge}
            />
      ))
    }
    </>
  )
}

export default ChallengesAdmin