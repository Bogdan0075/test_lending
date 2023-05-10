<template>
  <div class="hero__search">
    <div class="hero__input-wrapper">
      <img
        src="/img/location.png"
        alt="location"
        width="24"
        height="24"
        class="hero__input-img"
      >
      <input
        type="text"
        class="hero__input"
        placeholder="Search for the location you want!"
      >
    </div>
    <button
      type="submit"
      class="hero__button"
    >
      <div class="hero__button-position">
        <p>Search</p>
        <svg
          class="hero__button-next"
          width="24"
          height="24"
        >
          <use href="sprite.svg#icon-next" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderInput",
};
</script>

<style scoped>
.hero__search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  height: 56px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.hero__input {
  font-size: 14px;
  width: 303px;
  font-weight: 500;
  color: #888b97;
  height: 22px;
}

.hero__input-img {
  margin-left: 24px;
  margin-right: 16px;
}
.hero__button {
  background: #10b981;
  border-radius: 32px;
  padding: 12px 16px;
  width: 109px;
  height: 48px;
  color: #ffffff;
}
.hero__button-position {
  display: flex;
  align-items: center;
}
.hero__button-next {
  fill: #ffffff;
  margin-left: 4px;
}
</style>
