<template>
	<div v-if="product" class="product-detail">
		<h2>{{ product.name }}</h2>
		<img :src="product.image" :alt="product.name" />
		<p>Precio: ${{ product.price.toLocaleString() }}</p>
		<button @click="$emit('add-to-cart', product)">Agregar al carrito</button>
	</div>
</template>

<script>
export default {
	props: ['product'],
};
</script>

<style>
.product-detail {
	margin-top: 20px;
	padding: 10px;
	border: 1px solid #ccc;
}
</style>
