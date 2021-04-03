// import { resolve,reject } from "core-js/fn/promise";
import Vue from 'vue';
import Vuex from 'vuex';
import { API } from './axios';
// import axios from 'axios';

Vue.use(Vuex);

// var getAPI = axios.create({
// 	baseURL: '',
// 	timeout: 3000,
// 	headers: {
// 		Authorization: 'Bearer ' + localStorage.getItem('accessToken')
// 	}
// });

export default new Vuex.Store({
	state: {
		accessToken: null,
		refreshToken: null,
		APIData: '',
		authenticated: false,
	},
	mutations: {
		setAuthentication(state) {
			state.authenticated = !state.authenticated;
		},
	},
	actions: {
		userLogin(context, usercredentials) {
			// eslint-disable-next-line
			return new Promise((resolve, reject) => {
				API.post('/login/', {
					Username: usercredentials.Username,
					password: usercredentials.password
				})
					.then(response => {
						context.commit('setAuthentication');
						localStorage.setItem(
							'accessToken',
							response.data.tokens.access
						);
						localStorage.setItem(
							'refreshToken',
							response.data.tokens.refresh
						);
						resolve(true);
					})
					.catch(error => {
						if (error.response.status === 401) {
							reject(
							  new Error('Invalid Username or Password!! Try Again.'),
							  null
							);
						  } else reject(error.response.data.message);
					});
			});
		},

		userRegister(context, usercredentials) {
			return new Promise((resolve, reject) => {
				API.post('/register/', {
					email: usercredentials.email,
					username: usercredentials.username,
					password: usercredentials.password,
				})
					// eslint-disable-next-line
					.then(({ data, status }) => {
						if (status === 201) {
							resolve(true);
						}
					})
					.catch(error => {
						if (error.response.status === 400) {
							reject(
								new Error(
									'User with this email already exists.'
								),
								null
							);
						} else reject(error.response.data.message);
					});
			});
		}
	},
	modules: {}
});
