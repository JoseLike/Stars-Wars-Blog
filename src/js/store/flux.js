const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			onecharacter:{},
			planets:[],
			vehicles:[],
			favourites:[]
		},
		actions: {

			addToFavs:()=>{
				setStore({favourites: [... getStore({characters:characters.uid})]})
			},

			getCharacters: async ()=>{
				const response = await  fetch( "https://www.swapi.tech/api/people")
				const data = await response.json()
				setStore({characters: data.results})
				
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

			getOneCharacter: async (key)=>{
				const response = await fetch("https://www.swapi.tech/api/people/"+key)
				const gettedcharacter = await response.json(); 
				setStore({onecharacter:gettedcharacter.result.properties})
			}
			
		}
	};
};

export default getState;
