import { data, schema } from './data';

const api = {
	collection() {
		return new Promise(resolve => {
			resolve({
				model: data.COLLECTION,
				schema: schema,
			});
		});
	},
	single(id) {
		return new Promise(resolve => {
			resolve({
				model: data.COLLECTION.filter(i => i.id === id)[0],
				schema: schema,
			});
		});
	},
};

export default api;
