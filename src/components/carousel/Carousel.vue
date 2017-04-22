<template>

    <div>
        <slot></slot>
        <button class="carousel_nav carousel_next" @click.prevent="next"></button>
        <button class="carousel_nav carousel_prev" @click.prevent="prev"></button>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                index: 0,
                slides: this.$children,
                direction: null
            }
        },

        mounted() {
            this.slides = this.$children;
            this.slides.forEach((slide, i) => {
                slide.index = i;
            });
        },

        computed: {

            slidesCount() {
                return this.slides.length;
            }

        },

        methods: {

            next() {
                this.index++;
                this.direction = 'right';
                if (this.index >= this.slidesCount) {
                    this.index = 0;
                }
            },

            prev() {
                this.index--;
                this.direction = 'left';
                if (this.index < 0) {
                    this.index = this.slidesCount - 1;
                }
            }

        }

    }

</script>

<style src="./style.css"></style>

<style>

    .carousel {
        position: relative;
    }

    .carousel_nav {
        position: absolute;
        top: 50%;
        margin-top: -31px;
        left: 10px;
        background: url("prev.png");
        width: 48px;
        height: 48px;
    }

    .carousel_nav.carousel_next {
        right: 10px;
        left: auto;
        background: url("next.png");
    }

</style>