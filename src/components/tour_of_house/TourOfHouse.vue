<template>
  <Container class="house-tour">
    <ul class="house-tour__position">
      <li class="position__item">
        <p class="house-tour__headind">
          Ready to Sell!
        </p>
        <h2 class="house-tour__title">
          Let’s Tour And See Our House!
        </h2>
        <p class="house-tour__description">
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>
        <h4 class="house-tour__list-title">
          House Detail
        </h4>
        <ul class="house-tour__list">
          <li
            v-for="room of roomComposition"
            :key="room.id"
            class="house-tour__list-item"
          >
            <svg class="house-tour-img"><use :href="room.url" /></svg>
            <p>{{ room.title }}</p>
          </li>
        </ul>
        <p class="hr" />
        <ul class="house-tour__agent-list">
          <li>
            <img
              class="house-tour__agent-avatar"
              src="/img/dianne_russell.png"
              alt="Dianne Russell"
            >
          </li>
          <li>
            <h4 class="house-tour__agent-name">
              Dianne Russell
            </h4>
            <p class="house-tour__agent-position">
              Manager Director
            </p>
          </li>
          <li>
            <button class="house-tour__agent-contact-button">
              Contact Now
            </button>
          </li>
        </ul>
      </li>
      <li class="position__item">
        <div class="position">
          <img
            src="img/first_tour_house.png"
            alt="tousr house"
          >
          <TourOfHouseSlider class="position-slider" />
        </div>
      </li>
    </ul>
  </Container>
</template>

<script>
import Container from "../Container.vue";
import TourOfHouseSlider from "./TourOfHouseSlider.vue";
export default {
  name: "TurnOfHouse",
  components: { Container, TourOfHouseSlider },
  data() {
    return {
      roomComposition: [
        {
          id: "1",
          title: "4 Bedrooms",
          url: "sprite.svg#icon-bed",
        },
        {
          id: "2",
          title: "1 Carport ",
          url: "sprite.svg#icon-car-garage",
        },
        {
          id: "3",
          title: "2 Bathrooms ",
          url: "sprite.svg#icon-bath",
        },
        {
          id: "4",
          title: "2 Floors",
          url: "sprite.svg#icon-handrail",
        },
      ],
    };
  },
};
</script>

<style scoped>
.position {
  position: relative;
}
.position-slider {
  position: absolute;
  bottom: -40px;
  left: -40px;
}
.house-tour {
  margin-top: 120px;
  width: 1200px;
}
.house-tour__headind {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #f59e0b;
  line-height: 1.28;
  position: relative;
  padding-left: 40px;
}
.house-tour__headind:before {
  content: "";
  display: block;
  width: 32px;
  height: 1px;
  background-color: #f59e0b;
  position: absolute;
  left: 0;
  bottom: 10px;
}
.house-tour__position {
  display: flex;
  justify-content: space-between;
}
.position__item:not(:last-child) {
  padding-top: 30px;
}
.house-tour__title {
  color: #1b1c57;
  font-style: normal;
  font-weight: 600;
  margin-top: 12px;
  font-size: 32px;
  margin-left: 40px;
  line-height: 1.25;
}
.house-tour__description {
  font-weight: 400;
  font-size: 16px;
  color: #626687;
  margin-top: 18px;
  margin-left: 40px;
  width: 420px;
  line-height: 1.75;
}
.house-tour__list-title {
  font-style: normal;
  font-weight: 600;
  margin-left: 40px;
  font-size: 16px;
  line-height: 1.75;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #1b1c57;
}
.house-tour__list {
  margin-left: 40px;
  columns: 2;
  width: fit-content;
}
.house-tour-img {
  width: 32px;
  height: 32px;
  margin-right: 16px;
}
.house-tour__list-item {
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  width: 193.5px;
  line-height: 1.75;
  color: #3c4563;
  margin-bottom: 32px;
}
.hr {
  border-top: 2px solid #f0f3fd;
  width: 440px;
  margin-left: 40px;
  margin-bottom: 32px;
}
.house-tour__list-item:nth-child(1) {
  margin-bottom: 16px;
  margin-right: 39px;
}
.house-tour__list-item:nth-child(3) {
  margin-bottom: 16px;
}
.house-tour__agent-list {
  margin-left: 40px;
  display: flex;
  align-items: center;
}
.house-tour__agent-avatar {
  margin-right: 24px;
}
.house-tour__agent-name {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #0e1735;
}
.house-tour__agent-position {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #888b97;
}
.house-tour__agent-contact-button {
  width: 163px;
  height: 48px;
  background: #10b981;
  color: #ffff;
  margin-left: 57px;
  border-radius: 32px;
}
.house-tour__agent-details {
  display: flex;
  flex-direction: column;
}
</style>
