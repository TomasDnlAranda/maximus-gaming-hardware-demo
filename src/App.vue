<template>
	<div class="app">
		<header class="header">
			<div class="header__start">
				<img src="./assets/icons/Logo maximus 2.0.svg" />
			</div>
			<button class="header__end cart-toggle" @click="toggleCartVisibility">
				<CartIcon class="cart-icon" />
				{{ isCartVisible ? 'Ocultar carrito' : 'Mi carrito' }}
				<span class="badge" v-if="cart.length > 0">{{ cart.length }}</span>
			</button>
		</header>

		<main class="main">
			<ProductList @add-to-cart="addToCart" />
		</main>

		<transition name="slide">
			<Cart
				v-if="isCartVisible"
				:cart="cart"
				@remove-from-cart="removeFromCart"
				@close-cart="isCartVisible = false"
			/>
		</transition>
	</div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
import CartIcon from './assets/icons/CartIcon.vue';

export default {
	components: {
		ProductList,
		Cart,
		CartIcon,
	},
	data() {
		return {
			cart: [],
			isCartVisible: false,
		};
	},
	methods: {
		addToCart(product) {
			this.cart.push(product);
		},
		removeFromCart(index) {
			this.cart.splice(index, 1);
		},
		toggleCartVisibility() {
			this.isCartVisible = !this.isCartVisible;
		},
	},
};
</script>

<style scoped>
* {
	font-family: 'Poppins', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	width: 100%;
	background-color: #f4f7fc;
}

.app {
	margin: 0 auto;
	background-color: #fff;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 40px;
}

header {
	text-align: center;
	color: white;
	background: linear-gradient(
		333deg,
		rgba(76, 175, 80, 1) 0%,
		rgba(42, 103, 45, 1) 50%,
		rgb(23, 42, 19) 98%
	);
	box-shadow: 2px -2px 38px -9px rgba(0, 0, 0, 0.75);
}

.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10px;
	align-items: center;
}

.header__start {
	display: flex;
}

.header__start img {
	width: 150px;
}

.cart-toggle {
	padding: 10px 20px;
	font-size: 12px;
	background-color: #2c6b2f;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	display: flex;
	align-items: center;
	position: relative;
}

.cart-toggle:hover {
	background-color: #276b24;
}

.cart-icon {
	width: 14px;
	margin-right: 8px;
}

.badge {
	background-color: #0bd600;
	color: white;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2px 8px;
	font-size: 12px;
	margin-left: 8px;
}

.main {
	flex-grow: 1;
}

.slide-enter-active,
.slide-leave-active {
	transition: transform 0.5s ease;
}

.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
}
</style>
