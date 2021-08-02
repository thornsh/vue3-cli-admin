import 'element-plus/lib/theme-chalk/base.css'
import { ElButton } from 'element-plus'
import { App } from 'vue'

const components = [ElButton]

export default function (app: App<Element>) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
