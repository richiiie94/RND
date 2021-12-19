const globalVariables = {
    install: (Vue: any, options: any) => {
        Vue.prototype.$APIURL = 'http://localhost:5000/api/'; // !LOCAL HOST 5000
    } 
}

export default globalVariables;