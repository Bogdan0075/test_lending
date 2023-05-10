<template>
  <div class="header-carousel-slide">
    <div class="header-carousel-slide__content">
      <img
        :src="imageSrc"
        :width="width"
        :height="heigth"
        :alt="title"
        class="header-carousel-slide__image"
      >
      <div class="header-carousel-slide__text">
        <h4 class="header-carousel-slide__title">
          {{ title }}
        </h4>
        <p class="header-carousel-slide__description">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCarpuselSlide",
  components: {},
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    heigth: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.header-carousel-slide__content {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  width: fit-content;
  padding: 24px;
  border-radius: 32px;
}
.header-carousel-slide__text {
  margin-left: 16px;
}
.header-carousel-slide__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #1b1c57;
}
.header-carousel-slide__description {
  font-size: 12px;
  color: #68799f;
  padding-top: 2px;
  line-height: 1.66;
}
</style>
