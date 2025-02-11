<template>
	<div class="product-detail">
		<h1>Detalles del Producto</h1>
		<p>ID del Producto: {{ id }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'ProductDetail',
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const route = useRoute();
		const productId = route.params.id;
		return { id: productId };
	},
});
</script>
