import Vue from 'vue'

export default {
    async createUserAccount(data) {
        Vue.http.post(`${Vue.prototype.$APIURL}user-accounts/create-user-account`, data, [{responseType: 'json'}]).then((response) => {
            console.log('response: ', response);
            return response;
        });
    },

    async getUserAccount(data) {
        this.$http.post(`${Vue.prototype.$APIURL}user-accounts/get-user-account`, data, [{responseType: 'json'}]).then(response => {
            return response;
        });
    },

    async updateUserAccount(data) {
        this.$http.post(`${Vue.prototype.$APIURL}user-accounts/update-user-account`, data, [{responseType: 'json'}]).then(response => {
            return response;
        });
    },
}