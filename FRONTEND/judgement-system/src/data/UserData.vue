<template>
  <v-app inspire>
    <v-container fill-height fluid>
      <v-row align="center" justify="center" dense>
        <template>
          <v-data-table
            :headers="headersUser"
            :items="itemsUserData"
            :items-per-page="5"
            item-key="name"
            class="elevation-6"
            :footer-props="footerProps">
            <template v-slot:[`item.actions`]="{ item }">
              <v-icon
                medium
                class="mr-2"
                @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon
                medium
                @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </template>
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
    headersUser = [
      {
        text: 'No',
        align: 'center',
        value: 'no',
      },
      {
        text: 'Name',
        align: 'center',
        value: 'name',
      },
      {
        text: 'Email',
        align: 'center',
        value: 'email',
      },
      {
        text: 'Last Updated',
        align: 'center',
        value: 'last_update_time',
      },
      {
        text: 'Actions',
        align: 'center',
        value: 'actions',
      },
    ],

    footerProps = {
      showFirstLastPage: true,
      firstIcon: 'mdi-skip-previous-circle',
      lastIcon: 'mdi-skip-next-circle',
      prevIcon: 'mdi-arrow-left-drop-circle',
      nextIcon: 'mdi-arrow-right-drop-circle'
    },

    itemsUserData = [],
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
        username: "richard",
        email: "richard@gmail.com",
      };
      try {
        // const response = await post(`${this.$APIURL}login`, Post_Data);
        // console.log(`SUBMIT RESPONSE: ${response}`);
      } catch (err) {
        console.log("SUBMIT ERROR");
      }
    },

    forgotPassword() {
      console.log("Forgot Password Clicked");
    },

    signUp() {
      console.log("SignUp Clicked");
    },

    getUserData() {
      
    }
  },
};
</script>

<style scoped>
</style>