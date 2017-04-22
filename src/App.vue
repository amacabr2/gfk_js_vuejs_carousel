<template>

    <div class="todoapp">

        <div class="header">
            <h1>Carousel</h1>
        </div>

        <div class="main">
            <carousel>
                <carousel-slide>
                    <div class="text_slide">Salut les gens</div>
                    <img src="http://lorempicsum.com/futurama/500/200/1" width="100%">
                </carousel-slide>
                <carousel-slide>
                    <div class="text_slide">Au revoir les gens</div>
                    <img src="http://lorempicsum.com/futurama/500/200/2" width="100%">
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
