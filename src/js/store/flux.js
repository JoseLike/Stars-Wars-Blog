const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [
        {
          uid: "1",
          name: "Luke Skywalker",
          url: "https://www.swapi.tech/api/people/1",
        },
        {
          uid: "2",
          name: "C-3PO",
          url: "https://www.swapi.tech/api/people/2",
        },
        {
          uid: "3",
          name: "R2-D2",
          url: "https://www.swapi.tech/api/people/3",
        },
        {
          uid: "4",
          name: "Darth Vader",
          url: "https://www.swapi.tech/api/people/4",
        },
        {
          uid: "5",
          name: "Leia Organa",
          url: "https://www.swapi.tech/api/people/5",
        },
        {
          uid: "6",
          name: "Owen Lars",
          url: "https://www.swapi.tech/api/people/6",
        },
        {
          uid: "7",
          name: "Beru Whitesun lars",
          url: "https://www.swapi.tech/api/people/7",
        },
        {
          uid: "8",
          name: "R5-D4",
          url: "https://www.swapi.tech/api/people/8",
        },
        {
          uid: "9",
          name: "Biggs Darklighter",
          url: "https://www.swapi.tech/api/people/9",
        },
        {
          uid: "10",
          name: "Obi-Wan Kenobi",
          url: "https://www.swapi.tech/api/people/10",
        },
      ],
      onecharacter: [],
      oneplanet: [],
      onestarship: [],
      planets: [],
      vehicles: [],
      favourites: [],
      images: [],
      charactersPages: 1,
      characterpage: 1,
      planetsPages: 1,
      planetpage: 1,
      vehiclesPages: 1,
      vehiclepage: 1,
    },
    actions: {
      addToFavs: (name) => {
        const store = getStore();
        if (!store.favourites.includes(name)) {
          setStore({ favourites: [...store.favourites, name] });
        } else {
          setStore({
            favourites: store.favourites.filter((item) => item != name),
          });
        }
      },

      getCharacters: async () => {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();
        setStore({ characters: data.results });
      },

      getPlanets: async () => {
        const response = await fetch("https://www.swapi.tech/api/planets");
        const gettedplanets = await response.json();
        setStore({ planets: gettedplanets.results });
      },

      getVehicles: async () => {
        const response = await fetch("https://www.swapi.tech/api/starships");
        const gettedstarships = await response.json();
        setStore({ vehicles: gettedstarships.results });
      },

      getOneCharacter: async (key) => {
        const response = await fetch(
          "https://www.swapi.tech/api/people/" + key
        );
        const gettedcharacter = await response.json();
        setStore({ onecharacter: gettedcharacter.result.properties });
      },
      getOnePlanet: async (key) => {
        const response = await fetch(
          "https://www.swapi.tech/api/planets/" + key
        );
        const gettedplanet = await response.json();
        setStore({ oneplanet: gettedplanet.result.properties });
      },
      getOneStarship: async (key) => {
        const response = await fetch(
          "https://www.swapi.tech/api/starships/" + key
        );
        const gettedstarship = await response.json();
        setStore({ onestarship: gettedstarship.result.properties });
      },

      getMoreCharacters: async () => {
        const store = getStore();
        const response = await fetch(
          `https://www.swapi.tech/api/people?page=${
            store.characterpage + 1
          }&limit=10`
        );
        const more = await response.json();
        setStore({ charactersPages: more.total_pages });
        if (store.characterpage != store.charactersPages) {
          setStore({ characterpage: store.characterpage + 1 });
          setStore({ characters: [...store.characters.concat(more.results)] });
        }
      },
      getMorePlanets: async () => {
        const store = getStore();
        const response = await fetch(
          `https://www.swapi.tech/api/planets?page=${
            store.planetpage + 1
          }&limit=10`
        );
        const more = await response.json();
        setStore({ planetsPages: more.total_pages });
        if (store.planetpage != store.planetsPages) {
          setStore({ planetpage: store.planetpage + 1 });
          setStore({ planets: [...store.planets.concat(more.results)] });
        }
      },
      getMoreVehicles: async () => {
        const store = getStore();
        const response = await fetch(
          `https://www.swapi.tech/api/starships?page=${
            store.planetpage + 1
          }&limit=10`
        );
        const more = await response.json();
        setStore({ vehiclesPages: more.total_pages });
        if (store.vehiclepage != store.vehiclesPages) {
          setStore({ vehiclepage: store.vehiclepage + 1 });
          setStore({ vehicles: [...store.vehicles.concat(more.results)] });
        }
      },
    },
  };
};

export default getState;
