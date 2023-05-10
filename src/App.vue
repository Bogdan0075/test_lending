<template>
  <div id="app">
    <HeaderSection />
    <FeatureHouse />
    <TourOfHouse />
    <UserSays />
    <MoreInformation />
    <SubscribeCom />
    <FooterCom />
  </div>
</template>

<script>
import HeaderSection from './components/header/HeaderSection.vue';
import FeatureHouse from './components/feature_house/FeatureHouse.vue';
import TourOfHouse from './components/tour_of_house/TourOfHouse.vue';
import UserSays from './components/user_says/UserSays.vue';
import MoreInformation from './components/more_information/MoreInformation.vue';
import SubscribeCom from './components/subscribe/Subscribe.vue';
import FooterCom from './components/footer/FooterCom.vue';

export default {
  name: 'App',
  components: {
    HeaderSection, FeatureHouse, TourOfHouse, MoreInformation, SubscribeCom,FooterCom,UserSays
  } 
}
</script>