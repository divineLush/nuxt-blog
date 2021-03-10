import Vuex from 'vuex';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
// import posts from '~/assets/js/posts';

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
        nuxtServerInit({ commit }, { error }) {
            // commit('setPosts', posts);
            const url = 'https://nuxt-blog-3ae83-default-rtdb.firebaseio.com/posts.json';
            return axios.get(url)
                .then(({ data }) => {
                    const posts = [];
                    for (const key in data) {
                        const id = uuidv4();
                        const post = { ...data[key], id };
                        posts.push(post);
                    }
                    commit('setPosts', posts);
                })
                .catch(e => error(e));
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
