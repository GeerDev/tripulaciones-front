import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../features/challenge/challengeSlice";

import ChallengeAdmin from "./ChallengeAdmin/ChallengeAdmin";
import AddChallenge from "../AddChallenge/AddChallenge";
import { Card } from 'antd';
import "./ChallengesAdmin.scss";


const ChallengesAdmin = () => {
  const dispatch = useDispatch();
  const { challenges } = useSelector((state) => state.challenge);

  const arrayChallenges = challenges || [];

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <div className="Challenges-container">
      <AddChallenge />
      <div className="challenges-div">
        {arrayChallenges.map((challenge) => (
          <Card style={{ width: 300, height: 250}}>
          <ChallengeAdmin key={challenge._id} {...challenge} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChallengesAdmin;
