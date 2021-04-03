import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NProgress from 'nprogress';
import store from '../store/index';

Vue.use(VueRouter);

NProgress.configure({ showSpinner: false });

function loadView(view) {
	return () =>
		import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { title: 'Home | Meep', authwall: false }
	},
	{
		path: '/user/login',
		name: 'Login',
		component: loadView('Login'),
		meta: { title: 'Login | Meep', authwall: false }
	},
	{
		path: '/user/register',
		name: 'Register',
		component: loadView('Register'),
		meta: { title: 'Register | Meep', authwall: false }
	},
	{
		path: '/main',
		name: 'Main',
		component: loadView('Main'),
		meta: { title: 'MainPage | Meep', authwall: true }
	},
	{
		path: '/about',
		name: 'About',
		component: loadView('About'),
		meta: { title: 'About | Meep', authwall: false }
	},
	{
		path: '/leagues',
		name: 'Leagues',
		component: loadView('Leagues'),
		meta: { title: 'Your Leagues | Meep', authwall: true }
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	// eslint-disable-next-line no-unused-vars
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	}
});



router.afterEach(() => {
	NProgress.done();
});

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find(r => r.meta && r.meta.title);
	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
	if (to.matched.some(record => record.meta.authwall)) {
		if (store.state.authenticated) {
			next();
		} else {
			next({
				path: '/user/login',
				query: { redirect: to.fullPath }
			});
		}
	} else {
		next();
	}
});

export default router;
