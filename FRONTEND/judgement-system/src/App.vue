<template>
  <v-app>
    <Login />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from '@/components/Login.vue';
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
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
  message: 'Email must be valid',
})

export default Vue.extend({
  name: 'App',
  components: {
    Login,
  },

  data: () => ({
    //
  }),
});
</script>
