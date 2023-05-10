<template>
  <section class="slide-house">
    <div class="slide-house__info">
      <img
        class="slide-house__img"
        :src="img"
        :alt="img.title"
        width="340"
        height="382"
      >
      <h4 class="slide-house__title">
        {{ title }}
      </h4>
      <p class="slide-house__price">
        {{ price }}
      </p>
    </div>
    <div class="slide-house__person">
      <img
        class="slide-house__avatar"
        :src="avatar"
        :alt="perconName"
        width="40"
        height="40"
      >
      <div class="slide-house__avatar-position">
        <h5 class="slide-house__percon-name">
          {{ perconName }}
        </h5>
        <p class="slide-house__person-description">
          {{ personDescription }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FutureHouseCarouselSlide",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    perconName: {
      type: String,
      required: true,
    },
    personDescription: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.slide-house {
  margin-top: 40px;
}
.slide-house__item {
  margin-right: 40px;
}
.slide-house__title {
  font-weight: 600;
  font-size: 24px;
  line-height: 1.3;
  color: #0e1735;
  margin-top: 24px;
  margin-bottom: 8px;
}
.slide-house__price {
  font-weight: 500;
  font-size: 20px;
  color: #3c4563;
  line-height: 1.6;
  margin-bottom: 24px;
}
.slide-house__person {
  display: flex;
  align-items: center;
}
.slide-house__percon-name {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  color: #0e1735;
  margin-bottom: 4px;
}
.slide-house__person-description {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: #888b97;
}
.slide-house__avatar-position {
  margin-left: 16px;
}
</style>
