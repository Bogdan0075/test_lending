<template>
  <div>
    <div class="footer__logo">
      <img
        class="footer__logo-image"
        src="/img/logo.png"
        alt="logo"
      >
      <p class="footer__logo-text">
        Hounter
      </p>
    </div>
    <p class="footer__description">
      We provide information about properties such as houses, villas and
      apartments to help people find their dream home
    </p>
    <ul class="footer__networks">
      <li
        v-for="network in networks"
        :key="network.id"
        class="footer__networks-elem"
      >
        <a href="">
          <svg
            width="32"
            height="32"
          ><use :href="network.url" /></svg></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FooterDescripton",
  data() {
    return {
      networks: [
        {
          id: 1,
          url: "sprite.svg#icon-facebook",
        },
        {
          id: 2,
          url: "sprite.svg#icon-twitter",
        },
        {
          id: 3,
          url: "sprite.svg#icon-instagram",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer__logo {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.footer__logo-text {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin-left: 12px;
  color: #1b1c57;
}
.footer__description {
  width: 320px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: #626687;
}
.footer__networks {
  display: flex;
  margin-top: 20px;
}
.footer__networks-elem:not(:last-child) {
  margin-right: 24px;
}
</style>
