const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			vehicles:[],
			favourites:[]

		},
		actions: {

			addToFavs:()=>{

			},

			getCharacters: async ()=>{
				const response = await  fetch( "https://www.swapi.tech/api/people")
				const data = await response.json()
				setStore({characters: data.results})
				console.log(characters)
			},

			getPlanets: async ()=>{
				const response = await fetch( "https://www.swapi.tech/api/planets")
				const gettedplanets = await response.json()
				setStore({planets: gettedplanets.results})
			},

			getVehicles: async ()=>{
				const response = await fetch( "https://www.swapi.tech/api/starships")
				const gettedstarships = await response.json()
				setStore({vehicles: gettedstarships.results})
			},
			
		}
	};
};

export default getState;
