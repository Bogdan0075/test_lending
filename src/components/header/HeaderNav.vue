<template>
  <nav>
    <ul class="hero__nav-bar">
      <li class="nav-bar__item nav-bar__item-logo">
        <img
          src="/img/logo.png"
          alt="logo"
        >
        <p class="nav-bar__logo-title">
          Hounter
        </p>
      </li>
      <li
        v-for="(item, index) in navBarItems"
        :key="index"
        class="nav-bar__item nav-bar__button-menu"
      >
        <button>
          {{ item.title }}
        </button>
      </li>
      <li class="nav-bar__item">
        <button class="nav-bar__item-button">
          Sign Up!
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderContainer",
  props: {
    navBarItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.hero__nav-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.nav-bar__item-logo {
  display: flex;
  align-items: center;
  margin-right: auto;
}
.nav-bar__logo-title {
  font-weight: 700;
  font-size: 16px;
  color: #1b1c57;
  padding-left: 12px;
}
.nav-bar__item-button {
  margin-right: 120px;
  margin-left: 56px;
  color: #047857;
  font-size: 14px;
  font-weight: 600;
  background: #d1fae5;
  border-radius: 32px;
  padding: 12px 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.nav-bar__button-menu {
  padding: 8px 16px;
  color: #f0f3fd;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 32px;
  font-weight: 600;
  font-size: 14px;
  transition-duration: 1s;
}
.nav-bar__button-menu:hover {
  background: #d1fae5;
  color: #047857;
}
.nav-bar__button-menu:nth-child(4)::after {
  margin-left: 14px;
  margin-right: 10px;
}
.nav-bar__button-menu:not(:first-child) {
  margin-left: 24px;
}
</style>
