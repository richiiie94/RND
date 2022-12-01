const globalVariables = {
    install: (Vue: any, options: any) => {
        Vue.prototype.$Log = function() {
            console.log('install')
        };
    }
}

export default globalVariables;