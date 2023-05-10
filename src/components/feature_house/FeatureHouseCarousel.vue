<template>
  <section class="slide_section">
    <Carousel
      :per-page="slidesPerCarouse"
      :pagination-enabled="false"
    >
      <Slide
        v-for="house in filteredHouses"
        :key="house.id"
        class="slide"
      >
        <FutureHouseCarouselSlide
          :title="house.title"
          :avatar="house.person.avatar"
          :img="house.img"
          :percon-name="house.person.perconName"
          :price="house.price"
          :person-description="house.person.personDescription"
        />
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import { database } from "/src/assets/databse.json";
import { Carousel, Slide } from "vue-carousel";
import FutureHouseCarouselSlide from "./FutureHouseCarouselSlide.vue";
export default {
  name: "FeautereHouseCarousel",
  components: {
    Carousel,
    Slide,
    FutureHouseCarouselSlide,
  },
  props: {
    activeButton: {
      type: null,
      required: true,
    },
  },
  data() {
    return {
      houses: database,
    };
  },
  computed: {
    filteredHouses() {
      if (!this.activeButton) {
        return this.houses;
      }
      return this.houses.filter(({ type }) => {
        return type.includes(this.activeButton);
      });
    },
    slidesPerCarouse() {
      return window.innerWidth > 1200 ? 3 : 1;
    },
  },
};
</script>

<style scoped>
.slide:not(:last-child) {
  margin-right: 40px;
}
.slide_section {
  margin-left: 40px;
}
.VueCarousel-slide {
  flex-basis: initial;
}
@media screen and (min-width: 1441px) {
  .slide:not(:last-child) {
    margin-right: 170px;
  }
}
</style>
