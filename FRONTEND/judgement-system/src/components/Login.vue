<template>
  <v-app inspire>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" dense>
        <v-col cols="12" sm="7" md="3" lg="3">
          <v-card style.border-radius="25%" elevation="5">
            <v-card-text>
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
                      v-model="name"
                      :error-messages="errors"
                      append-icon="mdi-eyes"
                      label="Password"
                      @keydown.enter="login"
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

                  <v-col align="right" style="padding-right: 0px;">
                    <v-btn class="btn-primary" type="login">
                      login
                    </v-btn>
                  </v-col>

                  <!-- <v-btn color="primary" class="mr-12" type="submit" :disabled="invalid">
                    submit
                  </v-btn> -->
                  <!-- <v-btn @click="clear"> clear </v-btn> -->

                  <v-list-item>
                    <v-list-item-content
                      ><v-list-item-title class="font-weight-bold">
                        <v-icon>mdi-palette-outline</v-icon>
                        Dark Mode</v-list-item-title
                      >
                    </v-list-item-content>

                    <v-list-item-action
                      ><v-switch color="error" v-model="$vuetify.theme.dark" />
                    </v-list-item-action>
                  </v-list-item>
                </form>
              </validation-observer>
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
    name: "",
    phoneNumber: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: null,
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },

    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },

    login() {
      this.$refs.observer.validate();
    },
  },
};
</script>

<style scoped>
  
</style>