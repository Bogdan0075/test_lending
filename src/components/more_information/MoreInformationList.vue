<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.id"
      class="information__item"
    >
      <div class="information__content">
        <img
          width="200"
          height="144"
          class="information__image"
          :src="home.img"
          :alt="home.title"
        >
        <div class="information__text">
          <div class="information__text-position">
            <img
              class="information__avatar"
              :src="home.avatar"
              :alt="home.name"
              width="32"
              height="32"
            >
            <p class="information__author">
              {{ home.name }}
            </p>
          </div>
          <h4 class="information__article-title">
            {{ home.title }}
          </h4>
          <div class="information__time-position">
            <svg
              class="information__time-img"
              width="24"
              height="24"
            >
              <use :href="home.url" />
            </svg>
            <p class="information__time">
              {{ home.time }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInformationList",
  data() {
    return {
      homes: [
        {
          id: "1",
          img: "/img/first_room.png",
          avatar: "/img/dianna_russell(32).png",
          name: "Dianne Russell",
          title: "The Things We Need To Check When We Want To Buy A House",
          time: "4 min read | 25 Apr 2021",
          url: "sprite.svg#icon-time",
        },
        {
          id: "2",
          img: "/img/second_room.png",
          avatar: "/img/courtney_henry.png",
          name: "Courtney Henry",
          title:
            "7 Ways To Distinguish The Quality Of The House We Want To Buy",
          time: "6 min read | 24 Apr 2021",
          url: "sprite.svg#icon-time",
        },
        {
          id: "3",
          img: "/img/third_room.png",
          avatar: "/img/darlene_robertson.png",
          name: "Darlene Robertson",
          title: "The Best Way To Know The Quality Of The House We Want To Buy",
          time: "2 min read | 24 Apr 2021",
          url: "sprite.svg#icon-time",
        },
      ],
    };
  },
};
</script>

<style>
.information__item:not(:last-child) {
  margin-bottom: 40px;
}
.information__content {
  display: flex;
}
.information__text {
  margin-left: 32px;
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
.information__author {
  margin-left: 16px;
  font-size: 14px;
  line-height: 1.5;
}
.information__article-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 1.8;
  color: #1b1c57;
  margin-bottom: 16px;
  width: 340px;
}
.information__time-position {
  display: flex;
}
.information__time-img {
  margin-right: 12px;
}
.information__time {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7;
  color: #888b97;
}
</style>
