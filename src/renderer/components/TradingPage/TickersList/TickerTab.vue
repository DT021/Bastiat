<template>
  <i class="tab">
    {{ ticker }}
  </i>
</template>

<script>
  export default {
    name: "ticker-tab",
    props: ['ticker']
  }
</script>

<style>
  .tab {
    width: 13vh;
    height: 5vh;

    background: #F2C94C;
    color: black;
  }
</style>
