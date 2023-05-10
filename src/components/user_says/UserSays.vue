<template>
  <section class="user-says">
    <p class="user-says__intro">
      See Our Review
    </p>
    <h2 class="user-says__title">
      What Our User Say About Us
    </h2>
    <Carousel :per-page="3">
      <Slide
        v-for="comment in comments"
        :key="comment.id"
      >
        <UserSaysCarouseSlide
          :avatar="comment.avatar"
          :avatar-name="comment.name"
          :avatar-descr="comment.avatarDescription"
          :description="comment.description"
          :img="comment.url"
          :mark="comment.mark"
          :star="comment.star"
          :title="comment.title"
        />
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import UserSaysCarouseSlide from "./UserSaysCarouseSlide.vue";

export default {
  name: "UserSays",
  components: { Carousel, Slide, UserSaysCarouseSlide },
  data() {
    return {
      comments: [
        {
          id: "1",
          url: "img/second_house.png",
          title: "My House Sold Out Fast!",
          description:
            "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",
          avatar: "img/courtney_henry.png",
          name: "Courtney Henry",
          avatarDescription: "CEO Andarafish",
          star: "sprite.svg#icon-star",
          mark: "4.3",
        },
        {
          id: "2",
          url: "img/first_house.png",
          title: "Best! I got the house I wanted through Hounter",
          description:
            "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
          avatar: "img/dianne_russell.png",
          name: "Dianne Russell",
          avatarDescription: "Manager Director",
          star: "sprite.svg#icon-star",
          mark: "4.6",
        },
        {
          id: "3",
          url: "img/third_house.png",
          title: "Through The Hounter, I Can Get A House For my Self",
          description:
            "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
          avatar: "img/esther_howard.png",
          name: "Esther Howard",
          avatarDescription: "Head of Marketing",
          star: "sprite.svg#icon-star",
          mark: "4.6",
        },
        {
          id: "4",
          url: "img/third_house.png",
          title: "Best! I got the house I wanted through Hounter",
          description:
            "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
          avatar: "img/esther_howard.png",
          name: "Dianne Russell",
          avatarDescription: "Manager Director",
          star: "sprite.svg#icon-star",
          mark: "4.6",
        },
      ],
    };
  },
};
</script>

<style>
.user-says {
  margin-top: 165px;
}
.user-says__intro {
  color: #f59e0b;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 12px;
  line-height: 1.28;
  text-align: center;
  position: relative;
}
.user-says__intro::before {
  content: "";
  display: block;
  width: 32px;
  height: 1px;
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f59e0b;
}

.user-says__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #1b1c57;
  margin-bottom: 40px;
  line-height: 1.25;
  text-align: center;
}
</style>
