import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../features/challenge/challengeSlice'

import ChallengeUser from './ChallengeUser/ChallengeUser'

const ChallengesUser = () => {

  const dispatch = useDispatch()
  const { challenges } = useSelector( state => state.challenge)

  const arrayChallenges = challenges || []

  useEffect(() => {
    dispatch(getAll())
  },[])

  return (
    <>
      {
        
      arrayChallenges.map(challenge => (
        <ChallengeUser 
            key= { challenge._id } 
            {...challenge}
            />
      ))
    }
    </>
  )
}
export default ChallengesUser