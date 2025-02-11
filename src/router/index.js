import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Product from '../pages/Product.vue';

const routes = [
	{ path: '/', name: 'App', component: App },
	{ path: '/product/:slug', name: 'product', component: Product, props: true },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
