<template>
  <v-card class="mx-auto">
    <v-col>
      <v-row>
        <v-text-field
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="showPassword ? 'text' : 'password'"
          name="input-10-1"
          label="Normal with hint text"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-row>
    </v-col>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      showPasssword: false,
      rules: {
        required: (value) => !!value || 'Required.',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
    };
  },
};
</script>
