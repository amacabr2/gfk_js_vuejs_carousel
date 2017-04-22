<template>

    <div class="todoapp">

        <div class="header">
            <h1>Carousel</h1>
        </div>

        <div class="main">
            <carousel>
                <carousel-slide v-for="n in slides">
                    <div class="text_slide">Slide n°{{ n }}</div>
                    <img :src="'http://lorempicsum.com/futurama/500/200/' + n" width="100%">
                </carousel-slide>
            </carousel>
        </div>

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
