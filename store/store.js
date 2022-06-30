import { configureStore, Reducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";

import { persistReducer } from "redux-persist";
import {
	// persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

// Login
import loginSlice from "./slices/login";
import addUser from "./slices/addUser";

// Logout
import logout from "./slices/logout";

export const combinedReducers = combineReducers({
	// Login
	login: loginSlice,

	// User
	addUser,

	// Logout
	logout,
});

// const rootReducer = (state, action) => {
// 	if (action.type === "logout") {
// 		state = undefined;
// 	}
// 	return combinedReducers(state, action);
// };

// const persistedReducer = persistReducer(rootReducer);

const reducer = {
	login: loginSlice,
	addUser,
	logout,
};
// const debounceNotify = _.debounce(notify => notify())
const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== "production",
	//   preloadedState,
	//   enhancers: [batchedSubscribe(debounceNotify)],
	// reducer: rootReducer,
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
	// 		},
	// 	}),
});
export default store;
