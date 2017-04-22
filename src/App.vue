<template>
    <div>
        <carousel>
            <carousel-slide>
                <img src="http://lorempicsum.com/futurama/630/300/1">
            </carousel-slide>
            <carousel-slide>
                <img src="http://lorempicsum.com/futurama/630/300/2">
            </carousel-slide>
        </carousel>
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

</style>
