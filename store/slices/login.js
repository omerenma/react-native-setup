import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch } from "../../helper/fetch";
import axios from "axios";

export const loginAction = createAsyncThunk(
	"loginuser",
	async (data, thunkApi) => {
		console.log(data, 'res data')
		const response = await fetch(
			"https://pernstackbackend.herokuapp.com/api/v1/auth/login",
			data
		);
		return response.data;
	}
);

const loginSlice = createSlice({
	name: "login",
	initialState: {
		loading: false,
		success: false,
		error: false,
		isAuthenticated: false,
		user: {},
		errorData: "",
	},
	reducers: {},
	extraReducers: {
		[loginAction.pending]: (state) => {
			JSON.stringify(state)
			state.loading = true;
			state.isAuthenticated = false;
		},
		[loginAction.fulfilled]: (state, { payload }) => {
			JSON.stringify(state)
			state.loading = false;
			state.isAuthenticated = true;
			state.success = true;
			state.user = payload;
		},
		[loginAction.rejected]: (state, {payload}) => {
			JSON.stringify(state)
			state.loading = false;
			state.success = false;
			state.isAuthenticated = false;
			state.error = true;
			state.errorData = payload;
		},
	},
});
export default loginSlice.reducer;
