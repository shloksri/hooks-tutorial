import React from "react";
// step 1: creating the user context
const UserContext = React.createContext("Codevolution");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
