<template>
  <v-app inspire>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="5" lg="4">
          <v-card style.border-radius="25%" elevation="5">
            <v-card-text>
              <v-card-title class="first-title">
                Login Page
              </v-card-title>
              
              <!-- <validation-observer ref="observer" v-slot="{ invalid }"> -->
              <validation-observer ref="observer">
                <form @submit.prevent="login">
                  <validation-provider
                    v-slot="{ errors }"
                    name="E-mail"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      label="E-mail"
                      @keydown.enter="login"
                    ></v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required"
                  >
                    <v-text-field
                      v-model="password"
                      :type="!show_password ? 'password' : 'text'"
                      :error-messages="errors"
                      :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                      label="Password"
                      @keydown.enter="login"
                      @click:append="showPassword"
                    ></v-text-field>
                  </validation-provider>

                  <!-- <validation-provider
                    v-slot="{ errors }"
                    name="Phone Number"
                    :rules="{
                      required: true,
                      digits: 7,
                      regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
                    }"
                  >
                    <v-text-field
                      v-model="phoneNumber"
                      :counter="7"
                      :error-messages="errors"
                      label="Phone Number"
                      required
                    ></v-text-field>
                  </validation-provider> -->

                  <!-- <validation-provider
                    v-slot="{ errors }"
                    name="Selection"
                    rules="required"
                  >
                    <v-select
                      v-model="select"
                      :items="items"
                      :error-messages="errors"
                      label="Select"
                      data-vv-name="select"
                      required
                    ></v-select>
                  </validation-provider> -->

                  <!-- <validation-provider
                    v-slot="{ errors }"
                    rules="required"
                    name="Checkbox"
                  >
                    <v-checkbox
                      v-model="checkbox"
                      :error-messages="errors"
                      value="1"
                      label="Option"
                      type="checkbox"
                      required
                    ></v-checkbox>
                  </validation-provider> -->

                  <v-col align="right" style="padding-right: 0px">
                    <v-btn class="btn-primary" type="login"> LOGIN </v-btn>
                  </v-col>

                  <!-- <v-btn color="primary" class="mr-12" type="submit" :disabled="invalid">
                    submit
                  </v-btn> -->
                  <!-- <v-btn @click="clear"> clear </v-btn> -->

                  <!-- <v-list-item>
                    <v-list-item-content
                      ><v-list-item-title class="font-weight-bold">
                        <v-icon>mdi-palette-outline</v-icon>
                        Dark Mode</v-list-item-title
                      >
                    </v-list-item-content>

                    <v-list-item-action
                      ><v-switch color="error" v-model="$vuetify.theme.dark" />
                    </v-list-item-action>
                  </v-list-item> -->
                </form>
              </validation-observer>

              <v-col cols="12">
                <v-row align-content="space-between">
                  <v-col cols="6" style="padding-left: 0px">
                    <v-btn class="btn-text pa-2" @click="forgotPassword" style="font-size: 10px;" text>
                      Forgot Password?
                    </v-btn>
                  </v-col>

                  <v-col cols="6" align="right" style="padding-right: 0px">
                    <v-btn class="btn-primary pa-2" @click="signUp" style.xs="width: 100%;">
                      SIGN UP
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: '',
    password: '',
    show_password: false,
  }),

  methods: {
    async submit() {
      this.$refs.observer.validate();
    },

    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.password = "";
      this.show_password = false;
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },

    showPassword() {
      this.show_password = !this.show_password;
    },

    async login() {
      this.$refs.observer.validate();
      console.log("apiURL", this.$APIURL);
      this.$Log;
      const Post_Data = {
        username: 'richard',
        email: 'richard@gmail.com',
      };
      try {
        // const response = await post(`${this.$APIURL}login`, Post_Data);

        // console.log(`SUBMIT RESPONSE: ${response}`);
      } catch(err) {
        console.log('SUBMIT ERROR');
      }
    },

    forgotPassword() {
      console.log("Forgot Password Clicked");
    },

    signUp() {
      console.log("SignUp Clicked");
    },
  },
};
</script>

<style scoped>
</style>