<template>

    <div>
        <slot></slot>
        <button class="carousel_nav carousel_next" @click.prevent="next">Suivant</button>
        <button class="carousel_nav carousel_prev" @click.prevent="prev">Précédent</button>
    </div>

</template>

<script>

    export default {

        data() {
            return {
                index: 0,
                slides: this.$children
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
            },

            prev() {
                this.index--;
            }

        }

    }

</script>