import Vue from 'vue';
import Vuex from 'vuex';
import content from './content/content';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: [content],
});

export default store;
