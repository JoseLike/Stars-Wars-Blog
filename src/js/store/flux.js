const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[{
				"uid": "1",
				"name": "Luke Skywalker",
				"url": "https://www.swapi.tech/api/people/1"
			  },
			  {
				"uid": "2",
				"name": "C-3PO",
				"url": "https://www.swapi.tech/api/people/2"
			  },
			  {
				"uid": "3",
				"name": "R2-D2",
				"url": "https://www.swapi.tech/api/people/3"
			  },
			  {
				"uid": "4",
				"name": "Darth Vader",
				"url": "https://www.swapi.tech/api/people/4"
			  },
			  {
				"uid": "5",
				"name": "Leia Organa",
				"url": "https://www.swapi.tech/api/people/5"
			  },
			  {
				"uid": "6",
				"name": "Owen Lars",
				"url": "https://www.swapi.tech/api/people/6"
			  },
			  {
				"uid": "7",
				"name": "Beru Whitesun lars",
				"url": "https://www.swapi.tech/api/people/7"
			  },
			  {
				"uid": "8",
				"name": "R5-D4",
				"url": "https://www.swapi.tech/api/people/8"
			  },
			  {
				"uid": "9",
				"name": "Biggs Darklighter",
				"url": "https://www.swapi.tech/api/people/9"
			  },
			  {
				"uid": "10",
				"name": "Obi-Wan Kenobi",
				"url": "https://www.swapi.tech/api/people/10"
			  }],
			onecharacter:[],
			planets:[],
			vehicles:[],
			favourites:[]
		},
		actions: {

			addToFavs:()=>{
				setStore({favourites: []})
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
