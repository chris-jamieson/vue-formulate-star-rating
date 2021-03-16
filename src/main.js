import VueFormulateStarRating from "./vue-formulate-star-rating";

export default function VueFormulateStarRatingPlugin(formulateInstance) {
  formulateInstance.extend({
    components: {
      VueFormulateStarRating,
    },
    library: {
      "star-rating": {
        classification: "number",
        component: "VueFormulateStarRating",
      },
    },
  });
}
