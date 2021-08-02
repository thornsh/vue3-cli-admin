import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from './global'
import router from './routers'
import shRequest from './service'
import store from './store'

const app = createApp(App)

registerApp(app)

app.use(router)
app.use(store)

app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

shRequest
  .request<DataType>({
    method: 'get',
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
