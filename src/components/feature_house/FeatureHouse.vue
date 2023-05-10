<template>
  <section class="featureHouse">
    <p class="feature-house__heading">
      Our Recommendation
    </p>
    <div class="feature-house__content">
      <h2 class="feature-house__title">
        Featured House
      </h2>
      <ul class="feature-house__buttonList">
        <li
          v-for="value in buttonValue"
          :key="value.id"
          class="feature-house__button-item"
          :class="{
            'feature-house__buttonList-active': activeButtonId === value.id,
          }"
          @click="handleButtonClick(value.id)"
        >
          <button>
            <div class="feature-house__button-svg">
              <svg class="feature-house-svg"><use :href="value.href" /></svg>
              <p style="margin-left: 8px">
                {{ value.value }}
              </p>
            </div>
          </button>
        </li>
      </ul>
      <div>
        <button class="feature-house__button">
          <svg class="feature-house__button-photo">
            <use href="sprite.svg#icon-prev" />
          </svg>
        </button>
        <button class="feature-house__button">
          <svg class="feature-house__button-photo">
            <use href="sprite.svg#icon-next" />
          </svg>
        </button>
      </div>
    </div>
    <FeatureHouseCarousel :active-button="activeButtonValue" />
  </section>
</template>

<script>
import FeatureHouseCarousel from "./FeatureHouseCarousel.vue";

export default {
  name: "FeautureHouse",
  components: { FeatureHouseCarousel },
  data() {
    return {
      buttonValue: [
        { id: 1, value: "House", href: "sprite.svg#icon-house" },
        { id: 2, value: "Villa", href: "sprite.svg#icon-villa" },
        { id: 3, value: "Apartment", href: "sprite.svg#icon-apartment" },
      ],
      activeButtonId: null,
      activeButtonValue: null,
    };
  },
  methods: {
    handleButtonClick(buttonId) {
      if (this.activeButtonId === buttonId) {
        this.activeButtonId = null;
        this.activeButtonValue = null;
      } else {
        this.activeButtonId = buttonId;
        this.activeButtonValue = this.buttonValue.find(
          (item) => item.id === buttonId
        ).value;
      }
    },
  },
};
</script>

<style scoped>
.feature-house__content {
  display: flex;
}

.feature-house__heading {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #f59e0b;
  position: relative;
  padding-left: 40px;
  line-height: 1.28;
}
.feature-house__heading:before {
  content: "";
  display: block;
  width: 32px;
  height: 1px;
  background-color: #f59e0b;
  position: absolute;
  left: 0;
  bottom: 10px;
}

.feature-house__button-item:not(:last-child) {
  margin-right: 32px;
}

.feature-house__button-item {
  border: 1px solid #e0e3eb;
  color: #888b97;
  height: 52px;
  padding: 12px 24px;
  border-radius: 32px;
  display: flex;
  cursor: pointer;
}

.feature-house__buttonList {
  display: flex;
  align-items: center;
  margin-right: 137px;
}

.feature-house__button-svg {
  display: flex;
  align-items: center;
}

.feature-house-svg {
  width: 24px;
  height: 24px;
  fill: #888b97;
}
.feature-house__buttonList-active {
  background: #d1fae5;
  color: #10b981;
}
.feature-house__buttonList-active svg use {
  fill: #10b981;
}

.feature-house__title {
  margin-right: 137px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #1b1c57;
  line-height: 1.25;
  margin-left: 40px;
  margin-top: 12px;
}

.feature-house__button {
  width: 60px;
  height: 52px;
  background: #e0e3eb;
  border-radius: 32px;
}

.feature-house__button-item:not(:last-child) {
  margin-left: 10px;
}

.feature-house__button:hover {
  background-color: #10b981;
}
.feature-house__button:hover svg use {
  fill: #ffffff;
}

.feature-house__button-photo {
  width: 28px;
  height: 28px;
  vertical-align: middle;
  fill: #3c4563;
}

.feature-house__button:first-child {
  margin-right: 16px;
}

.featureHouse {
  margin-top: 120px;
  margin-left: 120px;
}
</style>
