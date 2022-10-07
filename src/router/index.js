import { createRouter, createWebHistory } from 'vue-router';
import PotionShop from '../views/PotionShop.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Potion',
			component: PotionShop,
		},
		{
			path: '/ShitPost',
			name: 'ShitPost',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/PotionShitPost.vue'),
		},
	],
});

export default router;
