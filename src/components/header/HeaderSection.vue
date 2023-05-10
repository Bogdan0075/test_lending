<template>
  <Container class="hero">
    <header>
      <HeaderNav :nav-bar-items="navBarItems" />
      <div class="hero__content">
        <h1 class="hero__title">
          Find The Place To Live
          <span class="hero__title-font">Your Dreams</span> Easily Here
        </h1>
        <div class="hero__divider" />
        <p class="hero__description">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <HeaderInput />
        <p class="hero__description">
          Our Partnership
        </p>
        <ul class="hero__partners">
          <li
            v-for="partner in partners"
            :key="partner.alt"
            class="partners__item"
          >
            <img
              :src="partner.url"
              :alt="partner.alt"
              :width="partner.width"
              :height="partner.height"
            >
          </li>
        </ul>
      </div>
    </header>
    <HeaderCarousel class="carousel" />
  </Container>
</template>

<script>
import HeaderInput from "./HeaderInput.vue";
import Container from "../Container.vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderCarousel from "./HeaderCarousel.vue";

export default {
  name: "HeroSection",
  components: {
    HeaderInput,
    HeaderNav,
    HeaderCarousel,
    Container,
  },
  data() {
    return {
      navBarItems: [
        { id: 1, title: "About Us" },
        { id: 2, title: "Article" },
        { id: 3, title: "Property" },
      ],
      partners: [
        {
          url: "/img/partnership_traveloka.png",
          alt: "partnership traveloka",
          width: 83,
          height: 64,
        },
        {
          url: "/img/partnership_tiket.png",
          alt: "partnership tiket",
          width: 83,
          height: 64,
        },
        {
          url: "/img/partnership_airbnb.png",
          alt: "partnership airbnb",
          width: 83,
          height: 64,
        },
        {
          url: "/img/partnership_tripadvisor.png",
          alt: "partnership tripadvisor",
          width: 83,
          height: 64,
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel {
  position: absolute;
  right: -128px;
  bottom: 39px;
}
.hero {
  position: relative;
  padding-left: 120px;
  padding-top: 40px;
  height: 720px;
  background-image: url(@/assets/hero-img.png);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
  overflow: hidden;
}
.hero__content {
  width: 496px;
}
.hero__title {
  font-weight: 900;
  letter-spacing: -1.5px;
  font-size: 40px;
  font-style: bold;
  color: #1b1c57;
  width: 365px;
  line-height: 1.2;
  text-transform: capitalize;
  margin-top: 104px;
  margin-bottom: 24px;
}
.hero__title-font {
  color: #ffffff;
  text-shadow: -1px -1px 0 #1b1c57, 1px -1px 0 #1b1c57, -1px 1px 0 #1b1c57,
    1px 1px 0 #1b1c57;
  -webkit-text-stroke: 1px solid #1b1c57;
}
.hero__divider {
  width: 258px;
  border-bottom: 4px solid #fcd34d;
  margin-bottom: 28px;
}
.hero__description {
  font-size: 16px;
  font-weight: 400;
  color: #626687;
  line-height: 1.75;
}
.hero__partners {
  display: flex;
}
.partners__item {
  margin-right: 32px;
  align-items: center;
}
</style>
