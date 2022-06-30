
// import AsyncStorage from "@react-native-community/async-storage";
const url = "https://pernstackbackend.herokuapp.com/api/v1/auth/";
export const fetch = async (url, data) => {
	const res = await fetch(api, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
            // "Authorization":AsyncStorage.getItem('token')
			// "Authorization":localStorage.getItem('token')
		},
        body:JSON.stringify(data)
	});
    return await res.json()
};
