import Vuex from 'vuex';
import axios from 'axios';

// gotta create a function instead of just object
// as it should be callable by nuxt
// which will execute it on the server
// if the object is returned, all users will get the same instance
const createStore = () => new Vuex.Store({
    state: {
        posts: [],
        token: null,
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

        setToken(state, token) {
            state.token = token;
        },

        clearToken(state) {
            state.token = null;
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

        // vuexContext, payload
        setPosts({ commit }, posts) {
            commit('setPosts', posts);
        },

        addPost({ commit }, post) {
            const url = `${process.env.baseUrl}/posts.json`;
            const newPost = { ...post, updatedDate: new Date() };

            return axios.post(url, newPost)
                .then(res => {
                    // res.data.name is an id provided by firebase
                    const id = res.data.name;
                    commit('addPost', { ...newPost, id });
                })
                .catch(error => console.log(error));
        },

        editPost({ commit, state }, editedPost) {
            const url = `${process.env.baseUrl}/posts/${editedPost.id}.json?auth=${state.token}`;

            return axios.put(url, editedPost)
                .then(() => {
                    commit('editPost', editedPost);
                })
                .catch(e => console.log(e));
        },

        authenticateUser({ commit, dispatch }, { isLogin, email, password }) {
            const payload = { email, password, returnSecureToken: true };

            const signIn = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
            const signUp = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
            const url = isLogin ? signIn : signUp;

            return axios.post(`${url}${process.env.apiKey}`, payload)
                .then(({ data }) => {
                    console.log(data);
                    commit('setToken', data.idToken);
                    dispatch('setLogoutTimer', data.expiresIn * 1000);
                })
                .catch(error => {
                    console.log(error);
                    this.errorMessage = error.message;
                })
        },

        setLogoutTimer({ commit }, duration) {
            setTimeout(() => {
                commit('clearToken');
            }, duration);
        },
    },

    getters: {
        posts(state) {
            return state.posts;
        },

        isAuth(state) {
            return state.token !== null;
        }
    },
});

export default createStore;
