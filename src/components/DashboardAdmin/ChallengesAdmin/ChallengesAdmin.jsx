import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../features/challenge/challengeSlice";

import ChallengeAdmin from "./ChallengeAdmin/ChallengeAdmin";
import AddChallenge from "../AddChallenge/AddChallenge";

const ChallengesAdmin = () => {
  const dispatch = useDispatch();
  const { challenges } = useSelector((state) => state.challenge);

  const arrayChallenges = challenges || [];

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      <AddChallenge />
      <div className="challenges-div">
        {arrayChallenges.map((challenge) => (
          <ChallengeAdmin key={challenge._id} {...challenge} />
        ))}
      </div>
    </>
  );
};

export default ChallengesAdmin;
