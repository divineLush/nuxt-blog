import Vuex from 'vuex';
import posts from '~/assets/js/posts';

// gotta create a function instead of just object
// as it should be callable by nuxt
// which will execute it on the server
// if the object is returned, all users will get the same instance
const createStore = () => new Vuex.Store({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        // will be dispatched by nuxt
        // initialize store
        // nuxtServerInit(vuexContext, context)
        // initially runs on the server
        // then runs on the clien
        nuxtServerInit({ commit }) {
            commit('setPosts', posts);
        },

        setPosts(vuexContext, posts) {
            vuexContext.commit('setPosts', posts);
        }
    },
    getters: {
        posts(state) {
            return state.posts;
        },
    },
});

export default createStore;
