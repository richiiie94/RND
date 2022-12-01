<template>
  <v-app inspire>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="8" md="5" lg="4">
          <v-card style.border-radius="25%" elevation="5">
            <v-card-text>
              <v-card-title class="first-title"> Sign Up Page </v-card-title>

              <!-- <validation-observer ref="observer" v-slot="{ invalid }"> -->
              <validation-observer ref="observer">
                <form @submit.prevent="signUp">
                  <validation-provider
                    v-slot="{ errors }"
                    name="Name"
                    :rules="{ required: true }">
                    <v-text-field
                      v-model="name"
                      :error-messages="errors"
                      label="Name"
                      required>
                    </v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="Username"
                    :rules="{ required: true, min: 8 }">
                    <v-text-field
                      v-model="username"
                      :error-messages="errors"
                      label="Username"
                      required>
                    </v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="E-mail"
                    :rules="{ required: true, email: true }">
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      label="E-mail">
                    </v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    :rules="{ required: true, min: 8 }">
                    <v-text-field
                      v-model="password"
                      :type="!show_password ? 'password' : 'text'"
                      :error-messages="errors"
                      :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                      label="Password"
                      ref="password"
                      @click:append="showPassword">
                    </v-text-field>
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="Confirm Password"
                    :rules="{ required: true, confirmed: password }">
                    <v-text-field
                      v-model="confirm_password"
                      :type="!show_confirm_password ? 'password' : 'text'"
                      :error-messages="errors"
                      :append-icon="show_confirm_password ? 'mdi-eye' : 'mdi-eye-off'"
                      label="Confirm Password"
                      data-vv-as="password"
                      @click:append="showConfirmPassword">
                    </v-text-field>
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

                  <v-col cols="12">
                    <v-row align-content="space-between">
                      <v-col cols="6" style="padding-left: 0px">
                        <v-btn class="btn-text pa-2" @click="back" style="font-size: 10px;" text>
                          BACK
                        </v-btn>
                      </v-col>

                      <v-col cols="6" align="right" style="padding-right: 0px">
                        <v-btn class="btn-primary pa-2" type="signUp"> Sign Up </v-btn>
                        <snack-bar :elementId="'signUpPage'" :message="snackBar_message" :color="snackBar_color" :showBtn="snackBar_showBtn" :timeout="snackBar_timeout" ref="snackBar"></snack-bar>
                        <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
                        <response-dialogue ref="responseDialogue"></response-dialogue>
                      </v-col>
                    </v-row>
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

              <!-- <v-col cols="12">
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
              </v-col> -->
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import ConfirmDialogue from '@/reusables/ConfirmDialogue.vue';
import ResponseDialogue from '@/reusables/ResponseDialogue.vue';
import SnackBar from '@/reusables/SnackBar.vue';
import UserAccountServices from '@/services/UserAccountServices';

const userAccountServices = new UserAccountServices();

export default {
  components: {
    ConfirmDialogue,
    ResponseDialogue,
    SnackBar,
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    show_password: false,
    show_confirm_password: false,

    snackBar_message: '',
    snackBar_color: undefined,
    snackBar_showBtn: false,
    snackBar_timeout: -1,
  }),

  methods: {
    async submit() {
      this.$refs.observer.validate()
    },

    clear() {
      this.name = ''
      this.username = ''
      this.email = ''
      this.password = ''
      this.confirm_password = ''
      this.show_password = false
      this.show_confirm_password = false
      this.$refs.observer.reset()
    },

    showPassword() {
      this.show_password = !this.show_password
    },

    showConfirmPassword() {
      this.show_confirm_password = !this.show_confirm_password
    },

    back() {
      this.$router.push('/login')
    },

    async signUp() {
      try {
        // console.log("apiURL", this.$APIURL);
        const valid = await this.$refs.observer.validate()
        // console.log(valid);

        if (valid) {
          const Post_Data = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
          };

          console.log('createUserAccount Post_Data: ', Post_Data)

          const ok = await this.$refs.confirmDialogue.show({ message: 'Are you sure?' })

          if (ok) {
            userAccountServices.createUserAccount(Post_Data).then((response) => {
              if ('data' in response) {
                if (response['data']['statusCode'] === 0) {
                  this.snackBar_message = response['data']['message']
                  this.snackBar_color = 'error'
                  this.snackBar_showBtn = true
                  return this.$refs.snackBar.show({})
                }

                this.snackBar_message = response['data']['message']
                this.snackBar_color = 'success'
                this.snackBar_timeout = 3000
                this.snackBar_showBtn = false
                this.$refs.snackBar.show({})
                this.clear()
                
                setTimeout(() => {
                  this.$refs.snackBar.close()
                }, this.snackBar_timeout)
              }
            }).catch((err) => {
              this.snackBar_message = err['message']
              this.snackBar_color = 'error'
              this.snackBar_showBtn = true
              return this.$refs.snackBar.show({})
            })
          }
        }
      } catch (err) {
        console.log('message: ', err.message)
      }
    },

    forgotPassword() {
      console.log("Forgot Password Clicked");
    },
  },
};
</script>

<style scoped>
</style>