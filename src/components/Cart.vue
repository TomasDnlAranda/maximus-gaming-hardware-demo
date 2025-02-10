<template>
	<div class="cart">
		<button class="close-cart" @click="$emit('close-cart')">✕</button>
		<h2>
			<img class="image-cart" src="../../public/favicon_maximus.svg" />
			<span>🛒 ({{ cart.length }} productos)</span>
		</h2>
		<ul>
			<li v-for="(item, index) in cart" :key="index" class="cart-item">
				<div class="cart-item-info">
					<span class="cart-item-name">{{ item.name }}</span>
					<span class="cart-item-price">{{ formatPrice(item.price) }}</span>
				</div>
				<button class="remove-item" @click="$emit('remove-from-cart', index)">✕</button>
			</li>
		</ul>
		<div class="cart-footer">
			<p class="total">Total: {{ totalPriceFormatted }}</p>
			<button class="checkout-btn">Ir a pagar</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['cart'],
	computed: {
		totalPrice() {
			return this.cart.reduce((sum, item) => {
				let numericPrice =
					typeof item.price === 'string' ? parseFloat(item.price.replace(/\./g, '')) : item.price;
				return sum + numericPrice;
			}, 0);
		},
		totalPriceFormatted() {
			return this.formatCurrency(this.totalPrice);
		},
	},
	methods: {
		formatPrice(value) {
			let numericValue = typeof value === 'string' ? parseFloat(value.replace(/\./g, '')) : value;
			return this.formatCurrency(numericValue);
		},
		formatCurrency(value) {
			return new Intl.NumberFormat('es-AR', {
				style: 'currency',
				currency: 'ARS',
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			}).format(value);
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
	max-width: 400px;
	height: 100%;
	background: #fff;
	box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
	padding: 20px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	border-left: 1px solid #e0e0e0;
}

.close-cart {
	position: absolute;
	top: 15px;
	right: 15px;
	background: transparent;
	border: none;
	font-size: 24px;
	color: #888;
	cursor: pointer;
	transition: color 0.3s ease;
}

.image-cart {
	width: 50px;
}

.close-cart:hover {
	color: #333;
}

h2 {
	margin-bottom: 20px;
	text-align: center;
	font-size: 22px;
	color: #333;
	display: flex;
	align-items: center;
	margin-top: 30px;
	justify-content: space-between;
}

ul {
	list-style: none;
	padding: 0;
	margin: 0;
	flex: 1;
}

.cart-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	border-bottom: 1px solid #f0f0f0;
	transition: background 0.3s ease;
}

.cart-item:hover {
	background: #f9f9f9;
}

.cart-item-info {
	display: flex;
	flex-direction: column;
}

.cart-item-name {
	font-size: 16px;
	font-weight: 500;
	color: #555;
}

.cart-item-price {
	font-size: 14px;
	color: #009688;
	margin-top: 5px;
}

.remove-item {
	background: transparent;
	border: none;
	font-size: 18px;
	color: #e57373;
	cursor: pointer;
	transition: color 0.3s ease;
}

.remove-item:hover {
	color: #d32f2f;
}

.cart-footer {
	border-top: 1px solid #f0f0f0;
	padding-top: 15px;
	text-align: center;
}

.total {
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 15px;
	color: #333;
}

.checkout-btn {
	width: 100%;
	padding: 12px;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	background: linear-gradient(45deg, #26a69a, #00796b);
	border: none;
	border-radius: 25px;
	cursor: pointer;
	font-family: 'Poppins';
	transition: background 0.3s ease;
}

.checkout-btn:hover {
	background: linear-gradient(45deg, #00796b, #26a69a);
}
</style>
