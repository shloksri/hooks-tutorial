import React from "react";
import ComponentE from "./ComponentE";
import { UserContext, ChannelContext } from "./userContext";
function ComponentC() {
  return (
    <div>
      <UserContext.Provider value="user props">
        <ChannelContext.Provider value="channel props">
          <ComponentE />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentC;
