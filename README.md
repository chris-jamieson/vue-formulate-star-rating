# Vue Formulate Star Rating Input

![Version Shield](https://img.shields.io/npm/v/vue-formulate-star-rating)
![Licence Shield](https://img.shields.io/npm/l/vue-formulate-star-rating)

A simple wrapper component for the excellent [vue-star-rating](https://www.npmjs.com/package/vue-star-rating) package by [craigh411](https://github.com/craigh411).

This component allows you to use a star rating as a custom input as a [Vue Formulate Plugin](https://vueformulate.com/guide/plugins/).

## Installation

### Using NPM and webpack

1. `npm install --save vue-formulate-star-rating`
2. Register the component

   ```js
   import Vue from "vue";
   import VueFormulate from "@braid/vue-formulate";

   import VueFormulateStarRating from "vue-formulate-star-rating";

   // add plugin to VueFormulate
   Vue.use(VueFormulate, {
     plugins: [VueFormulateStarRating],
   });
   ```

3. Use in a Formulate form
   ```js
   <FormulateInput
     type="star-rating"
     name="productRating"
     label="Rate this product"
     help="How would you rate this product?"
     :max-rating="5"
     :show-rating="false"
     validation="required|min:4"
   />
   ```

### Using script tags

1. Include the `vue-formulate-star-rating`.
   ```html
   <script src="https://unpkg.com/vue-formulate-star-rating/dist/VueFormulateStarRating.umd.min.js"></script>
   ```
2. Register a custom Formulate input
   ```js
   Vue.use(VueFormulate, {
     plugins: [VueFormulateStarRating.default],
   });
   ```
3. Use in your form
   ```js
   <formulate-input type="star-rating" label="Product rating" name="rating" help="Rate this" :show-rating="false" validation="required"></formulate-input>
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
- make your changes
- `npm run build`
- `npm version patch`
- `npm publish`
