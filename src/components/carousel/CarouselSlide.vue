<template>

    <transition name="slide">
        <div v-show="visible">
            <slot></slot>
        </div>
    </transition>

</template>

<script>

    export default {

        data() {
            return {
                index: 0
            }
        },

        computed: {

            visible() {
                return this.index === this.$parent.index
            }

        }

    }

</script>

<style>

    .slide-enter-active {
        animation: slideIn .5s;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

</style>