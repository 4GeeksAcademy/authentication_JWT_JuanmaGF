const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			const BASE_URL = "https://upgraded-space-tribble-4xxw9pxx967hqj5g-3001.app.github.dev";


				export const signUp = async (email, password) => {
				try {
					const response = await fetch(`${BASE_URL}/signup`, {
						method: "POST",
						headers: {
        ‘Content - Type’: ‘application / json’,
      },
body: JSON.stringify({ email, password }),
    });
const data = await response.json();
return data;
  } catch (error) {
	console.error(‘Error:’, error);
	throw error; // Puedes manejar el error según tus necesidades
}
};

			},
		}
	};
};

export default getState;
