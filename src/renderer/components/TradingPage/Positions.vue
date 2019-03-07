<template>
  <ul class="positions">
    <position :key="position.id" v-for="position in positions" position="position">
    </position>
  </ul>
</template>

<script>
  import Position from "./Positions/Position"

  export default {
    components: {position: Position}
  }
</script>

<style>

</style>
