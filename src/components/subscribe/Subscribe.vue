<template>
  <section class="subscribe">
    <h2 class="subscribe__title">
      Subscribe For More Info <br>
      And Update From Hounter
    </h2>
    <SubscribeInput />
  </section>
</template>

<script>
import SubscribeInput from "./SubscribeInput.vue";
export default {
  name: "SubscribeCom",
  components: { SubscribeInput },
};
</script>

<style>
.subscribe {
  width: 1200px;
  height: 312px;
  margin: 0 auto;
  margin-top: 120px;
  background-image: url(@/assets/subscribe_background.png);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.subscribe__title {
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin-top: 30px;
  line-height: 1.5;
  color: #1b1c57;
}
</style>
