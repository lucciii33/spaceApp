const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			rocketsArray: []
		},
		actions: {
			RocketsApi: () => {
				fetch("https://api.spacexdata.com/v4/rockets", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ rocketsArray: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
			MarsOneApi: () => {
				fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=GUDLbIEDgD2FB42HH5xDfGKwZL2FLPxAiDZkNXT7", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ rocketsArray: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
			MarsTwoApi: () => {
				fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?earth_date=2016-6-3&api_key=GUDLbIEDgD2FB42HH5xDfGKwZL2FLPxAiDZkNXT7", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ rocketsArray: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
			NasaViewApi: () => {
				fetch("https://api.nasa.gov/planetary/apod?api_key=dvawnOXxPnsMg6f43vPZlLWnNpP8gg9RdWqX0RKe", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ rocketsArray: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
		}
	};
};

export default getState;
