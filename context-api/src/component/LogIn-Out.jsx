import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


export const Log = () => {
  const {tokenNo} = useContext(AuthContext);

  return  (
  <div>
  <h1>
    {tokenNo ? `You are LoggedIn with Token number :- ${tokenNo}`
    : 'Please Login In'}
  </h1>
</div>
)
};