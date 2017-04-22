<template>

    <div>

        <carousel>
            <carousel-slide v-for="n in slides" :index="n - 1">
                <div class="text_slide">Slide n°{{ n }}</div>
                <img :src="'http://lorempicsum.com/futurama/500/200/' + n" width="100%">
            </carousel-slide>
        </carousel>

        <button type="button" @click="addSlide">Ajouter un slide</button>
        <button type="button" @click="removeSlide">Enlever un slide</button>

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
//                    this.$swal({
//                        title: "Désolé..",
//                        text: "Il n'y a plus d'image pour futurama en stock",
//                        imageUrl: "smile2.png"
//                    });
                    alert("Désolé... il n'a plus d'image pour futurama en stock");
                }
            },

            removeSlide() {
                if (this.slides > 2) {
                    this.slides--;
                } else {
//                    this.$swal({
//                        title: "Ooooh...",
//                        text: "On va laisser au moin 2 slides sinon ce n'est plus un carrousel",
//                        imageUrl: "smile.png"
//                    });
                    alert("Ooooh... on va laisser au moin 2 slides sinon ce n'est plus un carousel :)");
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
