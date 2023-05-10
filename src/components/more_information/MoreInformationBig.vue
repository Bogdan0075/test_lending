<template>
  <div class="information__item-big">
    <img
      class="information__image-big"
      src="img/fourth_room.png"
      alt=""
    >
    <div class="information__text-position">
      <img
        class="information__avatar-big"
        src="/img/cameron_williamson.png"
        alt=""
      >
      <p class="information__author-big">
        Cameron Williamson
      </p>
    </div>
    <h4 class="information__article-title-big">
      12 Things To Know Before Buying A House
    </h4>
    <p class="information__article-description-big">
      Want to buy a house but are unsure about what we should know, here I will
      try to explain what we should know and check when we want to buy a house
    </p>
    <div class="information__time-position">
      <svg
        class="information__time-img"
        width="24"
        height="24"
      >
        <use href="sprite.svg#icon-time" />
      </svg>
      <p class="information__time-big">
        8 min read | 25 Apr 2021
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInformationBig",
};
</script>

<style>
.information__image-big {
  margin-bottom: 24px;
}
.information__text-position {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  color: #3c4563;
}
.information__avatar-big {
  margin-right: 16px;
}
.information__article-title-big {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #1b1c57;
  line-height: 1.4;
}
.information__article-description-big {
  width: 560px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  margin-top: 12px;
  margin-bottom: 16px;
  color: #626687;
}
.information__time-position {
  display: flex;
}
.information__time-img {
  margin-right: 12px;
}
.information__time-big {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: #888b97;
}
</style>
