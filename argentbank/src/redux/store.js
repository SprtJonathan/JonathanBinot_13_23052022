import { configureStore } from "@reduxjs/toolkit";
import loggedUser from "./reducers/loggedUser";

const store = configureStore({
  reducer: {
    userStatus: loggedUser,
  },
});

export default store;
