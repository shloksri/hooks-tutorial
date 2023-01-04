import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./userContext";

function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      Component F
      <br />
      {user} - {channel}
    </div>
  );
}

export default ComponentF;
