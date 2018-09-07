import _ from 'lodash';
import api from '@/api/api.js';

const PER_PAGE = 15;

const state = {
	collection: [],
	model: {},
	filters: {
		page: 1,
		q: {},
		per_page: PER_PAGE,
		sorters: {},
	},
	pages: [0],
	schema: { fields: [] },
	mode: undefined,
};

const getters = {
	schema: state => state.schema,
	model: state => state.model,
	collection: state => state.collection,
	mode: state => state.mode,
};

const actions = {
	COLLECTION({ commit, state }) {
		commit('MODE', 'COLLECTION');
		if (state.collection.length) {
			return;
		}
		return api
			.collection()
			.then(response => {
				commit('COLLECTION', response.model);
				commit('SCHEMA', response.schema);
			})
			.catch(error => {
				throw new Error(error);
			});
	},

	SINGLE({ commit }, id) {
		commit('MODE', 'SINGLE');
		return api
			.single(id)
			.then(response => {
				commit('SINGLE', response.model);
				commit('SCHEMA', response.schema);
				// let model = response.data.content || Object.create({});
				// return model;
			})
			.catch(error => {
				throw new Error(error);
			});
	},

	SET({ commit }, data) {
		commit('SET', data);
	},
};

const mutations = {
	MODE(state, mode) {
		state.mode = mode;
	},

	SINGLE(state, model) {
		state.model = model;
	},

	SCHEMA(state, schema) {
		if (JSON.stringify(schema) !== JSON.stringify(state.schema)) {
			state.schema = schema;
		}
	},

	COLLECTION(state, list) {
		state.collection = list;
	},

	SET(state, data) {
		if (data.path === '') {
			state.model = Object.assign({}, data.value);
		} else if (typeof data.value === 'object') {
			for (let key in data.value) {
				_.set(state.model, key, data.value[key]);
			}
		} else {
			_.set(state.model, data.path, data.value);
		}
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
