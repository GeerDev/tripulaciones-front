import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById } from "../../../../features/challengers/challengerSlice";

const ChallengerDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { challenger } = useSelector((state) => state.challengers);
  useEffect(() => {
    dispatch(getById(id));
  }, []);

  return (
    <div>
      <h1>ChallengerDetail</h1>
      <p>{challenger.title}</p>
      <p>{challenger.body}</p>
    </div>
  );
};

export default ChallengerDetail;