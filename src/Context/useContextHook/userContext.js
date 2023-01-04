import React from "react";
// step 1: creating the user context
const UserContext = React.createContext("user");
const ChannelContext = React.createContext("channel");

export { UserContext, ChannelContext };
