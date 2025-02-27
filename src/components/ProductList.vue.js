export default (await import('vue')).defineComponent({
    data() {
        return {
            isScrolling: false,
            startX: 0,
            scrollLeft: 0,
            products: [
                {
                    id: 1,
                    name: 'Notebook Hp Dy5885wm 15.6" Intel I5 1235u 8gb Ram 256gb Ssd W11- Spruce Blue',
                    price: '657.900',
                    image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/HP-15-DY5885WM_600.jpg',
                    slug: 'notebook-hp-dy5885wm-15-6-intel-i5-1235u-8gb-ram-256gb-ssd-w11-spruce-blue',
                },
                {
                    id: 2,
                    name: 'Placa de Video Asus Amd Radeon Rx 7600 Dual v2 8gb Gddr6 Oc',
                    price: '367.600',
                    image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90YV0IH2-M0AA00_600.jpg',
                    slug: 'placa-de-video-asus-amd-radeon-rx-7600-dual-v2-8gb-gddr6-oc',
                },
                {
                    id: 3,
                    name: 'Mouse Logitech G502 Lightspeed Inalambrico',
                    price: '92.900',
                    image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/910-005566_600.jpg',
                    slug: 'mouse-logitech-g502-lightspeed-inalambrico',
                },
                {
                    id: 4,
                    name: 'Memoria Ram Kingston Fury Beast 8gb 3200 Mhz Ddr4',
                    price: '22.900',
                    image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/KF432C16BB-8_600.jpg',
                    slug: 'memoria-ram-kingston-fury-beast-8gb-3200-mhz-ddr4',
                },
                {
                    id: 5,
                    name: 'Disco Solido Ssd 512gb Verbatim Vi3000 m.2 Nvme Pcie X4 4.0',
                    price: '39.800',
                    image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/49374_600.jpg',
                    slug: 'disco-solido-ssd-512gb-verbatim-vi3000-m-2-nvme-pcie-x4-4-0',
                },
                {
                    id: 6,
                    name: 'Disco Solido Ssd 256gb Verbatim Vi3000 m.2 2280 Nvme Pcie 4',
                    price: '21.900',
                    image: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/49373_600.jpg',
                    slug: 'disco-solido-ssd-256gb-verbatim-vi3000-m-2-2280-nvme-pcie-4',
                },
            ],
        };
    },
    methods: {
        startScroll(event) {
            this.$refs.scrollContainer.style.scrollBehavior = 'auto';
            this.isScrolling = true;
            let pageX;
            if (event.type === 'touchstart') {
                pageX = event.touches[0].pageX;
            }
            else {
                pageX = event.pageX;
            }
            this.startX = pageX - this.$refs.scrollContainer.offsetLeft;
            this.scrollLeft = this.$refs.scrollContainer.scrollLeft;
        },
        stopScroll() {
            this.isScrolling = false;
            this.$refs.scrollContainer.style.scrollBehavior = 'smooth';
        },
        onScroll(event) {
            if (!this.isScrolling)
                return;
            event.preventDefault();
            let pageX;
            if (event.type === 'touchmove') {
                pageX = event.touches[0].pageX;
            }
            else {
                pageX = event.pageX;
            }
            const walk = (pageX - this.startX) * 1.5;
            this.$refs.scrollContainer.scrollLeft = this.scrollLeft - walk;
        },
        addToCart(product) {
            this.$emit('add-to-cart', product);
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['add-to-cart',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("product-list-container") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onMousedown: (__VLS_ctx.startScroll) },
        ...{ onMouseup: (__VLS_ctx.stopScroll) },
        ...{ onMouseleave: (__VLS_ctx.stopScroll) },
        ...{ onMousemove: (__VLS_ctx.onScroll) },
        ...{ onTouchstart: (__VLS_ctx.startScroll) },
        ...{ onTouchmove: (__VLS_ctx.onScroll) },
        ...{ onTouchend: (__VLS_ctx.stopScroll) },
        ref: ("scrollContainer"),
        ...{ class: ("product-list") },
    });
    // @ts-ignore navigation for `const scrollContainer = ref()`
    /** @type { typeof __VLS_ctx.scrollContainer } */ ;
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((product.id)),
            ...{ class: ("product") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((product.image)),
            alt: ((product.name)),
            ...{ class: ("product-image") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("product-info") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("product-name") },
        });
        (product.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: ("product-price") },
        });
        (product.price.toLocaleString() + ' ARS');
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.addToCart(product);
                } },
            ...{ class: ("add-to-cart") },
        });
    }
    ['product-list-container', 'product-list', 'product', 'product-image', 'product-info', 'product-name', 'product-price', 'add-to-cart',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {
        'scrollContainer': __VLS_nativeElements['div'],
    };
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
