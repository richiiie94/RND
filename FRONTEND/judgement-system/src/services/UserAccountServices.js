import Vue from 'vue'

const HTTPHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
 }
export default class UserAccountServices {
    async createUserAccount(data) {
        return await Vue.http.post(`${Vue.prototype.$APIURL}user-accounts/create-user-account`, data, HTTPHeaders);
    }

    async getUserAccount(data) {
        return await this.$http.post(`${Vue.prototype.$APIURL}user-accounts/get-user-account`, data, HTTPHeaders);
    }

    async updateUserAccount(data) {
        return await this.$http.post(`${Vue.prototype.$APIURL}user-accounts/update-user-account`, data, HTTPHeaders);
    }
}