<template>
    <div>
        <carousel>
            <carousel-slide>
                Salut les gens
            </carousel-slide>
            <carousel-slide>
                Aurevoir les gens
            </carousel-slide>
        </carousel>
    </div>
</template>

<script>

    import Carousel from './components/carousel/Carousel'
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
