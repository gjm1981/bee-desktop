import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from "axios";
import qs from 'qs'


const formRequest = axios.create({
    withCredentials: true, // send cookies when cross-domain requests
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: function (data) {
        if(data!=undefined && typeof(data) === 'string'){
            return data;
        }
        return qs.stringify(data, {
            allowDots: true
        });
    }
});
const uploadRequest = axios.create({
    withCredentials: true, // send cookies when cross-domain requests
    headers: { 'Content-Type': 'multipart/form-data' }
});

export {formRequest, uploadRequest}
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')