<template>
	<div class="cart">
		<h2>Carrito ({{ cart.length }} items)</h2>
		<ul>
			<li v-for="(item, index) in cart" :key="index" class="cart-item">
				<div class="cart-item-info">
					<span class="cart-item-name">{{ item.name }}</span>
					<span class="cart-item-price">${{ item.price.toFixed(2) }}</span>
				</div>
				<button class="remove-item" @click="$emit('remove-from-cart', index)">❌</button>
			</li>
		</ul>
		<div class="cart-footer">
			<p class="total">Total: ${{ totalPrice() }}</p>
			<button class="checkout-btn">Ir a pagar</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['cart'],
	methods: {
		totalPrice() {
			const total = this.cart.reduce((sum, item) => sum + item.price, 0);
			return total.toFixed(2);
		},
	},
};
</script>

<style scoped>
.cart {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	padding: 20px;
	background-color: #fff;
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
	transform: translateX(0);
}

h2 {
	text-align: center;
	font-size: 24px;
}

.cart-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
}

.cart-item-info {
	display: flex;
	flex-direction: column;
}

.cart-item-name {
	font-size: 16px;
	font-weight: 600;
}

.cart-item-price {
	font-size: 14px;
	color: #4caf50;
}

.remove-item {
	background-color: #f44336;
	color: white;
	padding: 5px 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.remove-item:hover {
	background-color: #d32f2f;
}

.cart-footer {
	margin-top: 20px;
	text-align: center;
}

.total {
	font-size: 18px;
	font-weight: bold;
}

.checkout-btn {
	background-color: #4caf50;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.checkout-btn:hover {
	background-color: #388e3c;
}

@media (min-width: 768px) {
	.cart {
		width: 450px;
	}
}
</style>
