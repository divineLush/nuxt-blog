import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const dataTypes = {
    TOKEN: 'token',
    EXPIRATION_DATE: 'tokenExpirationDate',
};

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
                    const token = data.idToken
                    commit('setToken', token);
                    localStorage.setItem(dataTypes.TOKEN, token);

                    const expiresIn = Number.parseInt(data.expiresIn) * 1000;
                    // timestamp in the future when token expires
                    const tokenExpirationDate = new Date().getTime() + expiresIn; 
                    localStorage.setItem(dataTypes.EXPIRATION_DATE, tokenExpirationDate);

                    Cookie.set(dataTypes.TOKEN, token);
                    Cookie.set(dataTypes.EXPIRATION_DATE, tokenExpirationDate);
                })
                .catch(error => {
                    console.log(error);
                    this.errorMessage = error.message;
                })
        },

        initAuth({ commit, dispatch }, request) {
            let token;
            let expirationDate;
            // if code runs on the server
            // request is a node/express request object
            if (request) {
                // check if there is a cookie
                if (!request.headers.cookie) return;

                const extractFromCookie = name => request.headers.cookie
                    .split(';')
                    .find(c => c.trim().startsWith(`${name}=`));

                const tokenCookie = extractFromCookie(dataTypes.TOKEN);

                if (!tokenCookie) return;
                
                const getValue = cookie => cookie.split('=')[1];

                token = getValue(tokenCookie);
                expirationDate = getValue(extractFromCookie(dataTypes.EXPIRATION_DATE));
            } else {
                // persisting token in localStorage
                token = localStorage.getItem(dataTypes.TOKEN);
                expirationDate = localStorage.getItem(dataTypes.EXPIRATION_DATE);
            }

            // if the date is expired or there is no token
            if (new Date().getTime() > +expirationDate || !token) {
                dispatch('logout');
                return;
            }

            // remaining time
            commit('setToken', token);            
        },

        logout({ commit }) {
            commit('clearToken');
            Cookie.remove(dataTypes.TOKEN);
            Cookie.remove(dataTypes.EXPIRATION_DATE);
            if (process.client) {
                localStorage.removeItem(dataTypes.TOKEN);
                localStorage.removeItem(dataTypes.EXPIRATION_DATE);
            }
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
