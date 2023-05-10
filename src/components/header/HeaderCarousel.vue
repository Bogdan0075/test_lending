<template>
  <Carousel
    class="header-carousel__slider"
    :scroll-per-page="false"
    :per-page="3"
    :pagination-enabled="false"
    :autoplay="false"
    :autoplay-interval="5000"
    :loop="true"
  >
    <slide
      v-for="slide in carousel"
      :key="slide.id"
      class="header-carousel__slide"
    >
      <HeaderCarpuselSlide
        class="header-carousel__slide-content"
        :title="slide.title"
        :image-src="slide.img"
        :width="slide.width"
        :heigth="slide.height"
        :description="slide.description"
      />
    </slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import HeaderCarpuselSlide from "./HeaderCarpuselSlide.vue";
export default {
  name: "HeaderCarousel",
  components: { Carousel, Slide, HeaderCarpuselSlide },
  data() {
    return {
      carousel: [
        {
          id: 1,
          img: "./img/header_people.png",
          title: "1K+ People",
          description: "Successfully Getting Home",
          width: 112,
          height: 56,
        },
        {
          id: 2,
          img: "./img/header_house.png",
          title: "56 Houses",
          description: "Sold Monthly",
          width: 56,
          height: 56,
        },
        {
          id: 3,
          img: "./img/header_women.png",
          title: "4K+",
          description: "People Looking for New Homes ",
          width: 56,
          height: 56,
        },
        {
          id: 4,
          img: "./img/header_women.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
        {
          id: 6,
          img: "./img/header_house.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
        {
          id: 7,
          img: "./img/header_house.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
        {
          id: 8,
          img: "./img/header_house.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
        {
          id: 9,
          img: "./img/header_house.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
        {
          id: 10,
          img: "./img/header_house.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
        {
          id: 11,
          img: "./img/header_house.png",
          title: "4K+",
          description: "People ",
          width: 56,
          height: 56,
        },
      ],
    };
  },
};
</script>

<style scoped>
.header-carousel__slide {
  margin-right: 16px;
}
.VueCarousel-slide:first-child {
  flex-basis: 328px;
}
.VueCarousel-slide {
  flex-basis: initial;
}

.header-carousel__slider {
  width: 800px;
}
</style>
