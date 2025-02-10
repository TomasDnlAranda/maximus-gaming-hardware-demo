import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
import CartIcon from './assets/icons/CartIcon.vue';
export default (await import('vue')).defineComponent({
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
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_componentsOption = {
        ProductList,
        Cart,
        CartIcon,
    };
    let __VLS_components;
    let __VLS_directives;
    ['cart-toggle',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("app") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
        ...{ class: ("header") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("header__start") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ("./assets/icons/Logo maximus 2.0.svg"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.toggleCartVisibility) },
        ...{ class: ("header__end cart-toggle") },
    });
    const __VLS_0 = {}.CartIcon;
    /** @type { [typeof __VLS_components.CartIcon, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("cart-icon") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("cart-icon") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    (__VLS_ctx.isCartVisible ? 'Ocultar carrito' : 'Mi carrito');
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({});
    const __VLS_6 = {}.ProductList;
    /** @type { [typeof __VLS_components.ProductList, ] } */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...{ 'onAddToCart': {} },
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onAddToCart': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onAddToCart: (__VLS_ctx.addToCart)
    };
    let __VLS_9;
    let __VLS_10;
    var __VLS_11;
    const __VLS_14 = {}.transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */ ;
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
        name: ("slide"),
    }));
    const __VLS_16 = __VLS_15({
        name: ("slide"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    if (__VLS_ctx.isCartVisible) {
        const __VLS_20 = {}.Cart;
        /** @type { [typeof __VLS_components.Cart, ] } */ ;
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
            ...{ 'onRemoveFromCart': {} },
            cart: ((__VLS_ctx.cart)),
        }));
        const __VLS_22 = __VLS_21({
            ...{ 'onRemoveFromCart': {} },
            cart: ((__VLS_ctx.cart)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        let __VLS_26;
        const __VLS_27 = {
            onRemoveFromCart: (__VLS_ctx.removeFromCart)
        };
        let __VLS_23;
        let __VLS_24;
        var __VLS_25;
    }
    __VLS_19.slots.default;
    var __VLS_19;
    ['app', 'header', 'header__start', 'header__end', 'cart-toggle', 'cart-icon',];
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
