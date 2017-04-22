<template>

    <div>

        <carousel>
            <carousel-slide v-for="n in slides" :index="n - 1">
                <div class="text_slide">Slide n°{{ n }}</div>
                <img :src="'http://lorempicsum.com/futurama/500/200/' + n" width="100%">
            </carousel-slide>
        </carousel>

        <button type="button" @click="addSlide">Ajouter un slide</button>

    </div>

</template>

<script>

    import Carousel from './components/carousel/Carousel.vue'
    import CarouselSlide from './components/carousel/CarouselSlide.vue'

    export default {

        name: 'app',

        components: {
            Carousel,
            CarouselSlide
        },

        data() {
            return {
                slides: 5,
            }
        },

        methods: {

            addSlide() {
                if (this.slides < 9) {
                    this.slides++;
                } else {
                    alert("Plus d'image disponible pour futurama");
                }
            }

        }

    }

</script>

<style>

    .text_slide {
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        top: 50%;
        color: #ffffff;
        font-size: 16px;
    }

</style>
