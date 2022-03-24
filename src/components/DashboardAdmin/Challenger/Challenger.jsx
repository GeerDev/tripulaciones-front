import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteChallenger, getAll, reset } from "../../../features/challengers/challengerSlice";

const Challenger = () => {
  const { challengers, isLoading } = useSelector((state) => state.challengers);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);

  if (isLoading) {
    return <h1>Cargando challengers...</h1>;
  }

  const challenger = challengers.map((challenger) => {
    return (
      <ul className="challenger" key={challenger.id}>
          <li>{challenger.title}</li>
          <button onClick={() => dispatch(deleteChallenger(challenger.id))}>X</button>
      </ul>
    );
  });
  return <div>{challenger}</div>;
};

export default Challenger;