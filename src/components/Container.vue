<template>
  <section class="container">
    <slot />
  </section>
</template>

<script>
export default {
  name: "ContainerCenter"
}
</script>

<style scoped>
.container {
    max-width: 1440px;
    margin: 0 auto;
}
</style>