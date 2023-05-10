<template>
  <section>
    <div class="slider">
      <img
        v-for="(image, index) in images"
        :key="index"
        class="slider__item"
        :src="image.src"
        :width="image.width"
        :height="image.height"
      >
    </div>
  </section>
</template>
<script>
export default {
  name: "TourOfHouseSlider",
  data() {
    return {
      images: [
        { src: "img/tour_slider_first.png", width: 296, heigth: 168 },
        { src: "img/tour_slider_second.png", width: 96, heigth: 80 },
        { src: "img/tour_slider_first.png", width: 96, heigth: 80 },
      ],
      activeIndex: 0,
      enlargeIndex: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.changeImage();
    }, 5000);
  },
  methods: {
    changeImage() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
  },
};
</script>
<style scoped>
.slider {
  display: flex;
  align-items: flex-end;
}
.slider__item:not(:last-child) {
  margin-right: 12px;
}
.active {
  width: 296px;
  height: 168px;
}
</style>
