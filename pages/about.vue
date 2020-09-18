<template>
  <section>
    <h1>About page</h1>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nulla nostrum aliquam cum culpa, itaque esse nihil? Similique, et alias!</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga maiores temporibus amet suscipit minima debitis.</p>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 2500);
    });
  },
  middleware: ["auth"],
};
</script>
