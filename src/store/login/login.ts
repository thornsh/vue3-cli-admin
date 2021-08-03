import { Module } from 'vuex'
import { IRootState } from '../types'

export interface IloginState {
  token: string
  userInfo: any
}

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {
    clickLogin({ commit }, payload) {
      console.log('执行actions')
    }
  }
}

export default loginModule
