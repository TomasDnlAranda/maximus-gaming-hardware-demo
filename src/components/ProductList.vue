<template>
	<div class="product-list-container">
		<div
			ref="scrollContainer"
			class="product-list"
			@mousedown="startScroll"
			@mouseup="stopScroll"
			@mouseleave="stopScroll"
			@mousemove="onScroll"
		>
			<div v-for="product in products" :key="product.id" class="product">
				<img :src="product.image" :alt="product.name" class="product-image" />
				<div class="product-info">
					<h3 class="product-name">{{ product.name }}</h3>
					<p class="product-price">${{ product.price.toLocaleString() + '00' }}</p>
					<button class="add-to-cart" @click="addToCart(product)">Agregar al carrito</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isScrolling: false,
			startX: 0,
			scrollLeft: 0,
			products: [
				{
					id: 1,
					name: 'Notebook Hp Dy5885wm 15.6" Intel I5 1235u 8gb Ram 256gb Ssd W11- Spruce Blue',
					price: 657.9,
					image:
						'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/HP-15-DY5885WM_600.jpg',
				},
				{
					id: 2,
					name: 'Placa de Video Asus Amd Radeon Rx 7600 Dual v2 8gb Gddr6 Oc',
					price: 367.6,
					image:
						'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0IH2-M0AA00_600.jpg',
				},
				{
					id: 3,
					name: 'Mouse Logitech G502 Lightspeed Inalambrico',
					price: 92.9,
					image:
						'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/910-005566_600.jpg',
				},
				{
					id: 4,
					name: 'Memoria Ram Kingston Fury Beast 8gb 3200 Mhz Ddr4',
					price: 22.9,
					image:
						'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/KF432C16BB-8_600.jpg',
				},
				{
					id: 5,
					name: 'Disco Solido Ssd 512gb Verbatim Vi3000 m.2 Nvme Pcie X4 4.0',
					price: 39.8,
					image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/49374_600.jpg',
				},
				{
					id: 6,
					name: 'Disco Solido Ssd 256gb Verbatim Vi3000 m.2 2280 Nvme Pcie 4',
					price: 21.9,
					image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/49373_600.jpg',
				},
			],
		};
	},
	methods: {
		startScroll(event) {
			this.isScrolling = true;
			// Posición inicial relativa al contenedor
			this.startX = event.pageX - this.$refs.scrollContainer.offsetLeft;
			this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
		},
		stopScroll() {
			this.isScrolling = false;
		},
		onScroll(event) {
			if (!this.isScrolling) return;
			event.preventDefault();
			const x = event.pageX - this.$refs.scrollContainer.offsetLeft;
			const walk = (x - this.startX) * 2; // Velocidad del scroll
			this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk;
		},
		addToCart(product) {
			this.$emit('add-to-cart', product);
		},
	},
};
</script>

<style scoped>
.product-list-container {
	overflow: hidden;
	margin: 0 auto;
}

.product-list {
	display: flex;
	flex-wrap: nowrap;
	gap: 20px;
	padding: 10px;
	overflow-x: auto;
	scroll-behavior: smooth;
	width: 100%;
	overflow: hidden;
	user-select: none;
	cursor: grab;
	padding-bottom: 50px;
}

.product {
	flex: 0 0 250px;
	background-color: #fff;
	border-radius: 15px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	text-align: start;
	padding: 15px;
	transition: transform 0.3s ease-in-out;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 0 5px;
}

.product:hover {
	transform: scale(1.05);
}

.product-image {
	width: 100%;
	height: auto;
	border-radius: 10px;
}

.product-info {
	margin-top: 10px;
}

.product-name {
	font-size: 18px;
	font-weight: 600;
	color: #333;
	margin: 0;
}

.product-price {
	font-size: 40px;
	font-weight: bold;
	color: #1e5320;
	margin: 10px 0;
}

.add-to-cart {
	background-color: #4caf50;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: background-color 0.3s ease;
}

.add-to-cart:hover {
	background-color: #388e3c;
}
</style>
