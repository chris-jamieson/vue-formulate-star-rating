<script>
import StarRating from "vue-star-rating";
import _ from "underscore";

export default /*#__PURE__*/ {
  name: "VueFormulateStarRating", // vue component name
  components: {
    StarRating,
  },
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        if (!this.context.model || this.context.model === "") {
          return 0;
        }
        return this.context.model;
      },
      set(val) {
        this.context.model = val;
      },
    },
  },
  methods: {
    omit: _.omit,
    onRatingSelected(rating) {
      this.context.rootEmit("rating-selected", rating);
    },
    onCurrentRating(rating) {
      this.context.rootEmit("current-rating", rating);
    },
  },
};
</script>

<template>
  <div
    :data-type="context.type"
    :class="
      `formulate-input-element formulate-input-element--${context.type} ${context.classes.element}`
    "
  >
    <star-rating
      v-model="model"
      @rating-selected="onRatingSelected"
      @current-rating="onCurrentRating"
      v-bind="omit(context.attributes, 'class')"
    ></star-rating>
  </div>
</template>

<style scoped></style>
