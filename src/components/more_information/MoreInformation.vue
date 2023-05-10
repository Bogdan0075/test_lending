<template>
  <Container class="information">
    <div class="information-title-position">
      <p class="information__subtitle">
        See Tips And Trick From Our Partnership
      </p>
      <h2 class="information__title">
        Find Out More About <br>
        Selling And Buying Homes
      </h2>
      <button class="information__button">
        More Artikel
      </button>
    </div>
    <div class="information__position">
      <div>
        <MoreInformationList />
      </div>
      <div class="information__position-big">
        <MoreInformationBig />
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "../Container.vue";
import MoreInformationList from "./MoreInformationList.vue";
import MoreInformationBig from "./MoreInformationBig.vue";

export default {
  name: "MoreInformation",
  components: { Container, MoreInformationList, MoreInformationBig },
};
</script>

<style scoped>
.information {
  margin-top: 155px;
}
.information-title-position {
  text-align: center;
}
.information__subtitle {
  margin-bottom: 10px;
  position: relative;
  font-weight: 500;
  font-size: 14px;
  color: #f59e0b;
  line-height: 1.8;
}
.information__subtitle::before {
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
.information__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 1.2;
  color: #1b1c57;
}
.information__button {
  width: 118px;
  height: 46px;
  background: #10b981;
  border-radius: 32px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 40px;
  font-style: normal;
  color: #ffffff;
  font-size: 14px;
}
.information {
  margin: 0 auto;
  margin-top: 120px;
}
.information__position {
  display: flex;
  justify-content: center;
}

.information__position-big {
  padding-left: 64px;
}
</style>
