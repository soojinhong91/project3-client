import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Landing from "./Landing";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      { userData.user ? (
        <Landing />
      ) : (
        <>
          <h2>Join us and enjoy your ocean!</h2>
        </>
      ) }
    </div>
  );
}
