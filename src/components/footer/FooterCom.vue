<template>
  <Container class="footer">
    <div>
      <FooterDescription />
    </div>
    <div  class="footer__info">
      <ul class="footer__list">
        <li
          v-for="elem in info"
          :key="elem.id"
          class="footer__list-item"
        >
          <h5 class="footer__list-title">
            {{ elem.value }}
          </h5>
          <p
            v-for="title in elem.description"
            :key="title"
            class="footer__list-description"
          >
            {{ title }}
          </p>
        </li>
      </ul>
    </div>
  </Container>
</template>

<script>
import FooterDescription from "./FooterDescription.vue";
import Container from "../Container.vue";

export default {
  name: "FoterCom",
  components: { FooterDescription, Container },
  data() {
    return {
      info: [
        {
          id: 1,
          value: "Property",
          description: ["House", "Apartment", "Villa"],
        },
        {
          id: 2,
          value: "Article",
          description: [
            "New Article",
            "Popular Article",
            "Most Read",
            "Tips & Tricks",
          ],
        },
        {
          id: 3,
          value: "Contact",
          description: [
            "2464 Royal Ln. Mesa, New Jersey 45463",
            "(671) 555-0110",
            "info@hounter.com",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 120px;
  justify-content: space-between;
}
.footer__list {
  display: flex;
}
.footer__list-item:not(:last-child) {
  margin-right: 84px;
}
.footer__list-title {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  margin-bottom: 24px;
  color: #0e1735;
}
.footer__list-description {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  color: #888b97;
}
.footer__list-description:not(:last-child) {
  margin-bottom: 18px;
}
</style>
