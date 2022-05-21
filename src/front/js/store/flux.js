const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			rocketsArray: [],
			dragonsArray: [],
			nasaOneImageArray: [],
			marsone: [],
			marstwo: [],

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
			DragonsApi: () => {
				fetch("https://api.spacexdata.com/v4/dragons", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ dragonsArray: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
			MarsOneApi: () => {
				fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=HxVbXc908Qq8EhgZm1MoVXQ784zCvgyEH6xFU0sh", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ marsone: data.photos })
					})
					.catch(err => {
						console.error(err);
					});
			},
			MarsTwoApi: () => {
				fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?earth_date=2016-6-3&api_key=HxVbXc908Qq8EhgZm1MoVXQ784zCvgyEH6xFU0sh", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ marstwo: data.photos })
					})
					.catch(err => {
						console.error(err);
					});
			},
			NasaViewApi: () => {
				fetch("https://api.nasa.gov/planetary/apod?api_key=HxVbXc908Qq8EhgZm1MoVXQ784zCvgyEH6xFU0sh", {
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ nasaOneImageArray: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
		}
	};
};

export default getState;
