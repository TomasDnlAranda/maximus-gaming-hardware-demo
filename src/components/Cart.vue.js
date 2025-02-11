export default (await import('vue')).defineComponent({
    props: ['cart'],
    computed: {
        totalPrice() {
            return this.cart.reduce((sum, item) => {
                let numericPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(/\./g, '')) : item.price;
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
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['close-cart', 'cart-item', 'remove-item', 'checkout-btn',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("cart") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.$emit('close-cart');
            } },
        ...{ class: ("close-cart") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ class: ("image-cart") },
        src: ("../../public/favicon_maximus.svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.cart.length);
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.cart))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((index)),
            ...{ class: ("cart-item") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("cart-item-info") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("cart-item-name") },
        });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("cart-item-price") },
        });
        (__VLS_ctx.formatPrice(item.price));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('remove-from-cart', index);
                } },
            ...{ class: ("remove-item") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("cart-footer") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("total") },
    });
    (__VLS_ctx.totalPriceFormatted);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("checkout-btn") },
    });
    ['cart', 'close-cart', 'image-cart', 'cart-item', 'cart-item-info', 'cart-item-name', 'cart-item-price', 'remove-item', 'cart-footer', 'total', 'checkout-btn',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
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
