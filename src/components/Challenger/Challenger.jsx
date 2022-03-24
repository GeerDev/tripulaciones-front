import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../../features/challengers/challengerSlice";
import { Spin } from "antd";
import { Link } from "react-router-dom";

const Challenger = () => {
  const { challengers, isLoading } = useSelector((state) => state.challengers);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
    await dispatch(reset());
  }, []);

  if (isLoading) {
    return (
      <h1>
        <Spin />
      </h1>
    );
  }

  const challenger = challengers.map((challenger) => {
    return (
      <div className="challenger" key={challenger.id}>
        <Link to={"/challenger/" + challenger.id}>
          <p>{challenger.title}</p>
        </Link>
      </div>
    );
  });
  return <div>{challenger}</div>;
};

export default Challenger;