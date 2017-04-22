<template>

    <div>
        <slot></slot>
        <button class="carousel_nav carousel_next" @click.prevent="next"></button>
        <button class="carousel_nav carousel_prev" @click.prevent="prev"></button>
        <div class="carousel_pagination">
            <button v-for="n in slidesCount" @click="goto(n - 1)" :class="{active: n-1 == index}"></button>
        </div>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                index: 0,
                slides: this.$children,
                direction: 'right'
            }
        },

        mounted() {
            this.slides = this.$children;
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
            },

            goto(index) {
                this.direction = index > this.index ? 'right' : 'left';
                this.index = index
            }

        }

    }

</script>

<style src="./style.css"></style>

<style>

    .carousel {
        position: relative;
        overflow: hidden;
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

    .carousel_pagination {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        text-align: center;
    }

    .carousel_pagination button {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-color: #000000;
        opacity: 0.8;
        border-radius: 10px;
        margin: 0 2px;
    }

    .carousel_pagination button.active {
        background-color: rgba(108,93,138,0.93)
    }

</style>