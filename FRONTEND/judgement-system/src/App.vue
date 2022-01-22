<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Vue from 'vue';
import { required, digits, email, max, min, regex } from 'vee-validate/dist/rules'
import { extend, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: '{_field_} must be valid',
})

export default Vue.extend({
  name: 'App',
  components: {},

  data: () => ({
    themes: [
      {
        name: "Theme 1",
        dark: {
          primary: "#21CFF3",
          accent: "#FF4081",
          secondary: "#21dc79",
          success: "#86af3f",
          info: "#f34fc6",
          warning: "#FB8C00",
          error: "#FF5252"
        },
        light: {
          primary: "#22daff",
          accent: "#ff6b99",
          secondary: "#26ff8c",
          success: "#a5d64c",
          info: "#ff53d0",
          warning: "#ff8e00",
          error: "#ff5252"
        }
      },
      {
        name: "Theme 2",
        dark: {
          primary: "#E65100",
          accent: "#7CB342",
          secondary: "#689F38",
          success: "#4CAF50",
          info: "#6156d8",
          warning: "#1565C0",
          error: "#FF7043"
        },
        light: {
          primary: "#ffa450",
          accent: "#a1e754",
          secondary: "#92de4e",
          success: "#6dff74",
          info: "#7365ff",
          warning: "#2e8ac0",
          error: "#ff5e3c"
        }
      },
      {
        name: "Theme 3",
        dark: {
          primary: "#33691E",
          accent: "#FFCA28",
          secondary: "#607D8B",
          success: "#FFEB3B",
          info: "#2196F3",
          warning: "#9C27B0",
          error: "#B71C1C"
        },
        light: {
          primary: "#6ae240",
          accent: "#ffe063",
          secondary: "#7ea4b6",
          success: "#ffea70",
          info: "#229eff",
          warning: "#e239ff",
          error: "#e82424"
        }
      }
    ],
  }),
});
</script>

<style>
@import './styles.css';
</style>
