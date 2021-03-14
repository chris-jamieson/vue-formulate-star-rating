# Vue Formulate Star Rating Input

A simple wrapper component for the excellent [vue-star-rating](https://www.npmjs.com/package/vue-star-rating) package by [craigh411](https://github.com/craigh411).

This component allows you to use a star rating as a custom input in [Vue Formulate](https://vueformulate.com/).

Package built using [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup).

It's a good idea to familiarise yourself with the Vue Formulate documentation on [custom input types](https://vueformulate.com/guide/inputs/custom-inputs/)

## Installation

### Using NPM and webpack

1. `npm install --save vue-formulate-star-rating`
2. Register the component

   ```js
   import FormulateStarRating from "vue-formulate-star-rating";

   Vue.component("FormulateStarRating", FormulateStarRating);
   ```

3. Register a custom Formulate input
   ```js
   Vue.use(VueFormulate, {
     library: {
       rating: {
         classification: "number",
         component: "FormulateStarRating",
       },
     },
     classes: {
       // ...
     },
   });
   ```
4. Use in a Formulate form
   ```js
   <FormulateInput
     type="rating"
     name="productRating"
     label="Rate this product"
     help="How would you rate this product?"
     :max-rating="5"
     :show-rating="false"
     validation="required|min:4"
   />
   ```

### Using script tags

1. Include the `vue-formulate-star-rating` library _and_ the `vue-star-rating` library.
   ```html
   <script src="https://unpkg.com/vue-star-rating/dist/VueStarRating.umd.min.js"></script>
   <script src="https://unpkg.com/vue-formulate-star-rating/dist/vue-formulate-star-rating.min.js"></script>
   ```
2. Register the component within your main `<script>` tag:
   ```js
   Vue.component("vue-formulate-star-rating", VueFormulateStarRating);
   ```
3. Register a custom Formulate input
   ```js
   Vue.use(VueFormulate, {
     library: {
       rating: {
         classification: "number",
         component: "vue-formulate-star-rating",
       },
     },
     classes: {
       // ...
     },
   });
   ```
4. Use in your form
   ```js
   <formulate-input type="rating" label="Product rating" name="rating" help="Rate this" :show-rating="false" validation="required"></formulate-input>
   ```

Note: as per the [Vue Formulate docs](https://vueformulate.com/guide/installation/#direct-download):

> Due to DOM limitations, when mounting Vue Formulate in DOM templates (outside of single-file components) all the component names will need to be lower-cased, hyphen separated and with a closing tag.

## Usage

You can pass props to the input, they will be bound using v-bind.

See [vue-star-rating](https://www.npmjs.com/package/vue-star-rating) documentation for list of available props.

Validation rules work as normal.

For example, this would set the max rating to 10 and hide the rating, while requiring a minimum rating of 4:

```js
   <FormulateInput
     type="rating"
     name="productRating"
     label="Rate this product"
     help="How would you rate this product?"
     :max-rating="10"
     :show-rating="false"
     validation="required|min:4"
   />
```

## Contribute

Contributions and issues welcome, please file a PR or raise an issue [on GitHub](https://github.com/jamiesoncj/vue-formulate-star-rating).

## Development

- `npm install`
- `npm run build`
- make your changes
- `npm run build`
- `npm version patch`
- `npm publish`
