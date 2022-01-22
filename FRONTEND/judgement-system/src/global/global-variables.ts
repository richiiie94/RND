const globalVariables = {
    install: (Vue: any, options: any) => {
        Vue.prototype.$APIURL = process.env.API_URL || 'http://localhost:5000/API/'; // !LOCAL HOST 5000
    } 
}

export default globalVariables;