import { App } from 'vue'
import registerElement from './register-element'

export function registerApp(app: App<Element>): void {
  registerElement(app)
}
