import Vuex from 'vuex';
import axios from 'axios';

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
        },

        addPost(state, post) {
            state.posts.push(post);
        },

        editPost(state, editedPost) {
            const postIndex = state.posts.findIndex(post => post.id === editedPost.id);
            state.posts[postIndex] = editedPost;
        },
    },

    actions: {
        // will be dispatched by nuxt
        // initialize store
        // nuxtServerInit(vuexContext, context)
        // initially runs on the server
        // then runs on the clien
        nuxtServerInit({ commit }, { error }) {
            // commit('setPosts', posts);
            const url = `${process.env.baseUrl}/posts.json`;
            return axios.get(url)
                .then(({ data }) => {
                    const posts = [];
                    for (const key in data)
                        posts.push({ ...data[key], id: key });
  
                    commit('setPosts', posts);
                })
                .catch(e => error(e));
        },

        setPosts(vuexContext, posts) {
            vuexContext.commit('setPosts', posts);
        },

        addPost(vuexContext, post) {
            const url = `${process.env.baseUrl}/posts.json`;
            const newPost = { ...post, updatedDate: new Date() };

            return axios.post(url, newPost)
                .then(res => {
                    // res.data.name is an id provided by firebase
                    const id = res.data.name;
                    vuexContext.commit('addPost', { ...newPost, id });
                })
                .catch(error => console.log(error));
        },

        editPost(vuexContext, editedPost) {
            const url = `${process.env.baseUrl}/posts/${editedPost.id}.json`;

            return axios.put(url, editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost);
                })
                .catch(e => console.log(e));
        }
    },

    getters: {
        posts(state) {
            return state.posts;
        },
    },
});

export default createStore;
