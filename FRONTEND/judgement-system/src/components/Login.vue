<template>
  <v-app>
    <v-container fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="4" lg="4">
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Input your email"
                  name="Email"
                  type="email"
                  v-model="email"
                  prepared-inner-icon="mdi-mail"
                  :rules="[rules.required, rules.email]"
                  outlined
                ></v-text-field>

                <v-text-field
                  label="Input yout password"
                  name="Password"
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
                  prepared-inner-icon="mdi-lock"
                  :append-icon-cb="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showHidePassword"
                  :rules="[rules.required]"
                  outlined
                ></v-text-field>

                <v-btn class="rounded-1" color="primary" x-large block dark> Login </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPasssword: false,
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },

  methods: {
    showHidePassword() {
      this.showPasssword = !this.showPasssword;
    },
  },
};
</script>
