<template>
  <section>
    <div class="hero__search">
      <div class="hero__input-wrapper">
        <svg
          class="hero__input-wrapper-image"
          width="24"
          height="24"
        >
          <use href="sprite.svg#icon-email" />
        </svg>
        <input
          type="text"
          class="hero__input"
          placeholder="Your email here"
        >
      </div>
      <button
        type="submit"
        class="hero__button"
      >
        Subsribe Now
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SubscribeInput",
};
</script>

<style scoped>
.hero__input-wrapper {
  display: flex;
}
.hero__input-wrapper-image {
  margin-left: 24px;
  margin-right: 16px;
}
.hero__search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e0e3eb;
  background: #ffffff;
  border-radius: 32px;
  height: 56px;
  margin-top: 32px;
  margin-bottom: 32px;
}

.hero__input {
  font-size: 14px;
  width: 300px;
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
  width: 129px;
  height: 46px;
  margin-right: 4px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
}
</style>
