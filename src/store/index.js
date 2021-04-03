// import { resolve,reject } from "core-js/fn/promise";
import Vue from 'vue';
import Vuex from 'vuex';
import { API } from './axios';
import axios from 'axios';

Vue.use(Vuex);

var getAPI = axios.create({
	baseURL: 'http://127.0.0.1:8000/',
	timeout: 3000,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('accessToken')
	}
});

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
					username: usercredentials.username,
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
						localStorage.setItem(
							'auth',
							this.authenticated
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
		},
		
		joinLeague(context, usercredentials) {
			return new Promise((resolve, reject) => {
				getAPI.post('/league/league-join/', {
					code: usercredentials.code,
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
									'Error while joining League'
								),
								null
							);
						} else reject(error.response.data.message);
					});
			});
		},


		createLeague(context, usercredentials) {
			return new Promise((resolve, reject) => {
				getAPI.post('/league/league-create/', {
					name: usercredentials.name,
					description: usercredentials.desc,
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
									'Error while creating League'
								),
								null
							);
						} else reject(error.response.data.message);
					});
			});
		},

		createGame(context, usercredentials) {
			return new Promise((resolve, reject) => {
				getAPI.post(`/league/league-detail/${this.$route.params.id}/game-create/`, {
					name: usercredentials.name,
					capacity: usercredentials.cap,
					bet: usercredentials.bet,
					description: usercredentials.desc,
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
									'Error while creating Game'
								),
								null
							);
						} else reject(error.response.data.message);
					});
			});
		},
	},
	modules: {}
});
