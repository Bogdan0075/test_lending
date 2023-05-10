<template>
  <div class="slide">
    <img
      class="slide__img"
      width="740"
      height="400"
      :src="img"
      :alt="title"
    >
    <div class="slide-content">
      <h3 class="slide-content__title">
        {{ title }}
      </h3>
      <p class="slide-content__description">
        {{ description }}
      </p>
      <div class="author-info">
        <div class="author-avatar">
          <img
            width="40"
            height="40"
            :src="avatar"
            :alt="avatarName"
          >
        </div>
        <div class="author-details">
          <h5 class="author-details__name">
            {{ avatarName }}
          </h5>
          <p class="author-details__description">
            {{ avatarDescr }}
          </p>
        </div>
        <div class="rating">
          <svg
            class="rating__star"
            width="28"
            height="28"
          >
            <use :href="star" />
          </svg>
          <p class="rating__mark">
            {{ mark }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSaysCarouselSlide",
  props: {
    img: {
      type: String,
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
    avatar: {
      type: String,
      required: true,
    },
    avatarName: {
      type: String,
      required: true,
    },
    avatarDescr: {
      type: String,
      required: true,
    },
    star: {
      type: String,
      required: true,
    },
    mark: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.slide {
  position: relative;
  margin-bottom: 80px;
  margin-right: 56px;
}

.slide-content {
  position: absolute;
  border-radius: 16px;
  background-color: #ffffff;
  bottom: -80px;
  padding: 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 612px;
}

.slide-content__title {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.25;
  color: #1b1c57;
}

.slide-content__description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: #626687;
  margin-top: 16px;
}

.author-info {
  display: flex;
  margin-top: 24px;
}

.author-details {
  margin-left: 24px;
}

.author-details__name {
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: #0e1735;
}

.rating {
  display: flex;
  margin-left: auto;
  padding-top: 20px;
}

.rating__star {
  margin-right: 18px;
}

.rating__mark {
  font-weight: 600;
  font-size: 20px;
  color: #3c4563;
}

.author-details__description {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: #888b97;
  margin-top: 4px;
}
</style>
