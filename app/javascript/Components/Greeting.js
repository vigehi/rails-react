import React, { useEffect } from "react";
import { ReactDOM } from "react-dom";
import { getMessage } from "../redux/Reducer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  async function fetchMessage() {
    await axios.get("api/messages").then((response) => {
      dispatch(getMessage(response.data.greeting));
    });
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <>
      <p>{message}</p>
      <button onClick={() => fetchMessage()}>Generate new message</button>
    </>
  );
};

export default Greeting;
