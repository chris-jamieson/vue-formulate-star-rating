<script>
import Vue from 'vue';
import VueFormulateStarRating from '@/vue-formulate-star-rating.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VueFormulateStarRating
  }
});
</script>

<template>
  <div id="app">
    <vue-formulate-star-rating />
  </div>
</template>
